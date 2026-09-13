/**
 * Care topics list, grouped by category and filtered to this child's age.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, SectionTitle, ListRow, Disclaimer, Empty, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getTopicsByCategory, TOPIC_DISCLAIMER } from '../data/careTopics';

const CATEGORY_ICON = {
  safety: 'shield',
  feeding: 'coffee',
  health: 'thermometer',
  development: 'trending-up',
};

export default function TopicsScreen({ navigation }) {
  const { months } = useApp();
  const groups = getTopicsByCategory(months);

  if (!groups.length) {
    return (
      <Screen>
        <Content><Empty title="Nothing here yet" /></Content>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScreenHeader
        title="Care Topics"
        sub="Sourced, linked, and written against current guidance."
        small
      />
      <Content>
        {groups.map((g) => (
          <View key={g.id}>
            <SectionTitle>{g.label}</SectionTitle>
            {g.items.map((t) => (
              <ListRow
                key={t.id}
                icon={CATEGORY_ICON[t.category] || 'book-open'}
                title={t.label}
                subtitle={t.summary.length > 78 ? t.summary.slice(0, 78).trim() + '...' : t.summary}
                onPress={() => navigation.push('Topic', { id: t.id })}
              />
            ))}
          </View>
        ))}
        <Disclaimer>{TOPIC_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
