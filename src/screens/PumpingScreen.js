/**
 * Pumping
 *
 * The deep end of feeding support, in one place.
 *
 * WHAT LEADS, AND WHY
 * Flange fitting is first, always, because it is the highest impact and
 * lowest cost fix available and almost nobody is told about it. A person
 * arriving here in distress about supply is more likely to be helped by
 * a tape measure than by anything else on this screen.
 *
 * THE CALCULATOR
 * A parent types their nipple measurement and gets a starting size. It is
 * framed as a starting point every time it renders, because fit is judged
 * by feel and by what the nipple looks like afterward, not by a number.
 *
 * THE LIPASE SECTION
 * This is the one people find after the damage is done, with a freezer
 * full of milk their baby will not drink. So the test is offered before
 * the fix, and the community tips are visibly labeled as community tips
 * rather than blended into the established guidance.
 *
 * WHAT THIS SCREEN NEVER DOES
 * It does not sell anything, it does not recommend supplements, and it
 * does not tell anyone whether to keep going.
 */

import React, { useState } from 'react';
import { View, TextInput, Text, Linking } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ListRow, BodyText,
  Tiny, Eyebrow, Bullets, Steps, Callout, Chip, ChipRow, Button, Tag,
  DetailSection, Disclaimer, LeafArt, Row, colors as C,
} from '../components/ui';
import {
  FLANGE_FITTING, PUMP_SETTINGS, INCREASING_OUTPUT, OUTPUT_EXPECTATIONS,
  MILK_STORAGE, HIGH_LIPASE, LACTATION_SUPPORT,
  getGoalsSorted, getTroubleshootingSorted, suggestFlangeSize,
  powerPumpTotalMinutes, getAllPumpingSources,
} from '../data/pumping';

const TABS = [
  { id: 'flange', label: 'Flange fit' },
  { id: 'schedule', label: 'Schedules' },
  { id: 'output', label: 'Output' },
  { id: 'storage', label: 'Storage' },
  { id: 'lipase', label: 'Soapy milk' },
  { id: 'trouble', label: 'Problems' },
  { id: 'help', label: 'Real help' },
];

/** Marks where guidance came from, so community tips never read as clinical. */
function EvidenceTag({ evidence }) {
  if (evidence === 'community') return <Tag label="Parent tip, not studied" tone="warm" />;
  if (evidence === 'established-practice') return <Tag label="Standard practice" tone="leaf" />;
  return null;
}

