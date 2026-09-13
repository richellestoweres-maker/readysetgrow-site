/**
 * Community
 *
 * Not connected yet. Posts, comments and usernames all need an account
 * and a server, which is the next large build rather than something that
 * can live on the phone.
 *
 * The tab exists now because the group structure is a real product
 * decision and worth seeing, and because the privacy rules below are much
 * easier to build in from the start than to retrofit.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ListRow, Tag, BodyText,
  Tiny, Eyebrow, Bullets, Callout, Disclaimer, LeafArt, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getStage } from '../data/stages';

/**
 * Groups are split by stage and by topic on purpose. A parent of a
 * newborn and a parent of a teenager have almost nothing to say to each
 * other on any given night, but a parent dealing with sleep has plenty to
 * say to anyone else dealing with sleep.
 */
export const COMMUNITY_GROUPS = [
  { id: 'newborns', label: 'Newborns', kind: 'stage', minMonths: 0, maxMonths: 4, blurb: 'The first months, and the parents awake at the same hour as you.' },
  { id: 'infants', label: 'Babies', kind: 'stage', minMonths: 3, maxMonths: 13, blurb: 'Rolling, first foods, and the four month sleep change.' },
  { id: 'toddlers', label: 'Toddlers', kind: 'stage', minMonths: 12, maxMonths: 37, blurb: 'Big feelings in a small body.' },
  { id: 'preschool', label: 'Preschool', kind: 'stage', minMonths: 36, maxMonths: 61, blurb: 'Pretend play, boundary testing, and the blue cup.' },
  { id: 'schoolage', label: 'School age', kind: 'stage', minMonths: 60, maxMonths: 133, blurb: 'Homework, friendships, and after school meltdowns.' },
  { id: 'teens', label: 'Teens', kind: 'stage', minMonths: 132, maxMonths: 241, blurb: 'Independence, trust, and the closed bedroom door.' },

  { id: 'feeding', label: 'Feeding', kind: 'topic', blurb: 'Breastfeeding, pumping, formula, combination feeding, solids. No method wars.' },
  { id: 'sleep', label: 'Sleep', kind: 'topic', blurb: 'Every approach welcome. Nobody gets told they are doing it wrong.' },
  { id: 'neurodivergent', label: 'Neurodivergent parenting', kind: 'topic', blurb: 'ADHD, sensory, autism, and families still figuring it out.' },
  { id: 'potty', label: 'Potty training', kind: 'topic', blurb: 'The stage nobody warns you about properly.' },
  { id: 'singleparents', label: 'Doing it solo', kind: 'topic', blurb: 'For parents without a second adult in the house.' },
  { id: 'parentcare', label: 'How the parent is doing', kind: 'topic', blurb: 'Postpartum, burnout, and the days you have nothing left.' },
];

export function getSuggestedGroups(months) {
  const stages = COMMUNITY_GROUPS.filter(
    (g) => g.kind === 'stage' && typeof months === 'number' && months >= g.minMonths && months < g.maxMonths
  );
  const topics = COMMUNITY_GROUPS.filter((g) => g.kind === 'topic');
  return { stages, topics };
}

export default function CommunityScreen() {
  const { months, stage, activeChild } = useApp();
  const { stages, topics } = getSuggestedGroups(months);

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        title="Community"
        sub="You are not the only one awake right now."
      />

      <Content>
        <Card tone="leafy">
          <Eyebrow>Not open yet</Eyebrow>
          <BodyText>
            Posting and commenting need an account and a server, which is the next big piece of
            building. The groups below are the real structure it will open with.
          </BodyText>
        </Card>

        {stages.length ? (
          <>
            <SectionTitle>For you right now</SectionTitle>
            {stages.map((g) => (
              <ListRow
                key={g.id}
                icon="users"
                title={g.label}
                subtitle={g.blurb}
                right={<Tag label="Soon" tone="warm" />}
              />
            ))}
            {stage ? (
              <Tiny style={{ marginBottom: 8 }}>
                Suggested because {activeChild ? activeChild.name : 'your child'} is in the{' '}
                {stage.label.toLowerCase()} stage. Groups follow them as they grow.
              </Tiny>
            ) : null}
          </>
        ) : null}

        <SectionTitle>By topic</SectionTitle>
        {topics.map((g) => (
          <ListRow
            key={g.id}
            icon="message-circle"
            title={g.label}
            subtitle={g.blurb}
            right={<Tag label="Soon" tone="warm" />}
          />
        ))}

        <SectionTitle>How this will work</SectionTitle>
        <Card>
          <Bullets
            items={[
              'Your community name is separate from your children. Nothing you log about them is ever attached to a post.',
              'No milestone data, no logs, no photos of your children are shared automatically. Ever.',
              'Groups follow your child’s stage, so the room changes as they grow.',
              'Moderation before scale. A parenting community without real moderation becomes the worst place on the internet very quickly.',
              'No method wars in feeding or sleep. Those are the two rooms this has to get right.',
            ]}
          />
        </Card>

        <Callout>
          The hardest part of a parenting community is not building it, it is keeping it kind. That is
          worth taking slowly.
        </Callout>

        <Disclaimer>
          Anything shared here will be visible to other parents. Nothing private about your child is
          ever posted for you, and it never will be.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
