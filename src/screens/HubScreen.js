/**
 * Development Hub
 *
 * The browsing side of the app, for when there is time to read rather
 * than a crisis to survive. Entry points to the reference sections, then
 * the developmental content that applies to this child right now.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ListRow, BodyText, Tiny,
  Eyebrow, Disclaimer, Empty, LeafArt, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import {
  getContentForChild, CONTENT_CATEGORIES, CONTENT_DISCLAIMER,
} from '../data/developmentContent';
import { getActivitiesForAge } from '../data/activities';
import { getTopicsForAge } from '../data/careTopics';
import { getLenses } from '../data/supportLenses';

const CATEGORY_ICON = {
  sleep: 'moon',
  'emotional-regulation': 'heart',
  behavior: 'users',
  feeding: 'coffee',
  social: 'users',
  independence: 'star',
  separation: 'heart',
  transitions: 'clock',
};

export default function HubScreen({ navigation }) {
  const { months, lenses, summary } = useApp();
  const content = months == null ? [] : getContentForChild(months, lenses);
  const activityCount = months == null ? 0 : getActivitiesForAge(months).length;
  const topicCount = months == null ? 0 : getTopicsForAge(months).length;
  const activeLenses = getLenses(lenses);

  const byCategory = {};
  content.forEach((e) => {
    if (!byCategory[e.category]) byCategory[e.category] = [];
    byCategory[e.category].push(e);
  });
  const categories = CONTENT_CATEGORIES.filter((c) => byCategory[c.id]);

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        title="Development Hub"
        sub="Trusted guidance for every stage, every question, and every little step forward."
      />

      <Content>
        <ListRow
          icon="book-open"
          title="Care topics"
          subtitle={`${topicCount} for this age, all sourced and linked`}
          onPress={() => navigation.navigate('Topics')}
        />
        <ListRow
          icon="bar-chart-2"
          title="Milestones"
          subtitle={summary.checkpoint ? `${summary.checkpoint} month checkpoint` : 'Tracking runs to five years'}
          onPress={() => navigation.navigate('Milestones')}
        />
        <ListRow
          icon="grid"
          title="Activities"
          subtitle={`${activityCount} for this age`}
          onPress={() => navigation.navigate('Activities')}
        />

        {/*
          Feeding and recovery deserve top level placement rather than
          being buried under care topics. In the first year these are what
          people are actually searching for at 2am, and the flange sizing
          alone is the single most useful thing in the app for anyone
          pumping.
        */}
        <ListRow
          icon="droplet"
          title="Pumping"
          subtitle="Flange fitting, schedules, storage, and why frozen milk tastes like soap"
          align="flex-start"
          onPress={() => navigation.navigate('Pumping')}
        />
        <ListRow
          icon="heart"
          title="The fourth trimester"
          subtitle="Your recovery, week by week, and how you are actually doing"
          align="flex-start"
          onPress={() => navigation.navigate('Postpartum')}
        />
        <ListRow
          icon="briefcase"
          title="Hospital bag"
          subtitle="A checklist that remembers what you packed"
          align="flex-start"
          onPress={() => navigation.navigate('HospitalBag')}
        />

        {content.length === 0 ? (
          <Empty
            title="Nothing written for this age yet"
            body="Development content runs from birth through eighteen. The thinnest stretch right now is the first three months."
            growth={5}
          />
        ) : (
          categories.map((cat) => (
            <View key={cat.id}>
              <SectionTitle>{cat.label}</SectionTitle>
              {byCategory[cat.id].map((entry) => (
                <ListRow
                  key={entry.id}
                  icon={CATEGORY_ICON[entry.category] || 'feather'}
                  title={entry.title}
                  subtitle={entry.ageRange}
                  onPress={() => navigation.navigate('Content', { id: entry.id })}
                />
              ))}
            </View>
          ))
        )}

        {activeLenses.length ? (
          <Card tone="flat" style={{ marginTop: 14 }}>
            <Eyebrow>Your active lenses</Eyebrow>
            <BodyText>
              {activeLenses.map((l) => l.label).join(', ')}
              {activeLenses.length === 1 ? ' is' : ' are'} reordering this list. Nothing is hidden,
              everything is still here.
            </BodyText>
          </Card>
        ) : null}

        <Disclaimer>{CONTENT_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
