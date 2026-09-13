/**
 * Hospital Bag
 *
 * A checklist that remembers what you packed.
 *
 * WHY IT IS BUILT THIS WAY
 * The value is not the list, every website has a list. The value is the
 * notes attached to items, the ones a second time parent would tell you,
 * and the fact that your progress persists so you can pack across three
 * weeks in five minute pieces rather than in one panicked evening.
 *
 * WHAT IS PINNED TO THE TOP
 * The essentials bar, because those are the items that cannot be
 * replaced at the hospital, and the things people forget, because that
 * is the reason to open a list you think you already know.
 *
 * WHERE STATE LIVES
 * bagChecked is on the child record, so a second pregnancy starts with
 * an empty bag instead of inheriting one that was packed years ago.
 */

import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, BodyText, Tiny,
  Eyebrow, Bullets, Steps, Callout, Bar, Button, Chip, ChipRow,
  Disclaimer, LeafArt, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import {
  getCategories, getInsiderTips, getBagProgress, getAddition,
  PACKING_TIMELINE, BAG_ADDITIONS, SKIP_THESE, HOSPITAL_BAG_SOURCES,
} from '../data/hospitalBag';

/* A single tappable checklist row. */
function CheckItem({ item, checked, onToggle }) {
  return (
    <Pressable
      onPress={onToggle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={item.label}
      style={({ pressed }) => [
        {
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 12,
          paddingVertical: 12,
          paddingHorizontal: 4,
          minHeight: 44,
          opacity: pressed ? 0.6 : 1,
        },
      ]}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 7,
          marginTop: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: checked ? C.primary : 'transparent',
          borderWidth: checked ? 0 : 1.5,
          borderColor: C.border,
        }}
      >
        {checked ? <Feather name="check" size={15} color="#fff" /> : null}
      </View>
      <View style={{ flex: 1 }}>
        <Row align="flex-start">
          <Text
            style={{
              flex: 1,
              fontSize: 15,
              lineHeight: 21,
              color: checked ? C.faint : C.ink,
              textDecorationLine: checked ? 'line-through' : 'none',
            }}
          >
            {item.label}
          </Text>
          {item.essential ? (
            <View
              style={{
                paddingHorizontal: 7,
                paddingVertical: 2,
                borderRadius: 6,
                backgroundColor: C.leafWash,
                marginLeft: 8,
              }}
            >
              <Text style={{ fontSize: 10.5, color: C.primaryDeep, letterSpacing: 0.3 }}>
                Essential
              </Text>
            </View>
          ) : null}
        </Row>
        {item.note ? (
          <Tiny style={{ marginTop: 5, lineHeight: 18 }}>{item.note}</Tiny>
        ) : null}
      </View>
    </Pressable>
  );
}

