/**
 * Sleep, and the schedule builder.
 *
 * A parent enters one thing, when their child woke up, and gets the day
 * back. Change the wake time and everything moves. The bedtime routine is
 * then timed backward from the bedtime this produced, so the answer to
 * "when do I start the bath" is on the screen rather than in their head.
 */

import React from 'react';
import { View, TextInput, Pressable } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, Chip, ChipRow, Callout,
  BodyText, Tiny, Eyebrow, Bullets, Disclaimer, Empty, LeafArt, Row, Tag,
  colors as C,
} from '../components/ui';
import { Feather } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import {
  buildDay, describeDay, formatTime, formatDuration, getWakeWindows, getSleepNeeds,
  getDisruptionsForAge, getApproachesForAge, SCHEDULE_DISCLAIMER, SETTLING_FRAMING,
} from '../data/sleep';
import { buildRoutine, getOptionalSteps, ROUTINE_STANCE } from '../data/routines';
import { theme } from '../theme/theme';

const ROW_ICON = { wake: 'sun', nap: 'moon', winddown: 'heart', bedtime: 'moon' };

export default function SleepScreen() {
  const {
    activeChild, months, setWakeTime, setNapOverride, toggleRoutineStep,
  } = useApp();

  if (months == null || !activeChild) {
    return (
      <Screen>
        <Content><Empty title="Add a birthday first" body="Naps and bedtime are built from your child's age." /></Content>
      </Screen>
    );
  }

  const band = getWakeWindows(months);
  const needs = getSleepNeeds(months);
  const day = buildDay({ months, wakeTime: activeChild.wakeTime, naps: activeChild.napOverride });
  const rows = day.ok ? describeDay(day) : [];
  const disruptions = getDisruptionsForAge(months);
  const approaches = getApproachesForAge(months);

  const routine = day.ok
    ? buildRoutine({
        type: 'bedtime',
        months,
        endTime: formatTime(day.summary.bedtime),
        include: activeChild.routineInclude,
      })
    : { ok: false };
  const optionalSteps = getOptionalSteps('bedtime', months);

  const napCount = activeChild.napOverride == null
    ? (band ? band.naps.typical : 0)
    : activeChild.napOverride;

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader title="Today's Rhythm" sub="Tell it one thing. It builds the rest of the day." />

      <Content>
        <Card>
          <Eyebrow>What time did they wake up?</Eyebrow>
          <TextInput
            value={activeChild.wakeTime}
            onChangeText={setWakeTime}
            placeholder="06:30"
            placeholderTextColor={C.faint}
            keyboardType="numbers-and-punctuation"
            style={{
              fontFamily: theme.typography.fontFamily.display,
              fontSize: 26, color: C.ink, paddingVertical: 4,
            }}
          />
          {band ? (
            <Tiny>
              {band.label}
              {'  ·  '}
              {band.naps.typical === 0 ? 'usually no naps' : `usually ${band.naps.typical} nap${band.naps.typical === 1 ? '' : 's'}`}
            </Tiny>
          ) : null}
        </Card>

        {band && band.naps.max > 0 ? (
          <Row style={{ marginBottom: 13, flexWrap: 'wrap' }}>
            <Tiny>Naps today</Tiny>
            <ChipRow>
              {Array.from({ length: band.naps.max + 1 }, (_, n) => n).map((n) => (
                <Chip
                  key={n}
                  label={String(n)}
                  active={napCount === n}
                  onPress={() => setNapOverride(activeChild.napOverride === n ? null : n)}
                />
              ))}
            </ChipRow>
          </Row>
        ) : null}

        {day.ok ? (
          <Card style={{ paddingVertical: 4 }}>
            {rows.map((r, i) => (
              <View
                key={`${r.type}-${i}`}
                style={{
                  flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 11,
                  borderBottomWidth: i < rows.length - 1 ? 1 : 0, borderBottomColor: C.borderSoft,
                }}
              >
                <View style={{
                  width: 34, height: 34, borderRadius: 17, marginTop: 1,
                  backgroundColor: r.type === 'bedtime' ? C.leafPale : C.leafWash,
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <Feather name={ROW_ICON[r.type] || 'circle'} size={16} color={C.primaryDeep} />
                </View>
                <View style={{ flex: 1 }}>
                  <BodyText style={{ color: C.ink, fontWeight: '600' }}>{r.label}</BodyText>
                  <Tiny style={{ marginTop: 1 }}>
                    {r.range}{r.length ? '  ·  ' + r.length : ''}
                  </Tiny>
                </View>
                {r.actual ? <Tag label="logged" /> : null}
              </View>
            ))}
          </Card>
        ) : (
          <Card tone="flat"><BodyText>{day.reason}</BodyText></Card>
        )}

        {day.ok && day.notes.map((n, i) => (
          <Callout key={i} style={{ marginBottom: 9 }}>{n}</Callout>
        ))}

        {day.ok ? (
          <Card tone="flat">
            <Eyebrow>Sleep this day adds up to</Eyebrow>
            <Row style={{ justifyContent: 'space-between', marginTop: 5 }}>
              <Tiny style={{ color: C.body }}>Naps</Tiny>
              <Tiny style={{ color: C.ink, fontWeight: '700' }}>{formatDuration(day.summary.dayNapMinutes)}</Tiny>
            </Row>
            <Row style={{ justifyContent: 'space-between', marginTop: 5 }}>
              <Tiny style={{ color: C.body }}>Overnight</Tiny>
              <Tiny style={{ color: C.ink, fontWeight: '700' }}>{formatDuration(day.summary.estimatedNightMinutes)}</Tiny>
            </Row>
            <View style={{ height: 1, backgroundColor: C.borderSoft, marginVertical: 8 }} />
            <Row style={{ justifyContent: 'space-between' }}>
              <BodyText style={{ color: C.ink, fontWeight: '600' }}>Total</BodyText>
              <BodyText style={{ color: C.ink, fontWeight: '700' }}>{formatDuration(day.summary.estimatedTotalMinutes)}</BodyText>
            </Row>
            {needs ? (
              <Tiny style={{ marginTop: 9 }}>
                Typical for {needs.label} is {needs.hours[0]} to {needs.hours[1]} hours in 24. {needs.note}
              </Tiny>
            ) : null}
          </Card>
        ) : null}

        {band ? <Card tone="leafy"><BodyText>{band.guidance}</BodyText></Card> : null}
        <Callout>{SCHEDULE_DISCLAIMER}</Callout>

        {routine.ok ? (
          <>
            <SectionTitle>Bedtime routine</SectionTitle>
            <Card tone="flat">
              <BodyText>
                Start at <BodyText style={{ color: C.ink, fontWeight: '700' }}>{routine.startTime}</BodyText>{' '}
                to finish by {routine.endTime}. {routine.totalMinutes} minutes in all.
              </BodyText>
              {routine.note ? <Tiny style={{ marginTop: 7 }}>{routine.note}</Tiny> : null}
            </Card>

            {optionalSteps.length ? (
              <Row style={{ marginBottom: 11, flexWrap: 'wrap' }}>
                <Tiny>Also include</Tiny>
                <ChipRow>
                  {optionalSteps.map((o) => (
                    <Chip
                      key={o.id}
                      label={o.label}
                      active={activeChild.routineInclude.includes(o.id)}
                      onPress={() => toggleRoutineStep(o.id)}
                    />
                  ))}
                </ChipRow>
              </Row>
            ) : null}

            <Card style={{ paddingVertical: 4 }}>
              {routine.steps.map((st, i) => (
                <View
                  key={st.id}
                  style={{
                    flexDirection: 'row', alignItems: 'flex-start', gap: 11, paddingVertical: 11,
                    borderBottomWidth: i < routine.steps.length - 1 ? 1 : 0, borderBottomColor: C.borderSoft,
                  }}
                >
                  <Tiny style={{ width: 62, color: C.primaryInk, fontWeight: '700', paddingTop: 2 }}>
                    {st.time}
                  </Tiny>
                  <View style={{ flex: 1 }}>
                    <BodyText style={{ color: C.ink, fontWeight: '600' }}>{st.label}</BodyText>
                    <Tiny style={{ marginTop: 2 }}>{st.why}</Tiny>
                  </View>
                </View>
              ))}
            </Card>

            <Card tone="flat">
              <Eyebrow>{ROUTINE_STANCE.headline}</Eyebrow>
              <BodyText>{ROUTINE_STANCE.body}</BodyText>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 11 }}>
                {ROUTINE_STANCE.options.map((o) => <Tag key={o.id} label={o.label} />)}
              </View>
            </Card>
          </>
        ) : null}

        {disruptions.length ? (
          <>
            <SectionTitle>Common at this age</SectionTitle>
            {disruptions.map((d) => (
              <Card key={d.id}>
                <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 15.5 }}>{d.label}</BodyText>
                <BodyText style={{ marginTop: 5 }}>
                  <BodyText style={{ color: C.ink, fontWeight: '600' }}>What it looks like. </BodyText>
                  {d.what}
                </BodyText>
                <BodyText style={{ marginTop: 7 }}>
                  <BodyText style={{ color: C.ink, fontWeight: '600' }}>Why. </BodyText>
                  {d.why}
                </BodyText>
                <View style={{ marginTop: 10 }}>
                  <Bullets items={d.tryThis} />
                </View>
              </Card>
            ))}
          </>
        ) : null}

        {approaches.length ? (
          <>
            <SectionTitle>If you want to change how nights go</SectionTitle>
            <Card tone="flat"><BodyText>{SETTLING_FRAMING}</BodyText></Card>
            {approaches.map((a) => (
              <Card key={a.id}>
                <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 15 }}>{a.label}</BodyText>
                <BodyText style={{ marginTop: 4 }}>{a.summary}</BodyText>
                <Tiny style={{ marginTop: 8 }}>
                  <Tiny style={{ color: C.ink, fontWeight: '700' }}>Asks of you. </Tiny>{a.asksOfYou}
                </Tiny>
                <Tiny style={{ marginTop: 4 }}>
                  <Tiny style={{ color: C.ink, fontWeight: '700' }}>Evidence. </Tiny>{a.evidence}
                </Tiny>
              </Card>
            ))}
          </>
        ) : null}

        <Disclaimer>
          Educational information, not medical advice. Safe sleep guidance does not change for any
          schedule: back to sleep, firm flat surface, nothing else in the sleep space.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
