/**
 * Right Now
 *
 * The first tab, because the moment a parent most needs this app is the
 * moment they have the least patience for finding anything in it.
 *
 * Two things are always on this screen before any of the buttons: the
 * universal 911 list, and the fever rule for this child's age. A parent in
 * a crisis should never have to pick the right category first.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, ListRow, SectionTitle, BodyText, Tiny,
  Eyebrow, Bullets, Disclaimer, Empty, LeafArt, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import {
  getSituationsForAge, getFeverTriage, ALWAYS_EMERGENCY, URGENCY, CATEGORY_LABELS,
} from '../data/rightNow';
import { TOPIC_DISCLAIMER } from '../data/careTopics';

const CATEGORY_ICON = {
  crying: 'heart',
  sleep: 'moon',
  feeding: 'coffee',
  behavior: 'users',
  separation: 'heart',
  emotional: 'message-circle',
  health: 'thermometer',
  school: 'book',
};

const URGENCY_COLOR = {
  emergency: C.concern,
  callNow: '#B5705C',
  sameDay: C.attention,
  routine: C.muted,
};

export default function RightNowScreen({ navigation }) {
  const { months, activeChild } = useApp();

  if (months == null) {
    return (
      <Screen>
        <Content>
          <Empty title="Add a birthday first" body="Right Now changes with your child's age." />
        </Content>
      </Screen>
    );
  }

  const situations = getSituationsForAge(months);
  const fever = getFeverTriage(months);

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        eyebrow="What is happening right now"
        title="I need help"
        sub="Tap what is going on. No reading required."
      />

      <Content>
        <Card tone="alert">
          <Eyebrow color="#A85A44">{ALWAYS_EMERGENCY.title}</Eyebrow>
          <Bullets items={ALWAYS_EMERGENCY.items.slice(0, 4)} tone="warn" />
          <Tiny style={{ marginTop: 10, color: '#8A5A4A' }}>{ALWAYS_EMERGENCY.poison}</Tiny>
        </Card>

        {fever ? (
          <Card tone="flat" style={{ borderLeftWidth: 3, borderLeftColor: URGENCY_COLOR[fever.urgency] }}>
            <Eyebrow color={URGENCY_COLOR[fever.urgency]}>
              {'Fever  ·  ' + URGENCY[fever.urgency].label}
            </Eyebrow>
            <BodyText style={{ color: C.ink, fontWeight: '600', marginBottom: 5 }}>{fever.headline}</BodyText>
            <BodyText>{fever.detail}</BodyText>
          </Card>
        ) : null}

        <SectionTitle>Tap what is happening</SectionTitle>

        {situations.map((sit) => (
          <ListRow
            key={sit.id}
            icon={CATEGORY_ICON[sit.category] || 'help-circle'}
            tint={sit.urgencyCheck && sit.urgencyCheck.severity === 'critical' ? '#F7E9E4' : undefined}
            title={sit.label}
            subtitle={sit.subtitle}
            onPress={() => navigation.navigate('Situation', { id: sit.id })}
          />
        ))}

        {activeChild ? (
          <Card tone="flat" style={{ marginTop: 12 }}>
            <Eyebrow>Showing help for</Eyebrow>
            <BodyText>
              {activeChild.name}, and the list changes as they grow. Categories here include{' '}
              {[...new Set(situations.map((x) => CATEGORY_LABELS[x.category] || x.category))]
                .join(', ')
                .toLowerCase()}
              .
            </BodyText>
          </Card>
        ) : null}

        <Disclaimer>{TOPIC_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