export default function HospitalBagScreen() {
  const { bagChecked, toggleBagItem, clearBag, activeChild } = useApp();
  const [openAddition, setOpenAddition] = useState(null);

  const checked = bagChecked || [];
  const progress = getBagProgress(checked);
  const categories = getCategories();
  const tips = getInsiderTips();
  const addition = openAddition ? getAddition(openAddition) : null;

  const canCheck = !!activeChild;

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        eyebrow="Getting ready"
        title="Hospital bag"
        sub="Packed by 36 weeks, so it is one thing you never have to think about again."
      />

      <Content>
        {/* Progress, and the essentials called out separately. */}
        <Card>
          <Row>
            <View style={{ flex: 1 }}>
              <BodyText style={{ fontSize: 17, color: C.ink, fontWeight: '600' }}>
                {progress.done} of {progress.total} packed
              </BodyText>
              <Tiny style={{ marginTop: 2 }}>
                {progress.essentialsComplete
                  ? 'Every essential is in the bag.'
                  : `${progress.essentialsTotal - progress.essentialsDone} of the ${progress.essentialsTotal} essentials still to go.`}
              </Tiny>
            </View>
            <Text style={{ fontSize: 26, color: C.primaryDeep }}>{progress.percent}%</Text>
          </Row>
          <View style={{ marginTop: 12 }}>
            <Bar value={progress.total === 0 ? 0 : progress.done / progress.total} />
          </View>
        </Card>

        {!canCheck ? (
          <Card tone="flat">
            <Tiny>
              Add a profile to save what you have packed. You can still read the list without one.
            </Tiny>
          </Card>
        ) : null}

        {/* When to pack. */}
        <Card tone="leafy">
          <Eyebrow color={C.primaryDeep}>{PACKING_TIMELINE.headline}</Eyebrow>
          <BodyText>{PACKING_TIMELINE.body}</BodyText>
          <View style={{ marginTop: 12 }}>
            <Steps items={PACKING_TIMELINE.steps} />
          </View>
          <Callout>{PACKING_TIMELINE.note}</Callout>
        </Card>

        {/* The reason to read a list you think you know. */}
        <SectionTitle>Things people wish they had known</SectionTitle>
        <Card tone="flat">
          <Tiny style={{ marginBottom: 10 }}>
            {tips.length} items on this list come with a note that changes what you pack. They are marked
            throughout, and here they are together.
          </Tiny>
          <Bullets items={tips.map((t) => `${t.label}. ${t.note}`)} />
        </Card>

        {/* The checklist. */}
        {categories.map((cat) => {
          const catProgress = progress.categories.find((c) => c.id === cat.id);
          return (
            <View key={cat.id} style={{ marginBottom: 4 }}>
              <SectionTitle>{cat.label}</SectionTitle>
              <Card>
                <Row>
                  <Tiny style={{ flex: 1, lineHeight: 18 }}>{cat.intro}</Tiny>
                  <Text
                    style={{
                      fontSize: 12.5,
                      color: catProgress && catProgress.complete ? C.primaryDeep : C.faint,
                      marginLeft: 10,
                    }}
                  >
                    {catProgress ? `${catProgress.done}/${catProgress.total}` : ''}
                  </Text>
                </Row>
                <View
                  style={{
                    marginTop: 8,
                    borderTopWidth: 1,
                    borderTopColor: C.borderSoft,
                  }}
                >
                  {(cat.items || []).map((item) => (
                    <CheckItem
                      key={item.id}
                      item={item}
                      checked={checked.includes(item.id)}
                      onToggle={() => canCheck && toggleBagItem(item.id)}
                    />
                  ))}
                </View>
              </Card>
            </View>
          );
        })}

        {/* Situation specific. */}
        <SectionTitle>If your birth goes a different way</SectionTitle>
        <Card tone="flat">
          <Tiny style={{ marginBottom: 11 }}>
            None of these are worst cases. They are common outcomes, and packing for them costs almost
            nothing.
          </Tiny>
          <ChipRow>
            {BAG_ADDITIONS.map((a) => (
              <Chip
                key={a.id}
                label={a.label.replace('If you have a ', '').replace('If your baby goes to the ', '').replace('If you are being ', '')}
                active={openAddition === a.id}
                onPress={() => setOpenAddition(openAddition === a.id ? null : a.id)}
              />
            ))}
          </ChipRow>
        </Card>

        {addition ? (
          <Card>
            <Eyebrow color={C.taupe}>{addition.label}</Eyebrow>
            <BodyText>{addition.intro}</BodyText>
            <View style={{ marginTop: 12 }}>
              <Bullets items={addition.items} />
            </View>
            <Callout>{addition.note}</Callout>
          </Card>
        ) : null}

        {/* What not to bring. */}
        <SectionTitle>{SKIP_THESE.headline}</SectionTitle>
        <Card tone="flat">
          <Bullets items={SKIP_THESE.items.map((i) => `${i.label}. ${i.why}`)} />
          <Callout>{SKIP_THESE.note}</Callout>
        </Card>

        {checked.length > 0 && canCheck ? (
          <View style={{ marginTop: 8 }}>
            <Button title="Clear the checklist" variant="ghost" icon="rotate-ccw" onPress={clearBag} />
          </View>
        ) : null}

        <SectionTitle>Where this comes from</SectionTitle>
        <Card tone="flat">
          {HOSPITAL_BAG_SOURCES.map((s, i) => (
            <View key={i} style={{ marginBottom: i === HOSPITAL_BAG_SOURCES.length - 1 ? 0 : 10 }}>
              <BodyText style={{ fontSize: 14, color: C.ink }}>{s.org}</BodyText>
              <Tiny style={{ marginTop: 1 }}>{s.label}</Tiny>
              <Tiny style={{ marginTop: 2, color: C.primaryDeep }}>{s.url}</Tiny>
            </View>
          ))}
        </Card>

        <Disclaimer>
          Hospital policies vary more than you would expect. Ask at a prenatal visit what your unit
          provides, what they allow, and whether you can eat in labor, rather than assuming any list
          matches where you are giving birth.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
