/**
 * One developmental content entry.
 *
 * The order matters: what you may notice, why it happens, what is
 * typical, what to try, what to say, then the parent's own state, then
 * when to raise it with a professional.
 *
 * Reassurance and the pediatrician list both appear, always. Warmth is
 * never allowed to talk a parent out of asking.
 */

import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, DetailSection, Bullets, ScriptCard,
  Callout, BodyText, Disclaimer, Empty, colors as C,
} from '../components/ui';
import { getContentById, CONTENT_DISCLAIMER } from '../data/developmentContent';

export default function ContentScreen({ route, navigation }) {
  const id = route.params && route.params.id;
  const entry = getContentById(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: entry ? entry.ageRange : '' });
  }, [navigation, entry]);

  if (!entry) {
    return <Screen><Content><Empty title="That entry could not be found" /></Content></Screen>;
  }

  return (
    <Screen>
      <ScreenHeader eyebrow={entry.ageRange} title={entry.title} small />

      <Content>
        <Card tone="leafy"><BodyText>{entry.summary}</BodyText></Card>

        <DetailSection label="What you may notice">
          <Bullets items={entry.whatYouMayNotice} />
        </DetailSection>

        <DetailSection label="Why it happens">
          <Bullets items={entry.whyItHappens} />
        </DetailSection>

        {entry.whatIsTypical ? (
          <DetailSection label="What is typical">
            <Card tone="flat"><BodyText>{entry.whatIsTypical}</BodyText></Card>
          </DetailSection>
        ) : null}

        <DetailSection label="What you can try">
          <Bullets items={entry.parentStrategies} />
        </DetailSection>

        {entry.scripts && entry.scripts.length ? (
          <DetailSection label="What to say">
            {entry.scripts.map((s, i) => (
              <ScriptCard key={i} situation={s.situation} say={s.say} why={s.why} />
            ))}
          </DetailSection>
        ) : null}

        {entry.forYou && entry.forYou.length ? (
          <DetailSection label="For you">
            <Callout>{entry.forYou.join('\n\n')}</Callout>
          </DetailSection>
        ) : null}

        <DetailSection label="Worth mentioning to your pediatrician">
          <Bullets items={entry.worthMentioning} tone="warn" />
        </DetailSection>

        <Disclaimer>{CONTENT_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
