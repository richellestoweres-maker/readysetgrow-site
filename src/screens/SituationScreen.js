/**
 * One Right Now situation.
 *
 * Order on this screen is the whole design. Safety check, then something
 * to do, then timers, then the explanation. A parent holding a screaming
 * baby gets an action before they get a paragraph.
 */

import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, Steps, Bullets, ScriptCard, Callout,
  DetailSection, ListRow, BodyText, Tiny, Eyebrow, Disclaimer, Empty, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getSituation } from '../data/rightNow';
import { getTopic, TOPIC_DISCLAIMER } from '../data/careTopics';
import { resolveTimer } from '../data/sleep';

export default function SituationScreen({ route, navigation }) {
  const { months } = useApp();
  const id = route.params && route.params.id;
  const sit = getSituation(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: sit ? sit.label : '' });
  }, [navigation, sit]);

  if (!sit) {
    return (
      <Screen>
        <Content><Empty title="That could not be found" /></Content>
      </Screen>
    );
  }

  const severity = sit.urgencyCheck && sit.urgencyCheck.severity;
  const tone = severity === 'critical' ? 'alert' : severity === 'warning' ? 'warn' : 'leafy';
  const timers = (sit.timers || []).map((t) => resolveTimer(t, months)).filter(Boolean);

  return (
    <Screen>
      <ScreenHeader title={sit.label} sub={sit.subtitle} small />

      <Content>
        {sit.urgencyCheck ? (
          <Card tone={tone}>
            <Eyebrow color={severity === 'critical' ? '#A85A44' : C.taupe}>{sit.urgencyCheck.title}</Eyebrow>
            <BodyText>{sit.urgencyCheck.body}</BodyText>
          </Card>
        ) : null}

        <DetailSection label="Try this now">
          <Steps items={sit.tryRightNow} />
        </DetailSection>

        {timers.length ? (
          <DetailSection label="Timers that help">
            {timers.map((t) => (
              <Card key={t.id} tone="flat">
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <View style={{
                    width: 52, height: 52, borderRadius: 26, backgroundColor: C.leafWash,
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <BodyText style={{ color: C.primaryInk, fontWeight: '700', fontSize: 15 }}>
                      {t.minutes ? `${t.minutes}m` : 'up'}
                    </BodyText>
                  </View>
                  <View style={{ flex: 1 }}>
                    <BodyText style={{ color: C.ink, fontWeight: '600' }}>{t.label}</BodyText>
                    <Tiny style={{ marginTop: 3 }}>{t.why}</Tiny>
                  </View>
                </View>
              </Card>
            ))}
            <Tiny>Timers are defined but do not count down yet. That is app work still to come.</Tiny>
          </DetailSection>
        ) : null}

        {sit.whatIsHappening ? (
          <DetailSection label="What is happening">
            <Card tone="leafy">
              <BodyText style={{ color: C.ink, fontWeight: '600', marginBottom: 6 }}>
                {sit.whatIsHappening.headline}
              </BodyText>
              <BodyText>{sit.whatIsHappening.body}</BodyText>
            </Card>
            <Bullets items={sit.whatIsHappening.points} />
          </DetailSection>
        ) : null}

        {sit.scripts && sit.scripts.length ? (
          <DetailSection label="What to say">
            {sit.scripts.map((sc, i) => (
              <ScriptCard key={i} situation={sc.situation} say={sc.say} why={sc.why} />
            ))}
          </DetailSection>
        ) : null}

        {sit.forYou && sit.forYou.length ? (
          <DetailSection label="For you">
            <Callout>{sit.forYou.join('\n\n')}</Callout>
          </DetailSection>
        ) : null}

        <DetailSection label="Call your pediatrician if">
          <Bullets items={sit.callDoctorIf} tone="warn" />
        </DetailSection>

        {(sit.topics || []).length ? (
          <DetailSection label="Read more">
            {sit.topics.map((tid) => {
              const topic = getTopic(tid);
              if (!topic) return null;
              return (
                <ListRow
                  key={tid}
                  icon="book-open"
                  title={topic.label}
                  onPress={() => navigation.push('Topic', { id: topic.id })}
                />
              );
            })}
          </DetailSection>
        ) : null}

        {(sit.relatedContent || []).length ? (
          <DetailSection label="More on this">
            {sit.relatedContent.map((cid) => (
              <ListRow
                key={cid}
                icon="feather"
                title="Read the full entry"
                onPress={() => navigation.push('Content', { id: cid })}
              />
            ))}
          </DetailSection>
        ) : null}

        <Disclaimer>{TOPIC_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
