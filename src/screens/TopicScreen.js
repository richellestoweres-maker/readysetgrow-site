/**
 * One care topic.
 *
 * The myths section is here on purpose. Most of what a new parent hears
 * comes from a group chat or a relative, and some of it is dangerous.
 * Correcting the specific belief works better than stating the right
 * answer and hoping it displaces the wrong one.
 *
 * Sources are tappable and open in a real browser, so a parent can check
 * us against the AAP rather than taking our word for it.
 */

import React, { useLayoutEffect } from 'react';
import { View, Linking, Pressable, Alert } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, DetailSection, Bullets, BodyText, Tiny,
  Eyebrow, Callout, Disclaimer, Empty, Row, colors as C,
} from '../components/ui';
import { Feather } from '@expo/vector-icons';
import { getTopic, TOPIC_DISCLAIMER } from '../data/careTopics';

function openLink(url) {
  Linking.openURL(url).catch(() => {
    Alert.alert('Could not open the link', url);
  });
}

export default function TopicScreen({ route, navigation }) {
  const id = route.params && route.params.id;
  const topic = getTopic(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: topic ? topic.shortLabel : '' });
  }, [navigation, topic]);

  if (!topic) {
    return (
      <Screen><Content><Empty title="That topic could not be found" /></Content></Screen>
    );
  }

  return (
    <Screen>
      <ScreenHeader title={topic.label} small />

      <Content>
        <Card tone="leafy"><BodyText>{topic.summary}</BodyText></Card>

        {topic.rateTable ? (
          <DetailSection label="Faster than this is worth a call">
            <Card style={{ paddingVertical: 4 }}>
              {topic.rateTable.map((r, i) => (
                <Row
                  key={r.age}
                  style={{
                    justifyContent: 'space-between', paddingVertical: 12,
                    borderBottomWidth: i < topic.rateTable.length - 1 ? 1 : 0,
                    borderBottomColor: C.borderSoft,
                  }}
                >
                  <BodyText style={{ color: C.ink, fontWeight: '600' }}>{r.age}</BodyText>
                  <BodyText style={{ textAlign: 'right', flexShrink: 1 }}>{r.fast}</BodyText>
                </Row>
              ))}
            </Card>
            <Tiny style={{ marginTop: 7 }}>
              Count for a full sixty seconds while they are calm or asleep. Crying makes the number
              meaningless.
            </Tiny>
          </DetailSection>
        ) : null}

        {topic.storageTable ? (
          <DetailSection label="How long it keeps">
            {topic.storageTable.map((r) => (
              <Card key={r.state} tone="flat">
                <BodyText style={{ color: C.ink, fontWeight: '600', marginBottom: 7 }}>{r.state}</BodyText>
                <Row style={{ justifyContent: 'space-between', marginBottom: 4 }}>
                  <Tiny>Room temperature</Tiny>
                  <Tiny style={{ color: C.ink, fontWeight: '600', flexShrink: 1, textAlign: 'right' }}>{r.room}</Tiny>
                </Row>
                <Row style={{ justifyContent: 'space-between', marginBottom: 4 }}>
                  <Tiny>Refrigerator</Tiny>
                  <Tiny style={{ color: C.ink, fontWeight: '600', flexShrink: 1, textAlign: 'right' }}>{r.fridge}</Tiny>
                </Row>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Tiny>Freezer</Tiny>
                  <Tiny style={{ color: C.ink, fontWeight: '600', flexShrink: 1, textAlign: 'right' }}>{r.freezer}</Tiny>
                </Row>
              </Card>
            ))}
          </DetailSection>
        ) : null}

        <DetailSection label="What to know">
          <Bullets items={topic.keyPoints} />
        </DetailSection>

        {topic.myths && topic.myths.length ? (
          <DetailSection label="Things you will hear that are not true">
            {topic.myths.map((m, i) => (
              <Card key={i} tone="flat">
                <Tiny style={{ textDecorationLine: 'line-through' }}>{m.myth}</Tiny>
                <BodyText style={{ marginTop: 6 }}>{m.truth}</BodyText>
              </Card>
            ))}
          </DetailSection>
        ) : null}

        {topic.redFlags && topic.redFlags.length ? (
          <DetailSection label="Call your pediatrician if">
            <Bullets items={topic.redFlags} tone="warn" />
          </DetailSection>
        ) : null}

        <DetailSection label="Sources">
          {topic.sources.map((src) => (
            <Pressable
              key={src.url}
              onPress={() => openLink(src.url)}
              accessibilityRole="link"
              accessibilityLabel={`${src.label}, opens in your browser`}
              style={({ pressed }) => [{
                flexDirection: 'row', alignItems: 'center', gap: 12,
                backgroundColor: C.surface, borderRadius: 18, padding: 14, marginBottom: 9,
                minHeight: 44,
              }, pressed && { opacity: 0.62 }]}
            >
              <View style={{
                minWidth: 38, height: 38, borderRadius: 12, paddingHorizontal: 6,
                backgroundColor: C.leafWash, alignItems: 'center', justifyContent: 'center',
              }}>
                <Tiny style={{ fontSize: 9.5, fontWeight: '700', color: C.primaryInk }}>{src.org}</Tiny>
              </View>
              <View style={{ flex: 1 }}>
                <BodyText style={{ color: C.primaryDeep, fontWeight: '600' }}>{src.label}</BodyText>
                <Tiny style={{ marginTop: 2 }}>{src.url.replace(/^https:\/\//, '').split('/')[0]}</Tiny>
              </View>
              <Feather name="external-link" size={16} color={C.faint} />
            </Pressable>
          ))}
          <Tiny style={{ marginTop: 4 }}>Written against: {topic.reviewedAgainst}.</Tiny>
        </DetailSection>

        <Disclaimer>{TOPIC_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