function SourceList({ sources }) {
  if (!sources || sources.length === 0) return null;
  return (
    <Card tone="flat">
      {sources.map((s, i) => (
        <View key={i} style={{ marginBottom: i === sources.length - 1 ? 0 : 10 }}>
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
  );
}

/* ------------------------------------------------------------------
 * FLANGE
 * ------------------------------------------------------------------ */

function FlangeTab() {
  const [mm, setMm] = useState('');
  const result = suggestFlangeSize(mm);

  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{FLANGE_FITTING.headline}</Eyebrow>
        <BodyText>{FLANGE_FITTING.whyItMatters}</BodyText>
      </Card>

      <SectionTitle>How to measure</SectionTitle>
      <Card>
        <Steps items={FLANGE_FITTING.howToMeasure} />
        <Callout>{FLANGE_FITTING.example}</Callout>
      </Card>

      <SectionTitle>Your size</SectionTitle>
      <Card>
        <Tiny>Nipple width in millimeters, measured at the base, stimulated, without the areola.</Tiny>
        <Row style={{ marginTop: 12, gap: 12 }}>
          <TextInput
            value={mm}
            onChangeText={setMm}
            keyboardType="number-pad"
            placeholder="17"
            placeholderTextColor={C.faint}
            accessibilityLabel="Nipple width in millimeters"
            style={{
              width: 90,
              minHeight: 48,
              borderWidth: 1.5,
              borderColor: C.border,
              borderRadius: 12,
              paddingHorizontal: 14,
              fontSize: 20,
              color: C.ink,
              backgroundColor: C.surface,
            }}
          />
          <Text style={{ fontSize: 16, color: C.faint }}>mm</Text>
        </Row>

        {result ? (
          <View style={{ marginTop: 16 }}>
            <BodyText style={{ fontSize: 18, color: C.primaryDeep, fontWeight: '600' }}>
              Try {result.low}mm to {result.high}mm
            </BodyText>
            {result.commonSizesInRange.length > 0 ? (
              <Tiny style={{ marginTop: 4 }}>
                Sizes commonly sold in that range: {result.commonSizesInRange.join('mm, ')}mm. Start with{' '}
                {result.startWith}mm.
              </Tiny>
            ) : (
              <Tiny style={{ marginTop: 4 }}>
                Nothing standard falls exactly in that range. A silicone insert can bring a larger flange
                down to where you need it.
              </Tiny>
            )}
            <Callout>{result.note}</Callout>
          </View>
        ) : null}
      </Card>

      <SectionTitle>How to tell if it fits</SectionTitle>
      <Card>
        <DetailSection label="A good fit looks like">
          <Bullets items={FLANGE_FITTING.goodFit} />
        </DetailSection>
        <DetailSection label="Too small">
          <Bullets items={FLANGE_FITTING.tooSmall} tone="warn" />
        </DetailSection>
        <DetailSection label="Too large" style={{ marginBottom: 0 }}>
          <Bullets items={FLANGE_FITTING.tooLarge} tone="warn" />
        </DetailSection>
      </Card>

      <Card tone="flat">
        <DetailSection label="Your size changes">
          <BodyText>{FLANGE_FITTING.keepChecking}</BodyText>
        </DetailSection>
        <DetailSection label="If you are between sizes">
          <BodyText>{FLANGE_FITTING.inserts}</BodyText>
        </DetailSection>
        <DetailSection label="When to ask" style={{ marginBottom: 0 }}>
          <BodyText>{FLANGE_FITTING.askForHelp}</BodyText>
        </DetailSection>
      </Card>

      <SectionTitle>{PUMP_SETTINGS.headline}</SectionTitle>
      <Card>
        <BodyText>{PUMP_SETTINGS.intro}</BodyText>
        <View style={{ marginTop: 14 }}>
          {PUMP_SETTINGS.modes.map((m, i) => (
            <DetailSection key={i} label={m.name} style={i === PUMP_SETTINGS.modes.length - 1 ? { marginBottom: 0 } : null}>
              <BodyText>{m.what}</BodyText>
              <Tiny style={{ marginTop: 5 }}>{m.how}</Tiny>
            </DetailSection>
          ))}
        </View>
        <Callout>{PUMP_SETTINGS.suctionRule}</Callout>
        <Tiny style={{ marginTop: 11 }}>{PUMP_SETTINGS.sessionLength}</Tiny>
      </Card>

      <Card tone="flat">
        <DetailSection label="What helps a letdown">
          <Bullets items={PUMP_SETTINGS.helpsLetdown} />
        </DetailSection>
        <DetailSection label="Keep the parts working" style={{ marginBottom: 0 }}>
          <Bullets items={PUMP_SETTINGS.maintenance} />
          <Callout>{PUMP_SETTINGS.suddenDrop}</Callout>
        </DetailSection>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * SCHEDULES
 * ------------------------------------------------------------------ */

function ScheduleTab() {
  const goals = getGoalsSorted();
  const [openId, setOpenId] = useState(goals[0].id);
  const goal = goals.find((g) => g.id === openId) || goals[0];

  return (
    <>
      <Card tone="flat">
        <Tiny>
          There is no single right pumping schedule. There is a schedule that matches what you are trying
          to do. Pick the one that describes you.
        </Tiny>
        <View style={{ marginTop: 12 }}>
          <ChipRow>
            {goals.map((g) => (
              <Chip key={g.id} label={g.label} active={openId === g.id} onPress={() => setOpenId(g.id)} />
            ))}
          </ChipRow>
        </View>
      </Card>

      <SectionTitle>{goal.label}</SectionTitle>
      <Card>
        <Tiny>{goal.who}</Tiny>
        <Callout>{goal.principle}</Callout>
        <View style={{ marginTop: 14 }}>
          <Bullets items={goal.guidance} />
        </View>
      </Card>

      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>A day that looks like this</Eyebrow>
        <View style={{ marginTop: 10 }}>
          {goal.sampleDay.map((slot, i) => (
            <Row
              key={i}
              align="flex-start"
              style={{
                paddingVertical: 9,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: C.borderSoft,
              }}
            >
              <Text style={{ width: 108, fontSize: 14, color: C.primaryDeep }}>{slot.time}</Text>
              <Text style={{ flex: 1, fontSize: 14, color: C.ink, lineHeight: 20 }}>
                {slot.note || 'Pump'}
              </Text>
            </Row>
          ))}
        </View>
      </Card>

      {goal.yourRights ? (
        <Card tone="warn">
          <Eyebrow color="#8A6A3A">Your rights at work</Eyebrow>
          <BodyText>{goal.yourRights}</BodyText>
        </Card>
      ) : null}

      <Card tone="flat">
        <BodyText style={{ fontStyle: 'italic' }}>{goal.reassurance}</BodyText>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * OUTPUT
 * ------------------------------------------------------------------ */

function OutputTab() {
  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{OUTPUT_EXPECTATIONS.headline}</Eyebrow>
        <BodyText>{OUTPUT_EXPECTATIONS.theNumber}</BodyText>
        <Callout>{OUTPUT_EXPECTATIONS.perSession}</Callout>
      </Card>

      <Card>
        <DetailSection label="Normal variation">
          <Bullets items={OUTPUT_EXPECTATIONS.variation} />
        </DetailSection>
        <DetailSection label="The trap">
          <BodyText>{OUTPUT_EXPECTATIONS.theTrap}</BodyText>
        </DetailSection>
        <DetailSection label="About comparing" style={{ marginBottom: 0 }}>
          <BodyText>{OUTPUT_EXPECTATIONS.comparison}</BodyText>
        </DetailSection>
      </Card>

      <SectionTitle>If you want more milk</SectionTitle>
      <Card tone="warn">
        <Eyebrow color="#8A6A3A">Check the equipment first</Eyebrow>
        <BodyText>{INCREASING_OUTPUT.theFirstThing}</BodyText>
      </Card>

      <Card>
        <BodyText>{INCREASING_OUTPUT.howSupplyWorks}</BodyText>
      </Card>

      {INCREASING_OUTPUT.levers.map((lever, i) => (
        <Card key={i} tone="flat">
          <Row align="flex-start">
            <BodyText style={{ flex: 1, fontSize: 15.5, color: C.ink, fontWeight: '600' }}>
              {lever.name}
            </BodyText>
            <EvidenceTag evidence={lever.evidence} />
          </Row>
          <BodyText style={{ marginTop: 6 }}>{lever.detail}</BodyText>
        </Card>
      ))}

      <SectionTitle>Power pumping, one hour</SectionTitle>
      <Card tone="leafy">
        <View>
          {INCREASING_OUTPUT.powerPumpingSchedule.map((block, i) => (
            <Row
              key={i}
              style={{
                paddingVertical: 10,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: C.borderSoft,
              }}
            >
              <Text style={{ width: 108, fontSize: 15, color: C.primaryDeep }}>
                {block.minutes} minutes
              </Text>
              <Text style={{ flex: 1, fontSize: 15, color: C.ink }}>{block.action}</Text>
            </Row>
          ))}
        </View>
        <Callout>
          {powerPumpTotalMinutes()} minutes total, once a day, at the same time. Give it 3 to 7 days
          before you judge whether it is working.
        </Callout>
      </Card>

      <Card tone="flat">
        <DetailSection label="About supply supplements">
          <BodyText>{INCREASING_OUTPUT.aboutSupplements}</BodyText>
        </DetailSection>
        <DetailSection label="When to get a real evaluation" style={{ marginBottom: 0 }}>
          <Bullets items={INCREASING_OUTPUT.whenToGetHelp} tone="warn" />
        </DetailSection>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * STORAGE
 * ------------------------------------------------------------------ */

function StorageTab() {
  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{MILK_STORAGE.headline}</Eyebrow>
        <Tiny>{MILK_STORAGE.note}</Tiny>
      </Card>

      {MILK_STORAGE.table.map((row) => (
        <Card key={row.id}>
          <Row>
            <BodyText style={{ flex: 1, fontSize: 16.5, color: C.ink, fontWeight: '600' }}>
              {row.place}
            </BodyText>
            <Tiny>{row.temp}</Tiny>
          </Row>
          <View style={{ marginTop: 12 }}>
            <Row align="flex-start" style={{ paddingVertical: 6 }}>
              <Text style={{ width: 118, fontSize: 13.5, color: C.faint }}>Fresh milk</Text>
              <Text style={{ flex: 1, fontSize: 15, color: C.primaryDeep }}>{row.freshLimit}</Text>
            </Row>
            <Row align="flex-start" style={{ paddingVertical: 6, borderTopWidth: 1, borderTopColor: C.borderSoft }}>
              <Text style={{ width: 118, fontSize: 13.5, color: C.faint }}>Once thawed</Text>
              <Text style={{ flex: 1, fontSize: 15, color: C.ink }}>{row.thawedLimit}</Text>
            </Row>
          </View>
          <Tiny style={{ marginTop: 10 }}>{row.note}</Tiny>
        </Card>
      ))}

      <Card tone="warn">
        <Eyebrow color="#8A6A3A">Milk your baby already drank from</Eyebrow>
        <BodyText>{MILK_STORAGE.leftovers}</BodyText>
      </Card>

      <SectionTitle>Building and rotating a stash</SectionTitle>
      <Card>
        <Bullets items={MILK_STORAGE.rules} />
      </Card>

      <SectionTitle>Thawing and warming</SectionTitle>
      <Card>
        <Bullets items={MILK_STORAGE.thawing} />
      </Card>

      <Card tone="flat">
        <DetailSection label="If the power goes out" style={{ marginBottom: 0 }}>
          <BodyText>{MILK_STORAGE.powerOutage}</BodyText>
        </DetailSection>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * HIGH LIPASE
 * ------------------------------------------------------------------ */

function LipaseTab() {
  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{HIGH_LIPASE.headline}</Eyebrow>
        <BodyText>{HIGH_LIPASE.whatIsHappening}</BodyText>
      </Card>

      <Card tone="flat">
        <BodyText>{HIGH_LIPASE.whyItHurts}</BodyText>
      </Card>

      <SectionTitle>Test before you build a stash</SectionTitle>
      <Card>
        <Steps items={HIGH_LIPASE.testFirst} />
      </Card>

      <SectionTitle>{HIGH_LIPASE.theFix.name}</SectionTitle>
      <Card>
        <Row align="flex-start">
          <BodyText style={{ flex: 1 }}>{HIGH_LIPASE.theFix.what}</BodyText>
        </Row>
        <View style={{ marginTop: 14 }}>
          <Steps items={HIGH_LIPASE.theFix.steps} />
        </View>
        <Callout>{HIGH_LIPASE.theFix.cost}</Callout>
        <Tiny style={{ marginTop: 11 }}>{HIGH_LIPASE.theFix.tip}</Tiny>
      </Card>

      <SectionTitle>Other things parents try</SectionTitle>
      {HIGH_LIPASE.alternatives.map((alt, i) => (
        <Card key={i} tone={alt.evidence === 'community' ? 'flat' : 'default'}>
          <Row align="flex-start">
            <BodyText style={{ flex: 1, fontSize: 15.5, color: C.ink, fontWeight: '600' }}>
              {alt.name}
            </BodyText>
            <EvidenceTag evidence={alt.evidence} />
          </Row>
          <BodyText style={{ marginTop: 6 }}>{alt.detail}</BodyText>
          {alt.caution ? <Callout>{alt.caution}</Callout> : null}
        </Card>
      ))}

      <Card tone="warn">
        <Eyebrow color="#8A6A3A">Before you pour any of it out</Eyebrow>
        <BodyText>{HIGH_LIPASE.notThis}</BodyText>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * TROUBLESHOOTING
 * ------------------------------------------------------------------ */

function TroubleTab() {
  const list = getTroubleshootingSorted();
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <Card tone="flat">
        <Tiny>Pick what is happening. Almost all of these start with checking the equipment.</Tiny>
      </Card>

      {list.map((t) => {
        const open = openId === t.id;
        return (
          <View key={t.id}>
            <ListRow
              icon={open ? 'chevron-down' : 'help-circle'}
              title={t.problem}
              align="flex-start"
              onPress={() => setOpenId(open ? null : t.id)}
            />
            {open ? (
              <Card>
                <DetailSection label="Check these first">
                  <Bullets items={t.firstChecks} />
                </DetailSection>
                <DetailSection label="Then what" style={t.seeSomeone ? null : { marginBottom: 0 }}>
                  <BodyText>{t.thenWhat}</BodyText>
                </DetailSection>
                {t.seeSomeone ? <Callout>{t.seeSomeone}</Callout> : null}
              </Card>
            ) : null}
          </View>
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------
 * SUPPORT
 * ------------------------------------------------------------------ */

function HelpTab() {
  return (
    <>
      <Card tone="leafy">
        <Eyebrow color={C.primaryDeep}>{LACTATION_SUPPORT.headline}</Eyebrow>
        <BodyText>{LACTATION_SUPPORT.insurance}</BodyText>
      </Card>

      <SectionTitle>Who is who</SectionTitle>
      {LACTATION_SUPPORT.whoIsWho.map((p, i) => (
        <Card key={i}>
          <BodyText style={{ fontSize: 16, color: C.ink, fontWeight: '600' }}>{p.credential}</BodyText>
          <Tiny style={{ marginTop: 2 }}>{p.full}</Tiny>
          <BodyText style={{ marginTop: 9 }}>{p.what}</BodyText>
        </Card>
      ))}

      <SectionTitle>How to actually get seen</SectionTitle>
      <Card>
        <Bullets items={LACTATION_SUPPORT.howToAsk} />
      </Card>

      <SectionTitle>When to call</SectionTitle>
      <Card tone="warn">
        <Bullets items={LACTATION_SUPPORT.whenToCall} tone="warn" />
      </Card>

      <Card tone="flat">
        <BodyText style={{ fontStyle: 'italic' }}>{LACTATION_SUPPORT.theQuietPart}</BodyText>
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * SCREEN
 * ------------------------------------------------------------------ */

export default function PumpingScreen({ route }) {
  const initial = route && route.params && route.params.tab ? route.params.tab : 'flange';
  const [tab, setTab] = useState(TABS.some((t) => t.id === initial) ? initial : 'flange');

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        eyebrow="Feeding"
        title="Pumping"
        sub="Start with the flange. It is the fix nobody tells you about and it changes everything."
      />

      <Content>
        <ChipRow style={{ marginBottom: 4 }}>
          {TABS.map((t) => (
            <Chip key={t.id} label={t.label} active={tab === t.id} onPress={() => setTab(t.id)} />
          ))}
        </ChipRow>

        {tab === 'flange' ? <FlangeTab /> : null}
        {tab === 'schedule' ? <ScheduleTab /> : null}
        {tab === 'output' ? <OutputTab /> : null}
        {tab === 'storage' ? <StorageTab /> : null}
        {tab === 'lipase' ? <LipaseTab /> : null}
        {tab === 'trouble' ? <TroubleTab /> : null}
        {tab === 'help' ? <HelpTab /> : null}

        <SectionTitle>Where this comes from</SectionTitle>
        <SourceList sources={getAllPumpingSources()} />

        <Disclaimer>
          Educational information, not medical advice. Pumping problems are worth a real evaluation, and
          an IBCLC can usually solve in one visit what people spend weeks struggling with alone. If
          feeding hurts, or your baby is not gaining, call rather than researching.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
