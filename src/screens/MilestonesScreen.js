/**
 * Milestones
 *
 * Tapping a status saves it against this child and only this child.
 * Tapping the same status again clears it, so a mistap is undoable
 * without a separate control.
 *
 * Nothing here is a pass or fail. No status is red, unrecorded items are
 * simply not counted, and the reassurance and the act early guidance
 * appear together rather than one instead of the other.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, Bar, Bullets, Callout,
  BodyText, Tiny, Eyebrow, Chip, ChipRow, Disclaimer, Empty, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import {
  getMilestonesByDomain, getCheckpoint, summarizeProgress, getNotYetMilestones,
  describeMilestoneWindow, MILESTONE_STATUSES, ACT_EARLY_GUIDANCE,
} from '../data/milestones';

const STATUS_COLORS = {
  notYet: { fg: '#8A9080', bg: '#F2F1EC' },
  emerging: { fg: '#B0873F', bg: '#F7EFE2' },
  sometimes: { fg: '#6E8B54', bg: '#EEF2E7' },
  mastered: { fg: '#547045', bg: '#E7EFE0' },
  unsure: { fg: '#5C7581', bg: '#E9EEF0' },
};

export default function MilestonesScreen() {
  const { activeChild, summary, months, milestoneFlex, setMilestoneStatus, growth } = useApp();

  if (months == null || !activeChild) {
    return <Screen><Content><Empty title="Add a birthday first" /></Content></Screen>;
  }

  const checkpoint = summary.checkpoint;

  if (!checkpoint) {
    const past = months >= 72;
    return (
      <Screen>
        <Content>
          <Empty
            growth={growth ? growth.order : 6}
            title={past ? 'Milestone tracking runs to five years' : 'The first checkpoint is at two months'}
            body={
              past
                ? 'The CDC checklists stop at five. School age progress tracking, skills and subjects rather than milestones, is a separate build.'
                : 'Checkpoints line up with well child visits, starting at two months.'
            }
          />
        </Content>
      </Screen>
    );
  }

  const groups = getMilestonesByDomain(checkpoint);
  const statuses = activeChild.milestoneStatuses;
  const progress = summarizeProgress(checkpoint, statuses);
  const notYet = getNotYetMilestones(checkpoint, statuses);
  const label = getCheckpoint(checkpoint).ageDescription;

  return (
    <Screen>
      <ScreenHeader
        title="Milestones"
        sub={`${label}  ·  what most children can do by now`}
        small
      />

      <Content>
        <Card tone="leafy">
          <BodyText>
            <BodyText style={{ color: C.ink, fontWeight: '700' }}>These are not deadlines. </BodyText>
            They describe what about 75 percent of children can do by this age. Reaching one later is
            common and usually not a concern on its own.
          </BodyText>
          <Row style={{ justifyContent: 'space-between', marginTop: 12 }}>
            <Tiny style={{ color: C.body }}>Recorded</Tiny>
            <Tiny style={{ color: C.ink, fontWeight: '700' }}>{progress.recorded} of {progress.total}</Tiny>
          </Row>
          <Bar value={progress.total ? progress.showingUp / progress.total : 0} />
        </Card>

        {groups.map((g) => (
          <View key={g.domain}>
            <SectionTitle>{g.label}</SectionTitle>
            {g.items.map((m) => {
              const current = statuses[m.id];
              return (
                <Card key={m.id} style={{ padding: 13 }}>
                  <BodyText style={{ color: C.ink }}>{m.text}</BodyText>
                  <Tiny style={{ marginTop: 3, marginBottom: 10 }}>
                    {describeMilestoneWindow(m, milestoneFlex)}
                  </Tiny>
                  <ChipRow>
                    {MILESTONE_STATUSES.map((st) => {
                      const on = current === st.id;
                      const col = STATUS_COLORS[st.id];
                      return (
                        <Chip
                          key={st.id}
                          label={st.label}
                          active={on}
                          activeColor={col.bg}
                          activeText={col.fg}
                          onPress={() => setMilestoneStatus(m.id, st.id)}
                        />
                      );
                    })}
                  </ChipRow>
                </Card>
              );
            })}
          </View>
        ))}

        {notYet.length ? (
          <>
            <SectionTitle>Worth mentioning</SectionTitle>
            <Card tone="flat">
              <BodyText>{ACT_EARLY_GUIDANCE.reassurance}</BodyText>
              <BodyText style={{ marginTop: 9 }}>{ACT_EARLY_GUIDANCE.action}</BodyText>
              <View style={{ marginTop: 11 }}>
                <Callout>{ACT_EARLY_GUIDANCE.howToAsk}</Callout>
              </View>
              <View style={{ marginTop: 12 }}>
                <Bullets items={notYet.map((m) => m.text)} tone="warn" />
              </View>
            </Card>
          </>
        ) : null}

        {milestoneFlex > 0 ? (
          <Card tone="flat">
            <Eyebrow>Your lenses are widening these windows</Eyebrow>
            <BodyText>
              Windows above show {milestoneFlex} extra months. That changes the wording only. It never
              removes the guidance to talk with your pediatrician.
            </BodyText>
          </Card>
        ) : null}

        <Disclaimer>{ACT_EARLY_GUIDANCE.urgent}</Disclaimer>
      </Content>
    </Screen>
  );
}
