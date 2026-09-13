/**
 * Welcome, and also the add a child screen.
 *
 * The same screen does both jobs. When there are no children yet it is
 * the first thing a parent sees. When it is pushed from settings it is
 * how you add another child. The only differences are the copy and the
 * wordmark, so duplicating it would mean two places to fix every change.
 */

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Screen, Content, Card, Button, BodyText, Tiny, Eyebrow, Title, Sub,
  Chip, ChipRow, Spacer, Wordmark, ScriptBadge, LeafArt, colors as C,
} from '../components/ui';
import { useApp, makeChild } from '../context/AppContext';
import { theme } from '../theme/theme';
import { formatAge } from '../utils/age';

const F = theme.typography.fontFamily;

/** Accepts what a person actually types and returns YYYY-MM-DD, or null. */
function normalizeDate(input) {
  const t = (input || '').trim();
  if (!t) return null;
  let m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(t);
  if (m) return `${m[1]}-${pad(m[2])}-${pad(m[3])}`;
  m = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(t);
  if (m) return `${m[3]}-${pad(m[1])}-${pad(m[2])}`;
  return null;
}
const pad = (n) => String(Number(n)).padStart(2, '0');

const PROMISES = [
  { icon: 'feather', label: 'Real guidance' },
  { icon: 'heart', label: 'In the moment' },
  { icon: 'sun', label: 'Brighter futures' },
];

