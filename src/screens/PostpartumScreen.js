/**
 * Postpartum
 *
 * The fourth trimester, for the parent rather than the baby.
 *
 * WHY THE HELP LINES ARE PINNED
 * They sit at the top of the mental health tab and they are repeated
 * inside every entry that touches distress, because a person who needs
 * them is not going to scroll to a resources section at the bottom.
 *
 * WHY THE URGENT SIGNS ARE A LINK, NOT A COPY
 * The warning signs live in pregnancy.js and are rendered by the
 * pregnancy screen. Restating them here would create two copies to keep
 * current, and a stale copy of a warning sign list is worse than no copy.
 *
 * TIMELINE AWARENESS
 * If the active child has a birthday, the screen opens on the stage that
 * matches how long ago that was, so a person at day 4 lands on the week
 * they are actually in rather than on a generic overview.
 */

import React, { useState } from 'react';
import { View, Text, Linking } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, BodyText, Tiny,
  Eyebrow, Bullets, Callout, Chip, ChipRow, DetailSection, Disclaimer,
  LeafArt, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import {
  MATERNAL_SUPPORT_LINES, RECOVERY_TIMELINE, NOBODY_WARNED_ME,
  PERINATAL_MENTAL_HEALTH, RECOVERY_SUPPLIES, ASKING_FOR_HELP,
  POSTPARTUM_SOURCES, getTimeline, getStageForDaysPostpartum,
  getMentalHealthLines,
} from '../data/postpartum';

const TABS = [
  { id: 'timeline', label: 'Week by week' },
  { id: 'nobody', label: 'Nobody told me' },
  { id: 'mind', label: 'How you are' },
  { id: 'supplies', label: 'What to have' },
  { id: 'help', label: 'Letting people help' },
];

/** A support line, rendered so the number is the biggest thing on it. */
function SupportLine({ line }) {
  return (
    <Card>
      <BodyText style={{ fontSize: 15, color: C.ink, fontWeight: '600' }}>{line.name}</BodyText>
      <Text
        style={{ fontSize: 20, color: C.primaryDeep, marginTop: 6 }}
        accessibilityRole="link"
        onPress={() => Linking.openURL(line.url).catch(() => {})}
      >
        {line.contact}
      </Text>
      <Tiny style={{ marginTop: 6 }}>{line.detail}</Tiny>
      <Tiny style={{ marginTop: 4, color: C.taupeDeep }}>{line.forWho}</Tiny>
    </Card>
  );
}

/* ------------------------------------------------------------------
 * TABS
 * ------------------------------------------------------------------ */

function TimelineTab({ initialStageId }) {
  const stages = getTimeline();
  const [openId, setOpenId] = useState(initialStageId || stages[0].id);
  const stage = stages.find((s) => s.id === openId) || stages[0];

  return (
    <>
      <Card tone="flat">
        <Tiny>
          Recovery is longer than anyone tells you, and it is not a straight line. Pick where you are.
        </Tiny>
        <View style={{ marginTop: 12 }}>
          <ChipRow>
            {stages.map((s) => (
              <Chip key={s.id} label={s.window} active={openId === s.id} onPress={() => setOpenId(s.id)} />
            ))}
          </ChipRow>
        </View>
      </Card>

      <SectionTitle>{stage.label}</SectionTitle>
      <Card tone="leafy">
        <BodyText>{stage.body}</BodyText>
      </Card>

      <Card>
        <DetailSection label="What to expect">
          <Bullets items={stage.expect} />
        </DetailSection>
        <DetailSection label="What helps" style={{ marginBottom: 0 }}>
          <Bullets items={stage.doThis} />
        </DetailSection>
      </Card>

      {stage.flag ? (
        <Card tone="warn">
          <Eyebrow color="#8A6A3A">Worth paying attention to</Eyebrow>
          <BodyText>{stage.flag}</BodyText>
        </Card>
      ) : null}
    </>
  );
}

function NobodyTab() {
  return (
    <>
      <Card tone="flat">
        <Tiny>
          None of this is a complication. It is the ordinary version of recovery that somehow never gets
          said out loud, so people assume it is only happening to them.
        </Tiny>
      </Card>

      {NOBODY_WARNED_ME.map((e) => (
        <Card key={e.id} tone={e.sensitive ? 'warn' : 'default'}>
          <BodyText style={{ fontSize: 15.5, color: C.ink, fontWeight: '600' }}>{e.thing}</BodyText>
          <BodyText style={{ marginTop: 7 }}>{e.detail}</BodyText>
        </Card>
      ))}
    </>
  );
}

function MindTab() {
  const mh = PERINATAL_MENTAL_HEALTH;
  const lines = getMentalHealthLines();

  return (
    <>
      {/* Pinned. Not at the bottom, where nobody in distress will find it. */}
      <SectionTitle>If you need someone right now</SectionTitle>
      {lines.map((l) => (
        <SupportLine key={l.id} line={l} />
      ))}

      <Card tone="alert">
        <Eyebrow color="#A85A44">Go now, not at your next appointment</Eyebrow>
        <BodyText>{mh.getHelpNow}</BodyText>
      </Card>

      <SectionTitle>{mh.headline}</SectionTitle>
      <Card tone="leafy">
        <BodyText>{mh.intro}</BodyText>
      </Card>

      <Card>
        <DetailSection label="Baby blues">
          <BodyText>{mh.babyBluesVsMore.babyBlues}</BodyText>
        </DetailSection>
        <DetailSection label="Something more than that" style={{ marginBottom: 0 }}>
          <BodyText>{mh.babyBluesVsMore.somethingMore}</BodyText>
        </DetailSection>
      </Card>

      <SectionTitle>What it can look like</SectionTitle>
      <Card>
        <Bullets items={mh.whatItLooksLike} />
        <Callout>
          It does not always look like sadness. Rage, numbness and relentless anxiety are all forms of
          this, and they are the ones people miss in themselves.
        </Callout>
      </Card>

      <Card tone="flat">
        <DetailSection label="Partners get this too">
          <BodyText>{mh.partnersToo}</BodyText>
        </DetailSection>
        <DetailSection label="The reason people do not tell anyone" style={{ marginBottom: 0 }}>
          <BodyText>{mh.theThingPeopleFear}</BodyText>
        </DetailSection>
      </Card>

      <SectionTitle>What helps</SectionTitle>
      <Card>
        <Bullets items={mh.whatHelps} />
      </Card>
    </>
  );
}

