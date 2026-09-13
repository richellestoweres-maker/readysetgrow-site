/**
 * One activity. Steps short enough to follow while supervising.
 */

import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, DetailSection, Bullets, Steps, Callout,
  Tag, BodyText, Disclaimer, Empty, colors as C,
} from '../components/ui';
import { getActivityById, ACTIVITY_SETTINGS, ACTIVITY_SKILLS } from '../data/activities';

export default function ActivityScreen({ route, navigation }) {
  const id = route.params && route.params.id;
  const a = getActivityById(id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: a ? a.title : '' });
  }, [navigation, a]);

  if (!a) {
    return <Screen><Content><Empty title="That activity could not be found" /></Content></Screen>;
  }

  const settingLabel = (ACTIVITY_SETTINGS.find((s) => s.id === a.setting) || {}).label || '';

  return (
    <Screen>
      <ScreenHeader title={a.title} small />

      <Content>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          <Tag label={`${a.minutes} min`} tone="time" />
          {settingLabel ? <Tag label={settingLabel} tone="warm" /> : null}
          {a.skills.map((sk) => {
            const found = ACTIVITY_SKILLS.find((x) => x.id === sk);
            return <Tag key={sk} label={found ? found.label : sk} />;
          })}
        </View>

        <Card tone="leafy"><BodyText>{a.description}</BodyText></Card>

        <DetailSection label="What you need">
          <Card tone="flat">
            <BodyText>
              {a.materials && a.materials.length ? a.materials.join(', ') : 'Nothing at all.'}
            </BodyText>
          </Card>
        </DetailSection>

        <DetailSection label="How to do it">
          <Steps items={a.howTo} />
        </DetailSection>

        {a.makeItEasier ? (
          <DetailSection label="Make it easier"><Bullets items={a.makeItEasier} /></DetailSection>
        ) : null}

        {a.makeItHarder ? (
          <DetailSection label="Make it harder"><Bullets items={a.makeItHarder} /></DetailSection>
        ) : null}

        {a.whyItHelps ? (
          <DetailSection label="Why it helps"><Callout>{a.whyItHelps}</Callout></DetailSection>
        ) : null}

        {a.safetyNote ? (
          <DetailSection label="Safety">
            <Card tone="warn"><BodyText>{a.safetyNote}</BodyText></Card>
          </DetailSection>
        ) : null}
      </Content>
    </Screen>
  );
}
