/**
 * Pregnancy Health detail
 *
 * One screen serving three shapes: an infection, the vaccine schedule,
 * and the medication guidance. They share a route because they share a
 * job, which is telling someone the thing they were never told.
 *
 * WHAT IS PINNED
 * A time critical window, when an entry has one, renders above everything
 * else. Congenital CMV has to be tested for within the first two to three
 * weeks of life or it can no longer be confirmed, and a parent who finds
 * that out on day 30 has lost something they cannot get back. That kind
 * of fact does not go in a paragraph halfway down.
 *
 * WHAT THIS SCREEN NEVER DOES
 * It does not prescribe, it does not dose, and it does not tell anyone
 * what to decide. Every entry ends in questions to bring to a provider,
 * because that is where a decision actually gets made.
 */

import React from 'react';
import { View, Text, Linking } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, BodyText, Tiny,
  Eyebrow, Bullets, Callout, ScriptCard, DetailSection, Disclaimer,
  LeafArt, Empty, Row, colors as C,
} from '../components/ui';
import {
  getInfection, PREGNANCY_VACCINES, SUPPLEMENTS_AND_MEDS,
} from '../data/pregnancyHealth';

function Sources({ sources }) {
  if (!sources || sources.length === 0) return null;
  return (
    <>
      <SectionTitle>Where this comes from</SectionTitle>
      <Card tone="flat">
        {sources.map((s, i) => (
          <View key={i} style={{ marginBottom: i === sources.length - 1 ? 0 : 10 }}>
            <BodyText style={{ fontSize: 14, color: C.ink }}>{s.org}</BodyText>
            <Tiny style={{ marginTop: 1 }}>{s.label}</Tiny>
            <Text
              style={{ marginTop: 2, fontSize: 12, color: C.primaryDeep }}
              accessibilityRole="link"
              onPress={() => Linking.openURL(s.url).catch(() => {})}
            >
              {s.url}
            </Text>
          </View>
        ))}
      </Card>
    </>
  );
}

function AskSection({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      <SectionTitle>Bring these to your appointment</SectionTitle>
      <Card>
        {items.map((q, i) => (
          <ScriptCard key={i} say={q} />
        ))}
      </Card>
    </>
  );
}

/* ------------------------------------------------------------------
 * INFECTION
 * ------------------------------------------------------------------ */

function InfectionView({ infection }) {
  return (
    <>
      <ScreenHeader eyebrow="Looking after yourself" title={infection.label} sub={infection.headline} />

      <Content>
        {/* A closing window goes first. It is the only thing that expires. */}
        {infection.timeCritical ? (
          <Card tone="alert">
            <Eyebrow color="#A85A44">This one has a deadline</Eyebrow>
            <BodyText>{infection.timeCritical}</BodyText>
          </Card>
        ) : null}

        <Card tone="leafy">
          <Eyebrow color={C.primaryDeep}>Why it matters</Eyebrow>
          <BodyText>{infection.whyItMatters}</BodyText>
        </Card>

        <Card>
          <DetailSection label="How it spreads">
            <Bullets items={infection.howYouGetIt} />
          </DetailSection>
          <DetailSection label="What lowers the risk" style={{ marginBottom: 0 }}>
            <Bullets items={infection.prevention} />
          </DetailSection>
        </Card>

        {infection.testing ? (
          <Card tone="flat">
            <DetailSection label="Testing" style={{ marginBottom: 0 }}>
              <BodyText>{infection.testing}</BodyText>
            </DetailSection>
          </Card>
        ) : null}

        {infection.treatment ? (
          <Card tone="flat">
            <DetailSection label="Treatment" style={{ marginBottom: 0 }}>
              <BodyText>{infection.treatment}</BodyText>
            </DetailSection>
          </Card>
        ) : null}

        <AskSection items={infection.askYourProvider} />
        <Sources sources={infection.sources} />

        <Disclaimer>
          Educational information, not medical advice. Testing and treatment decisions belong to an
          obstetric provider who knows your pregnancy and your history.
        </Disclaimer>
      </Content>
    </>
  );
}

