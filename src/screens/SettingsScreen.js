/**
 * Children and settings.
 *
 * Where a parent switches children, adds one, and turns support lenses on
 * or off. Lenses belong to a child, not to the account, so switching
 * children switches lenses too.
 */

import React from 'react';
import { View, Pressable, Alert } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ListRow, Chip, ChipRow,
  Button, BodyText, Tiny, Eyebrow, Callout, Sprout, Disclaimer, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { SUPPORT_LENSES, LENS_DISCLAIMER, getLens } from '../data/supportLenses';
import { getAgeSummary } from '../utils/age';
import { getGrowthDetail } from '../data/stages';

export default function SettingsScreen({ navigation }) {
  const {
    children, activeChild, parentName, setActiveChild, removeChild, toggleLens,
  } = useApp();

  function confirmRemove(child) {
    Alert.alert(
      `Remove ${child.name}?`,
      'This deletes their milestones, lenses and settings on this device. It cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => removeChild(child.id) },
      ]
    );
  }

  const activeLenses = activeChild ? activeChild.lenses : [];

  return (
    <Screen>
      <ScreenHeader
        title="Children and settings"
        sub={parentName ? `Signed in as ${parentName}` : 'Everything is stored on this device.'}
        small
      />

      <Content>
        <SectionTitle>Children</SectionTitle>
        {children.map((c) => {
          const sum = getAgeSummary(c);
          const growth = sum.stageId ? getGrowthDetail(sum.stageId) : null;
          const isActive = activeChild && c.id === activeChild.id;
          return (
            <Card key={c.id} tone={isActive ? 'leafy' : 'default'}>
              <Row>
                <View style={{
                  width: 46, height: 46, borderRadius: 23, backgroundColor: C.surface,
                  alignItems: 'center', justifyContent: 'center',
                }}>
                  <Sprout order={growth ? growth.order : 2} size={38} />
                </View>
                <View style={{ flex: 1 }}>
                  <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 16 }}>{c.name}</BodyText>
                  <Tiny style={{ marginTop: 1 }}>{sum.label || 'No birthday set'}</Tiny>
                </View>
                {isActive ? (
                  <Tiny style={{ color: C.primaryDeep, fontWeight: '700' }}>Active</Tiny>
                ) : (
                  <Button title="Switch" variant="ghost" onPress={() => setActiveChild(c.id)} />
                )}
              </Row>
              {children.length > 1 ? (
                <Pressable
                  onPress={() => confirmRemove(c)}
                  accessibilityRole="button"
                  accessibilityLabel={`Remove ${c.name}`}
                  hitSlop={8}
                  style={{ marginTop: 11, alignSelf: 'flex-start', minHeight: 30, justifyContent: 'center' }}
                >
                  <Tiny style={{ color: C.concern, fontWeight: '600' }}>Remove {c.name}</Tiny>
                </Pressable>
              ) : null}
            </Card>
          );
        })}

        <Button title="Add another child" icon="plus" onPress={() => navigation.navigate('AddChild')} />

        {activeChild ? (
          <>
            <SectionTitle>Support lenses for {activeChild.name}</SectionTitle>
            <Card tone="flat">
              <BodyText>{LENS_DISCLAIMER}</BodyText>
            </Card>

            <ChipRow style={{ marginBottom: 12 }}>
              {SUPPORT_LENSES.map((l) => (
                <Chip
                  key={l.id}
                  label={l.label}
                  active={activeLenses.includes(l.id)}
                  onPress={() => toggleLens(l.id)}
                />
              ))}
            </ChipRow>

            {activeLenses.map((id) => {
              const lens = getLens(id);
              if (!lens) return null;
              return (
                <Card key={id}>
                  <Eyebrow>{lens.label}</Eyebrow>
                  <BodyText>{lens.framing}</BodyText>
                  {lens.milestoneFlexMonths > 0 ? (
                    <Tiny style={{ marginTop: 8 }}>
                      Milestone windows show {lens.milestoneFlexMonths} extra months with this lens on.
                      That changes the wording only, never the advice to ask.
                    </Tiny>
                  ) : null}
                </Card>
              );
            })}
          </>
        ) : null}

        <SectionTitle>About your data</SectionTitle>
        <Callout>
          Everything you enter stays on this phone. There is no account and nothing is uploaded, which
          also means it is not backed up and does not move to a new phone yet. Cloud sync is still to
          be built.
        </Callout>

        <Disclaimer>
          Ready Set Grow offers educational information, not medical advice. It cannot examine your
          child. Your pediatrician can.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