export default function OnboardingScreen({ navigation }) {
  const { children, parentName, setParentName, addChild, setActiveChild } = useApp();
  const isFirstRun = children.length === 0;

  const [name, setName] = useState('');
  const [parent, setParent] = useState(parentName || '');
  const [dateText, setDateText] = useState('');
  const [mode, setMode] = useState('born');
  const [error, setError] = useState('');

  const iso = normalizeDate(dateText);
  const preview = iso && mode === 'born' ? formatAge(iso) : '';
  const futureDated = iso && mode === 'born' && new Date(iso) > new Date();
  const canSave = name.trim().length > 0 && !!iso && !futureDated;

  function save() {
    if (!name.trim()) return setError('What should we call them?');
    if (!iso) return setError('Try a date like 03/14/2022, or 2022-03-14.');
    if (futureDated) return setError('That date is in the future. Switch to expecting if the baby is on the way.');

    const child = makeChild({
      name: name.trim(),
      birthday: mode === 'born' ? iso : null,
      dueDate: mode === 'expecting' ? iso : null,
    });
    if (parent.trim() && parent.trim() !== parentName) setParentName(parent.trim());
    addChild(child);
    setActiveChild(child.id);
    if (!isFirstRun && navigation && navigation.goBack) navigation.goBack();
  }

  return (
    <Screen>
      <LeafArt />

      {isFirstRun ? (
        <View style={st.hero}>
          <ScriptBadge>Little people{'\n'}big possibilities</ScriptBadge>
          <Wordmark size="large" />
        </View>
      ) : (
        <View style={{ height: 12 }} />
      )}

      <Content>
        {isFirstRun ? (
          <View style={{ alignItems: 'center', marginTop: 22, marginBottom: 8 }}>
            <Title style={{ textAlign: 'center' }}>Grow with your child,{'\n'}one stage at a time.</Title>
            <Sub style={{ textAlign: 'center', maxWidth: 300 }}>
              Their birthday is the only thing the app needs. Everything else follows from it.
            </Sub>
          </View>
        ) : (
          <View style={{ marginBottom: 6 }}>
            <Eyebrow>Another child</Eyebrow>
            <Title small>Add a child</Title>
            <Sub>
              Each child gets their own milestones, lenses and schedule. Nothing is shared between them.
            </Sub>
          </View>
        )}

        <Spacer h={8} />

        {isFirstRun ? (
          <Card>
            <Eyebrow>Your name</Eyebrow>
            <TextInput
              value={parent}
              onChangeText={setParent}
              placeholder="What should the app call you?"
              placeholderTextColor={C.faint}
              style={st.input}
              autoCapitalize="words"
              returnKeyType="next"
            />
          </Card>
        ) : null}

        <Card>
          <Eyebrow>Their name or nickname</Eyebrow>
          <TextInput
            value={name}
            onChangeText={(v) => { setName(v); setError(''); }}
            placeholder="First name is plenty"
            placeholderTextColor={C.faint}
            style={st.input}
            autoCapitalize="words"
            returnKeyType="next"
          />
        </Card>

        <ChipRow style={{ marginBottom: 11 }}>
          <Chip label="Already born" active={mode === 'born'} onPress={() => { setMode('born'); setError(''); }} />
          <Chip label="Still expecting" active={mode === 'expecting'} onPress={() => { setMode('expecting'); setError(''); }} />
        </ChipRow>

        <Card>
          <Eyebrow>{mode === 'born' ? 'Birthday' : 'Due date'}</Eyebrow>
          <TextInput
            value={dateText}
            onChangeText={(v) => { setDateText(v); setError(''); }}
            placeholder="MM/DD/YYYY"
            placeholderTextColor={C.faint}
            style={st.input}
            keyboardType="numbers-and-punctuation"
            returnKeyType="done"
            onSubmitEditing={() => canSave && save()}
          />
          {preview ? (
            <Tiny style={{ marginTop: 4 }}>That makes them {preview}.</Tiny>
          ) : (
            <Tiny style={{ marginTop: 4 }}>You can change this later.</Tiny>
          )}
        </Card>

        {error ? (
          <View style={st.error}>
            <Feather name="alert-circle" size={15} color="#A85A44" />
            <Text style={st.errorText}>{error}</Text>
          </View>
        ) : null}

        <Spacer h={6} />
        <Button title={isFirstRun ? 'Start' : 'Add child'} icon="arrow-right" onPress={save} disabled={!canSave} />

        {!isFirstRun && navigation ? (
          <>
            <Spacer h={9} />
            <Button title="Cancel" variant="ghost" onPress={() => navigation.goBack()} />
          </>
        ) : null}

        {isFirstRun ? (
          <>
            <View style={st.divider}>
              <View style={st.rule} />
              <Text style={st.dividerText}>A BRIGHTER TOMORROW TOGETHER</Text>
              <View style={st.rule} />
            </View>

            <View style={st.promises}>
              {PROMISES.map((p) => (
                <View key={p.label} style={{ alignItems: 'center', flex: 1, gap: 7 }}>
                  <Feather name={p.icon} size={19} color={C.primary} />
                  <Tiny style={{ textAlign: 'center' }}>{p.label}</Tiny>
                </View>
              ))}
            </View>

            <Card tone="leafy" style={{ marginTop: 18 }}>
              <BodyText>
                Ready Set Grow is educational information, not medical advice. It cannot examine your
                child. Your pediatrician can, and they want you to call.
              </BodyText>
            </Card>
          </>
        ) : null}
      </Content>
    </Screen>
  );
}

const st = StyleSheet.create({
  hero: { alignItems: 'center', paddingTop: 52, paddingBottom: 4 },
  input: {
    fontFamily: F.body,
    fontSize: 17,
    color: C.ink,
    paddingVertical: 9,
  },
  error: {
    flexDirection: 'row', alignItems: 'center', gap: 9,
    backgroundColor: '#FCF2EE', borderRadius: 12, padding: 12, marginBottom: 4,
  },
  errorText: { fontFamily: F.body, color: '#A85A44', fontSize: 13, lineHeight: 19, flex: 1 },
  divider: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 26, marginBottom: 18 },
  rule: { flex: 1, height: 1, backgroundColor: C.border },
  dividerText: {
    fontFamily: F.bodyMedium, fontSize: 9, letterSpacing: 1.8, color: C.faint,
  },
  promises: { flexDirection: 'row', gap: 10 },
});
