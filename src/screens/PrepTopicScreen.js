/**
 * One pregnancy preparation topic.
 *
 * Structure is deliberate: why this matters first, because a tired
 * pregnant person will not do a checklist they have no reason to trust.
 * Then the concrete things to do. Then a note addressed to the parent
 * rather than about the baby.
 */

import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, DetailSection, Bullets, Callout,
  ListRow, BodyText, Disclaimer, Empty, colors as C,
} from '../components/ui';
import { getPrepTopic } from '../data/pregnancy';
import { getTopic } from '../data/careTopics';

export default function PrepTopicScreen({ route, navigation }) {
  const id = route.params && route.params.id;
  const topic = getPrepTopic(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: topic ? 'Getting ready' : '' });
  }, [navigation, topic]);

  if (!topic) {
    return <Screen><Content><Empty title="That could not be found" growth={0} /></Content></Screen>;
  }

  return (
    <Screen>
      <ScreenHeader title={topic.title} small />

      <Content>
        <DetailSection label="Why this one matters">
          <Card tone="leafy"><BodyText>{topic.why}</BodyText></Card>
        </DetailSection>

        <DetailSection label="What to do now">
          <Bullets items={topic.doNow} />
        </DetailSection>

        {topic.parentNote ? (
          <DetailSection label="For you">
            <Callout>{topic.parentNote}</Callout>
          </DetailSection>
        ) : null}

        {(topic.linksTo || []).length ? (
          <DetailSection label="Read more">
            {topic.linksTo.map((tid) => {
              const t = getTopic(tid);
              if (!t) return null;
              return (
                <ListRow
                  key={tid}
                  icon="book-open"
                  title={t.label}
                  onPress={() => navigation.push('Topic', { id: t.id })}
                />
              );
            })}
          </DetailSection>
        ) : null}

        <Disclaimer>
          Educational information, not medical advice. Your obstetric provider and your pediatrician
          know your situation.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
