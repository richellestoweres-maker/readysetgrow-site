/**
 * Home
 *
 * The daily landing screen. Who this child is today, what to focus on,
 * and quick ways into the rest of the app.
 */

import React from 'react';
import { View, Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';
import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ListRow, Button, Bar,
  BodyText, Tiny, Eyebrow, Sprout, Tag, Disclaimer, LeafArt, Row,
  ScriptAccent, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getContentForChild, CONTENT_DISCLAIMER } from '../data/developmentContent';
import { getMilestonesByDomain, summarizeProgress } from '../data/milestones';
import { getSituationsForAge } from '../data/rightNow';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function HomeScreen({ navigation }) {
  const {
    activeChild, children, parentName, summary, months, stage, growth, lenses,
    setActiveChild,
  } = useApp();

  const content = months == null ? [] : getContentForChild(months, lenses);
  const focus = content[0];
  const checkpoint = summary.checkpoint;
  const groups = checkpoint ? getMilestonesByDomain(checkpoint) : [];
  const statuses = activeChild ? activeChild.milestoneStatuses : {};
  const progress = checkpoint ? summarizeProgress(checkpoint, statuses) : null;
  const situationCount = months == null ? 0 : getSituationsForAge(months).length;

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        title={`${greeting()}${parentName ? ', ' + parentName : ''}`}
        sub="Small steps today. Brighter tomorrows ahead."
        right={
          <Pressable
            onPress={() => navigation.navigate('Settings')}
            accessibilityRole="button"
            accessibilityLabel="Your profile and children"
            hitSlop={10}
            style={({ pressed }) => [{
              width: 40, height: 40, borderRadius: 20, backgroundColor: C.leafWash,
              alignItems: 'center', justifyContent: 'center', marginBottom: 4,
            }, pressed && { opacity: 0.6 }]}
          >
            <Feather name="user" size={18} color={C.primaryDeep} />
          </Pressable>
        }
      />

      <Content>
        {/* Who we are talking about, and the switcher when there is more than one */}
        <Card>
          <Row>
            <View style={{
              width: 58, height: 58, borderRadius: 29, backgroundColor: C.leafWash,
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Sprout order={growth ? growth.order : 2} size={48} />
            </View>
            <View style={{ flex: 1 }}>
              <BodyText style={{ fontSize: 20, color: C.ink, fontWeight: '600' }}>
                {activeChild ? activeChild.name : 'Your child'}
              </BodyText>
              <Tiny style={{ marginTop: 1 }}>{summary.label || 'Add a birthday'}</Tiny>
              {stage ? (
                <View style={{ flexDirection: 'row', marginTop: 7 }}>
                  <Tag label={stage.label} />
                </View>
              ) : null}
            </View>
            <ScriptAccent style={{ width: 78 }}>
              A kinder{'\n'}brighter{'\n'}tomorrow
            </ScriptAccent>
          </Row>

          {children.length > 1 ? (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginTop: 13 }}>
              {children.map((c) => (
                <Pressable
                  key={c.id}
                  onPress={() => setActiveChild(c.id)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: activeChild && c.id === activeChild.id }}
                  style={{
                    paddingVertical: 7, paddingHorizontal: 13, borderRadius: 999,
                    borderWidth: 1,
                    backgroundColor: activeChild && c.id === activeChild.id ? C.primary : C.surfaceAlt,
                    borderColor: activeChild && c.id === activeChild.id ? C.primary : C.border,
                  }}
                >
                  <Tiny style={{
                    color: activeChild && c.id === activeChild.id ? '#fff' : C.body,
                    fontWeight: '600',
                  }}>
                    {c.name}
                  </Tiny>
                </Pressable>
              ))}
            </View>
          ) : null}
        </Card>

        {summary.stageId === 'pregnancy' ? (
          <Card tone="leafy">
            <Eyebrow>Getting ready</Eyebrow>
            <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 16, marginBottom: 4 }}>
              Preparing for what comes next
            </BodyText>
            <BodyText>
              Feeding before the first latch, safe sleep before you are too tired to read about it,
              and what recovery is actually like.
            </BodyText>
            <View style={{ marginTop: 12 }}>
              <Button title="Open getting ready" icon="arrow-right" onPress={() => navigation.navigate('Pregnancy')} />
            </View>
          </Card>
        ) : null}

        {/* Straight to the thing they might need most */}
        <Card tone="leafy">
          <Eyebrow>If today is hard</Eyebrow>
          <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 16, marginBottom: 4 }}>
            {situationCount} things I can help with right now
          </BodyText>
          <BodyText>Crying, sleep, feeding, meltdowns. Tap what is happening and get something to try.</BodyText>
          <View style={{ marginTop: 12 }}>
            <Button title="Open Right Now" icon="arrow-right" onPress={() => navigation.navigate('RightNow')} />
          </View>
        </Card>

        {focus ? (
          <>
            <SectionTitle>Today's focus</SectionTitle>
            <Card>
              <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 16 }}>{focus.title}</BodyText>
              <BodyText style={{ marginTop: 5 }}>{focus.summary}</BodyText>
              <View style={{ marginTop: 12 }}>
                <Row style={{ gap: 9 }}>
                  <View style={{ flex: 1 }}>
                    <Button
                      title="View today's plan"
                      icon="arrow-right"
                      onPress={() => navigation.navigate('Plan')}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Button
                      title="Read this"
                      variant="ghost"
                      onPress={() => navigation.navigate('Content', { id: focus.id })}
                    />
                  </View>
                </Row>
              </View>
            </Card>
          </>
        ) : (
          <>
            <SectionTitle>Today's focus</SectionTitle>
            <Card tone="flat">
              <BodyText style={{ color: C.ink, fontWeight: '600' }}>Nothing written for this age yet</BodyText>
              <BodyText style={{ marginTop: 5 }}>
                Development content runs from birth through eighteen. The thinnest stretch right
                now is the first three months.
              </BodyText>
            </Card>
          </>
        )}

        {progress && groups.length ? (
          <>
            <SectionTitle>Milestones</SectionTitle>
            <Card>
              {groups.map((g) => {
                const done = g.items.filter((m) => ['sometimes', 'mastered'].includes(statuses[m.id])).length;
                return (
                  <View key={g.domain} style={{ marginBottom: 12 }}>
                    <Row style={{ justifyContent: 'space-between' }}>
                      <Tiny style={{ color: C.body }}>{g.shortLabel}</Tiny>
                      <Tiny style={{ color: C.ink, fontWeight: '700' }}>{done} / {g.items.length}</Tiny>
                    </Row>
                    <Bar value={done / g.items.length} />
                  </View>
                );
              })}
              <Button title="Open milestones" variant="ghost" onPress={() => navigation.navigate('Milestones')} />
            </Card>
          </>
        ) : null}

        <SectionTitle>Quick actions</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 9 }}>
          {[
            { icon: 'file-text', title: 'Log a moment', sub: 'Capture today', to: 'Logs' },
            { icon: 'moon', title: "Today's rhythm", sub: 'Naps and bedtime', to: 'Sleep' },
            { icon: 'book-open', title: 'Care topics', sub: 'Sourced and linked', to: 'Topics' },
            { icon: 'bar-chart-2', title: 'Milestones', sub: 'Track with ranges', to: 'Milestones' },
          ].map((q) => (
            <Pressable
              key={q.to}
              onPress={() => navigation.navigate(q.to)}
              accessibilityRole="button"
              accessibilityLabel={q.title}
              style={({ pressed }) => [{
                width: '48%', backgroundColor: C.surfaceAlt, borderWidth: 1, borderColor: C.borderSoft,
                borderRadius: 16, padding: 13, minHeight: 92,
              }, pressed && { opacity: 0.65 }]}
            >
              <View style={{
                width: 34, height: 34, borderRadius: 17, backgroundColor: C.leafWash,
                alignItems: 'center', justifyContent: 'center', marginBottom: 8,
              }}>
                <Feather name={q.icon} size={16} color={C.primaryDeep} />
              </View>
              <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 13.5 }}>{q.title}</BodyText>
              <Tiny style={{ fontSize: 11.5 }}>{q.sub}</Tiny>
            </Pressable>
          ))}
        </View>

        <SectionTitle>Parent tip</SectionTitle>
        <Card tone="flat">
          <Eyebrow>Connection before correction</Eyebrow>
          <BodyText>
            When big emotions show up, try getting curious before giving advice. A calm, connected
            moment builds trust and helps your child feel safe.
          </BodyText>
        </Card>

        <Disclaimer>{CONTENT_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