function SuppliesTab() {
  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{RECOVERY_SUPPLIES.headline}</Eyebrow>
        <BodyText>{RECOVERY_SUPPLIES.intro}</BodyText>
      </Card>

      <Card>
        {RECOVERY_SUPPLIES.items.map((item, i) => (
          <View
            key={i}
            style={{
              paddingVertical: 11,
              borderTopWidth: i === 0 ? 0 : 1,
              borderTopColor: C.borderSoft,
            }}
          >
            <BodyText style={{ fontSize: 15, color: C.ink }}>{item.label}</BodyText>
            <Tiny style={{ marginTop: 3 }}>{item.why}</Tiny>
          </View>
        ))}
      </Card>

      <SectionTitle>If you had a cesarean</SectionTitle>
      <Card tone="flat">
        <Bullets items={RECOVERY_SUPPLIES.forCesarean} />
      </Card>
    </>
  );
}

function HelpTab() {
  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{ASKING_FOR_HELP.headline}</Eyebrow>
        <BodyText>{ASKING_FOR_HELP.intro}</BodyText>
      </Card>

      <SectionTitle>Things to actually ask for</SectionTitle>
      <Card>
        <Bullets items={ASKING_FOR_HELP.specificAsks} />
      </Card>

      <SectionTitle>What you are allowed to say no to</SectionTitle>
      <Card>
        <Bullets items={ASKING_FOR_HELP.boundaries} />
      </Card>

      <SectionTitle>For partners</SectionTitle>
      <Card tone="flat">
        <Bullets items={ASKING_FOR_HELP.forPartners} />
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * SCREEN
 * ------------------------------------------------------------------ */

export default function PostpartumScreen({ route }) {
  const { summary } = useApp();
  const initialTab = route && route.params && route.params.tab ? route.params.tab : 'timeline';
  const [tab, setTab] = useState(TABS.some((t) => t.id === initialTab) ? initialTab : 'timeline');

  // Open on the week they are actually in, when we know it.
  // isUnborn lives on summary.age, not on summary. A pregnancy record has
  // no age object at all, so both guards are needed and neither is redundant.
  const days =
    summary && summary.age && !summary.age.isUnborn ? summary.age.totalDays : null;
  const currentStage = getStageForDaysPostpartum(days);

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        eyebrow="The fourth trimester"
        title="You, after"
        sub="Pregnancy gets forty weeks of attention. This gets one appointment. Here is the rest."
      />

      <Content>
        {currentStage ? (
          <Card tone="leafy">
            <Eyebrow color={C.primaryDeep}>Where you are</Eyebrow>
            <BodyText style={{ fontSize: 16.5, color: C.ink, fontWeight: '600', marginTop: 2 }}>
              {currentStage.label}
            </BodyText>
            <Tiny style={{ marginTop: 4 }}>{currentStage.window}</Tiny>
          </Card>
        ) : null}

        <ChipRow style={{ marginBottom: 4 }}>
          {TABS.map((t) => (
            <Chip key={t.id} label={t.label} active={tab === t.id} onPress={() => setTab(t.id)} />
          ))}
        </ChipRow>

        {tab === 'timeline' ? (
          <TimelineTab initialStageId={currentStage ? currentStage.id : null} />
        ) : null}
        {tab === 'nobody' ? <NobodyTab /> : null}
        {tab === 'mind' ? <MindTab /> : null}
        {tab === 'supplies' ? <SuppliesTab /> : null}
        {tab === 'help' ? <HelpTab /> : null}

        {/* Always reachable, from every tab. */}
        <SectionTitle>Support lines</SectionTitle>
        {MATERNAL_SUPPORT_LINES.map((l) => (
          <SupportLine key={l.id} line={l} />
        ))}

        <SectionTitle>Where this comes from</SectionTitle>
        <Card tone="flat">
          {POSTPARTUM_SOURCES.map((s, i) => (
            <View key={i} style={{ marginBottom: i === POSTPARTUM_SOURCES.length - 1 ? 0 : 10 }}>
              <BodyText style={{ fontSize: 14, color: C.ink }}>{s.org}</BodyText>
              <Tiny style={{ marginTop: 1 }}>{s.label}</Tiny>
              <Text
                style={{ marginTop: 2, fontSize: 12, color: C.primaryDeep }}
                onPress={() => Linking.openURL(s.url).catch(() => {})}
              >
                {s.url}
              </Text>
            </View>
          ))}
        </Card>

        <Disclaimer>
          Educational information, not medical advice. The urgent warning signs, including postpartum
          preeclampsia, hemorrhage and infection, are on the pregnancy screen and they apply for at least
          a year after birth. If something feels wrong, call. You are allowed to be the one who is worried.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
