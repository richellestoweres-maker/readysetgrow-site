/**
 * Activities, filtered to this child's age and reordered by their lenses.
 *
 * A sensory lens pushes heavy work and crash play to the top without any
 * separate per lens list, because activities and lenses share one
 * strategyTags vocabulary.
 */

import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, ListRow, Chip, ChipRow, Tag, Tiny, BodyText,
  Card, Eyebrow, Disclaimer, Empty, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getActivitiesForChild, ACTIVITY_SKILLS } from '../data/activities';
import { getLenses } from '../data/supportLenses';

const SKILL_ICON = {
  grossMotor: 'activity',
  fineMotor: 'edit-2',
  literacy: 'book',
  numeracy: 'hash',
  regulation: 'heart',
  sensory: 'wind',
  pretendPlay: 'smile',
  socialEmotional: 'users',
  language: 'message-circle',
  cognitive: 'zap',
};

function iconFor(a) {
  for (const s of a.skills) if (SKILL_ICON[s]) return SKILL_ICON[s];
  return 'grid';
}

export default function ActivitiesScreen({ navigation }) {
  const { months, lensTags, lenses } = useApp();
  const [setting, setSetting] = useState(null);
  const [noMaterials, setNoMaterials] = useState(false);

  if (months == null) {
    return <Screen><Content><Empty title="Add a birthday first" /></Content></Screen>;
  }

  let list = getActivitiesForChild(months, lensTags);
  if (setting) list = list.filter((a) => a.setting === setting || a.setting === 'anywhere');
  if (noMaterials) list = list.filter((a) => !a.materials || a.materials.length === 0);

  const activeLenses = getLenses(lenses);

  return (
    <Screen>
      <ScreenHeader title="Activities" sub="Play today. Brighter tomorrows ahead." small />

      <Content>
        <ChipRow style={{ marginBottom: 13 }}>
          <Chip label="Indoor" active={setting === 'indoor'} onPress={() => setSetting(setting === 'indoor' ? null : 'indoor')} />
          <Chip label="Outdoor" active={setting === 'outdoor'} onPress={() => setSetting(setting === 'outdoor' ? null : 'outdoor')} />
          <Chip label="Nothing needed" active={noMaterials} onPress={() => setNoMaterials(!noMaterials)} />
        </ChipRow>

        {activeLenses.length ? (
          <Card tone="flat">
            <Eyebrow>Sorted for your lenses</Eyebrow>
            <BodyText>
              {activeLenses.map((l) => l.label).join(', ')} put matching activities first. The rest
              are still below.
            </BodyText>
          </Card>
        ) : null}

        {list.length === 0 ? (
          <Empty title="No activities match those filters" body="Try clearing one of them." />
        ) : (
          list.map((a) => (
            <ListRow
              key={a.id}
              icon={iconFor(a)}
              title={a.title}
              subtitle={a.description}
              align="flex-start"
              onPress={() => navigation.push('Activity', { id: a.id })}
              right={<Tag label={`${a.minutes} min`} tone="time" />}
            />
          ))
        )}

        <Disclaimer>
          Supervise as you would normally. Where an activity has a safety note, it is on the
          activity's own page.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
