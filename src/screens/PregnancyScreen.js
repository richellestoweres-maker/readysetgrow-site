/**
 * Pregnancy
 *
 * Shown when the child record is a due date rather than a birthday.
 *
 * The warning signs sit at the top, above everything, and they stay there
 * regardless of trimester. Pregnancy and postpartum complications are
 * time critical, and the CDC built a whole campaign around the fact that
 * women reporting them get dismissed. So this screen carries both the
 * signs and the words to use when someone is not listening.
 *
 * Everything below that is preparation for what comes next rather than
 * week by week fetal development, which every other app already does.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ListRow, Bullets,
  ScriptCard, Callout, BodyText, Tiny, Eyebrow, Tag, Disclaimer, LeafArt,
  Row, Sprout, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import {
  URGENT_MATERNAL_SIGNS, POSTPARTUM_CONDITIONS, getPrepUpTo,
} from '../data/pregnancy';
import {
  getInfectionsSorted, PREGNANCY_VACCINES, SUPPLEMENTS_AND_MEDS,
} from '../data/pregnancyHealth';
import { getBagProgress } from '../data/hospitalBag';

export default function PregnancyScreen({ navigation }) {
  const { activeChild, summary, bagChecked } = useApp();
  const trimester = summary.trimester;
  const topics = getPrepUpTo(trimester);
  const infections = getInfectionsSorted();
  const bag = getBagProgress(bagChecked);

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        eyebrow={summary.label || 'Expecting'}
        title="Getting ready"
        sub="Not what size the baby is this week. What makes the months after easier."
      />

      <Content>
        <Card>
          <Row>
            <View style={{
              width: 56, height: 56, borderRadius: 28, backgroundColor: C.leafWash,
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Sprout order={0} size={44} />
            </View>
            <View style={{ flex: 1 }}>
              <BodyText style={{ fontSize: 18, color: C.ink, fontWeight: '600' }}>
                {activeChild ? activeChild.name : 'Your baby'}
              </BodyText>
              <Tiny style={{ marginTop: 1 }}>{summary.label}</Tiny>
              {trimester ? (
                <View style={{ flexDirection: 'row', marginTop: 7 }}>
                  <Tag label={`Trimester ${trimester}`} />
                </View>
              ) : null}
            </View>
          </Row>
        </Card>

        {/* Safety first, always, at every trimester. */}
        <Card tone="alert">
          <Eyebrow color="#A85A44">{URGENT_MATERNAL_SIGNS.headline}</Eyebrow>
          <Bullets items={URGENT_MATERNAL_SIGNS.signs} tone="warn" />
          <Tiny style={{ marginTop: 11, color: '#8A5A4A' }}>{URGENT_MATERNAL_SIGNS.window}</Tiny>
        </Card>

        <Card tone="flat">
          <Eyebrow color={C.taupe}>{URGENT_MATERNAL_SIGNS.ifDismissed.headline}</Eyebrow>
          <BodyText>{URGENT_MATERNAL_SIGNS.ifDismissed.body}</BodyText>
          <View style={{ marginTop: 11 }}>
            {URGENT_MATERNAL_SIGNS.ifDismissed.scripts.map((s, i) => (
              <ScriptCard key={i} say={s} />
            ))}
          </View>
          <Callout>{URGENT_MATERNAL_SIGNS.ifDismissed.escalate}</Callout>
        </Card>

        <SectionTitle>
          {trimester ? `Worth doing now, trimester ${trimester}` : 'Worth doing now'}
        </SectionTitle>
        {topics.map((t) => (
          <ListRow
            key={t.id}
            icon="feather"
            title={t.title}
            subtitle={t.why.length > 92 ? t.why.slice(0, 92).trim() + '...' : t.why}
            align="flex-start"
            onPress={() => navigation.navigate('PrepTopic', { id: t.id })}
          />
        ))}

        {/*
          The hospital bag is a doing task rather than a reading task, so
          it gets a progress row rather than a paragraph. It surfaces from
          the second trimester on, since packing early is the whole point.
        */}
        <SectionTitle>Packing</SectionTitle>
        <ListRow
          icon="briefcase"
          title="Hospital bag"
          subtitle={
            bag.done === 0
              ? 'A checklist, plus the things people actually forget. Have it ready by 36 weeks.'
              : `${bag.done} of ${bag.total} packed. ${
                  bag.essentialsComplete
                    ? 'Every essential is in.'
                    : `${bag.essentialsTotal - bag.essentialsDone} essentials still to go.`
                }`
          }
          align="flex-start"
          onPress={() => navigation.navigate('HospitalBag')}
        />

        {/*
          CMV leads because it is the most common infectious cause of birth
          defects and almost nobody has heard of it. Prevention is a handful
          of habits, which is an enormous payoff for one screen of reading.
        */}
        <SectionTitle>Looking after yourself</SectionTitle>
        <Card tone="flat">
          <BodyText>
            Most of these are preventable or treatable, and most people are never told about them
            clearly. That is the only reason they are here.
          </BodyText>
        </Card>
        {infections.map((inf) => (
          <ListRow
            key={inf.id}
            icon="shield"
            title={inf.label}
            subtitle={inf.headline}
            align="flex-start"
            onPress={() => navigation.navigate('PregnancyHealth', { id: inf.id })}
          />
        ))}
        <ListRow
          icon="thermometer"
          title={PREGNANCY_VACCINES.label}
          subtitle="What is recommended, and when in the pregnancy"
          align="flex-start"
          onPress={() => navigation.navigate('PregnancyHealth', { id: 'vaccines' })}
        />
        <ListRow
          icon="clipboard"
          title={SUPPLEMENTS_AND_MEDS.label}
          subtitle="Including the one about not stopping a medication on your own"
          align="flex-start"
          onPress={() => navigation.navigate('PregnancyHealth', { id: 'meds' })}
        />

        <SectionTitle>What comes after</SectionTitle>
        <ListRow
          icon="heart"
          title="The fourth trimester"
          subtitle="Recovery week by week, what nobody warns you about, and how you are actually doing"
          align="flex-start"
          onPress={() => navigation.navigate('Postpartum')}
        />
        <ListRow
          icon="droplet"
          title="Pumping and feeding"
          subtitle="Flange fitting, schedules, milk storage, and finding a lactation consultant"
          align="flex-start"
          onPress={() => navigation.navigate('Pumping')}
        />

        {trimester === 3 ? (
          <>
            <SectionTitle>After the birth, watch for these</SectionTitle>
            <Card tone="flat">
              <BodyText>
                These three are the ones people are not warned about, and they arrive after everyone
                has stopped paying attention to the mother.
              </BodyText>
            </Card>
            {POSTPARTUM_CONDITIONS.map((c) => (
              <Card key={c.id}>
                <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 15.5 }}>{c.label}</BodyText>
                <Tiny style={{ marginTop: 4 }}>{c.surprise}</Tiny>
                <View style={{ marginTop: 10 }}>
                  <Bullets items={c.signs} tone="warn" />
                </View>
                <Callout style={{ marginTop: 11 }}>{c.action}</Callout>
              </Card>
            ))}
          </>
        ) : null}

        <Disclaimer>
          Educational information, not medical advice. Your obstetric provider knows your pregnancy.
          If something feels wrong, trust that and keep asking until someone examines you.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
