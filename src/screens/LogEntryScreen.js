/**
 * Log entry.
 *
 * One screen for every log type. The form is built from the type's field
 * definitions in data/logTypes.js, so adding a new kind of log never means
 * writing a new form.
 *
 * A built in timer handles the types that need one, feeding, pumping,
 * sleep and reading, because a parent starting a feed cannot also be
 * doing arithmetic about when it began.
 */

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Screen, Content, ScreenHeader, Card, Button, Chip, ChipRow, BodyText, Tiny,
  Eyebrow, Callout, Disclaimer, Empty, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getLogType, getMedInterval } from '../data/logTypes';
import { nextDoseDue } from '../utils/exportLogs';
import { theme } from '../theme/theme';

const F = theme.typography.fontFamily;

export default function LogEntryScreen({ route, navigation }) {
  const { addLog, logs, activeChild } = useApp();
  const typeId = route.params && route.params.typeId;
  const type = getLogType(typeId);

  const [values, setValues] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const tick = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({ title: type ? type.label : '' });
  }, [navigation, type]);

  useEffect(() => {
    if (running) {
      tick.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else if (tick.current) {
      clearInterval(tick.current);
      tick.current = null;
    }
    return () => { if (tick.current) clearInterval(tick.current); };
  }, [running]);

  if (!type) {
    return <Screen><Content><Empty title="Unknown log type" /></Content></Screen>;
  }

  const set = (id, v) => setValues((prev) => ({ ...prev, [id]: v }));

  // The last side used, so a parent does not have to remember at 4 AM.
  const lastSide = (() => {
    if (!type.tracksAlternating) return null;
    const prev = (logs || []).find((l) => l.typeId === type.id && (l.values || {}).side);
    return prev ? prev.values.side : null;
  })();

  const medDue = type.tracksInterval && values.name ? nextDoseDue(logs, values.name) : null;
  const medInfo = type.tracksInterval && values.name ? getMedInterval(values.name) : null;

  const missing = type.fields.filter((f) => f.required && !values[f.id]);

  function save() {
    if (missing.length) {
      return Alert.alert('Almost there', `Please fill in ${missing.map((f) => f.label.toLowerCase()).join(' and ')}.`);
    }
    const finalValues = { ...values };
    const durationField = type.fields.find((f) => f.type === 'duration');
    if (durationField && seconds > 0 && !finalValues[durationField.id]) {
      finalValues[durationField.id] = Math.max(1, Math.round(seconds / 60));
    }
    addLog(type.id, finalValues);
    navigation.goBack();
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <Screen>
      <ScreenHeader
        title={type.label}
        sub={activeChild ? `For ${activeChild.name}` : null}
        small
      />

      <Content>
        {type.hasTimer ? (
          <Card tone="leafy">
            <Eyebrow>{type.timerLabel}</Eyebrow>
            <BodyText style={{ fontFamily: F.display, fontSize: 42, color: C.ink, marginVertical: 4 }}>
              {mm}:{ss}
            </BodyText>
            <Row style={{ gap: 9, marginTop: 6 }}>
              <View style={{ flex: 1 }}>
                <Button
                  title={running ? 'Pause' : seconds > 0 ? 'Resume' : 'Start'}
                  icon={running ? 'pause' : 'play'}
                  onPress={() => setRunning(!running)}
                />
              </View>
              {seconds > 0 ? (
                <View style={{ flex: 1 }}>
                  <Button title="Reset" variant="ghost" onPress={() => { setRunning(false); setSeconds(0); }} />
                </View>
              ) : null}
            </Row>
            {seconds > 0 ? (
              <Tiny style={{ marginTop: 9 }}>
                Saves as {Math.max(1, Math.round(seconds / 60))} minutes. You can also type it in below.
              </Tiny>
            ) : null}
          </Card>
        ) : null}

        {lastSide ? (
          <Callout>Last time you started on the {lastSide.toLowerCase()}.</Callout>
        ) : null}

        {medDue ? (
          <Card tone={medDue.atOrOverCap ? 'alert' : 'flat'}>
            <Eyebrow color={medDue.atOrOverCap ? '#A85A44' : C.taupe}>Timing check</Eyebrow>
            <BodyText>
              Last {values.name} was {medDue.lastLabel}.{' '}
              {medDue.readyNow
                ? 'The next dose is due now by the label interval.'
                : `The next dose is not due until ${medDue.dueLabel}.`}
            </BodyText>
            {medDue.atOrOverCap ? (
              <BodyText style={{ marginTop: 7, color: '#A85A44' }}>
                That would be {medDue.dosesInLast24h + 1} doses in 24 hours, at or over the usual limit
                of {medDue.interval.maxPer24h}. Call your pediatrician before giving more.
              </BodyText>
            ) : null}
          </Card>
        ) : null}

        {medInfo ? <Callout>{medInfo.note}</Callout> : null}

        {type.fields.map((field) => (
          <Card key={field.id}>
            <Eyebrow>
              {field.label}{field.required ? '' : '  (optional)'}
            </Eyebrow>

            {field.type === 'choice' ? (
              <ChipRow style={{ marginTop: 4 }}>
                {field.options.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    active={values[field.id] === opt}
                    onPress={() => set(field.id, values[field.id] === opt ? undefined : opt)}
                  />
                ))}
              </ChipRow>
            ) : null}

            {field.type === 'multi' ? (
              <ChipRow style={{ marginTop: 4 }}>
                {field.options.map((opt) => {
                  const list = values[field.id] || [];
                  const on = list.includes(opt);
                  return (
                    <Chip
                      key={opt}
                      label={opt}
                      active={on}
                      onPress={() => set(field.id, on ? list.filter((x) => x !== opt) : [...list, opt])}
                    />
                  );
                })}
              </ChipRow>
            ) : null}

            {field.type === 'toggle' ? (
              <ChipRow style={{ marginTop: 4 }}>
                <Chip label="Yes" active={values[field.id] === true} onPress={() => set(field.id, values[field.id] === true ? undefined : true)} />
                <Chip label="No" active={values[field.id] === false} onPress={() => set(field.id, values[field.id] === false ? undefined : false)} />
              </ChipRow>
            ) : null}

            {['text', 'number', 'duration'].includes(field.type) ? (
              <TextInput
                value={values[field.id] === undefined ? '' : String(values[field.id])}
                onChangeText={(v) =>
                  set(field.id, field.type === 'text' ? v : v.replace(/[^0-9.]/g, ''))
                }
                placeholder={
                  field.type === 'duration' ? 'Minutes'
                    : field.unit ? field.unit
                    : field.type === 'number' ? 'Number' : 'Type here'
                }
                placeholderTextColor={C.faint}
                keyboardType={field.type === 'text' ? 'default' : 'decimal-pad'}
                multiline={field.type === 'text' && (field.id === 'notes' || field.id === 'note')}
                style={[st.input, field.type === 'text' && field.id.includes('note') && { minHeight: 56 }]}
              />
            ) : null}

            {field.hint ? <Tiny style={{ marginTop: 6 }}>{field.hint}</Tiny> : null}
          </Card>
        ))}

        <View style={{ marginTop: 6 }}>
          <Button title={`Save ${type.label.toLowerCase()}`} icon="check" onPress={save} />
        </View>
        <View style={{ marginTop: 9 }}>
          <Button title="Cancel" variant="ghost" onPress={() => navigation.goBack()} />
        </View>

        <Disclaimer>
          Saved on this phone only, under {activeChild ? activeChild.name : 'this child'}. Nothing is
          uploaded anywhere.
        </Disclaimer>
      </Content>
    </Screen>
  );
}

const st = StyleSheet.create({
  input: {
    fontFamily: F.body,
    fontSize: 16,
    color: C.ink,
    paddingVertical: 8,
    marginTop: 2,
  },
});