/* ------------------------------------------------------------------
 * VACCINES
 * ------------------------------------------------------------------ */

function VaccineView() {
  const v = PREGNANCY_VACCINES;
  return (
    <>
      <ScreenHeader eyebrow="Looking after yourself" title={v.label} sub={v.headline} />

      <Content>
        <Card tone="leafy">
          <BodyText>{v.body}</BodyText>
        </Card>

        <SectionTitle>During pregnancy</SectionTitle>
        {v.during.map((item) => (
          <Card key={item.id}>
            <BodyText style={{ fontSize: 16, color: C.ink, fontWeight: '600' }}>{item.label}</BodyText>
            <Callout>{item.timing}</Callout>
            <BodyText style={{ marginTop: 11 }}>{item.why}</BodyText>
          </Card>
        ))}

        <SectionTitle>Before pregnancy, not during</SectionTitle>
        <Card tone="flat">
          {v.before.map((item, i) => (
            <View
              key={item.id}
              style={{
                paddingVertical: 11,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: C.borderSoft,
              }}
            >
              <BodyText style={{ fontSize: 15, color: C.ink }}>{item.label}</BodyText>
              <Tiny style={{ marginTop: 3 }}>{item.note}</Tiny>
            </View>
          ))}
        </Card>

        <Sources sources={v.sources} />

        <Disclaimer>
          Vaccine recommendations change, sometimes within a single pregnancy. Confirm what applies to
          you now with your obstetric provider rather than relying on any app, including this one.
        </Disclaimer>
      </Content>
    </>
  );
}

/* ------------------------------------------------------------------
 * MEDICATIONS
 * ------------------------------------------------------------------ */

function MedsView() {
  const m = SUPPLEMENTS_AND_MEDS;
  return (
    <>
      <ScreenHeader eyebrow="Looking after yourself" title={m.label} sub={m.headline} />

      <Content>
        {/* This leads because it is the mistake that does the most harm. */}
        <Card tone="alert">
          <Eyebrow color="#A85A44">{m.theBigOne.headline}</Eyebrow>
          <BodyText>{m.theBigOne.body}</BodyText>
        </Card>

        <SectionTitle>Commonly recommended</SectionTitle>
        <Card>
          {m.supplements.map((item, i) => (
            <View
              key={item.id}
              style={{
                paddingVertical: 12,
                borderTopWidth: i === 0 ? 0 : 1,
                borderTopColor: C.borderSoft,
              }}
            >
              <BodyText style={{ fontSize: 15, color: C.ink }}>{item.label}</BodyText>
              <Tiny style={{ marginTop: 3 }}>{item.note}</Tiny>
            </View>
          ))}
        </Card>

        <AskSection items={m.askYourProvider} />
        <Sources sources={m.sources} />

        <Disclaimer>
          Educational information, not medical advice. No app can tell you whether a specific medication
          is right for your pregnancy. Bring the actual bottles to an appointment.
        </Disclaimer>
      </Content>
    </>
  );
}

/* ------------------------------------------------------------------
 * SCREEN
 * ------------------------------------------------------------------ */

export default function PregnancyHealthScreen({ route }) {
  const id = route && route.params ? route.params.id : null;

  let body = null;
  if (id === 'vaccines') {
    body = <VaccineView />;
  } else if (id === 'meds') {
    body = <MedsView />;
  } else {
    const infection = getInfection(id);
    body = infection ? (
      <InfectionView infection={infection} />
    ) : (
      <Content>
        <Empty
          title="That topic is not here"
          body="Go back and pick from the list. If you got here from a link, the topic may have been renamed."
          growth={1}
        />
      </Content>
    );
  }

  return (
    <Screen>
      <LeafArt />
      {body}
    </Screen>
  );
}
