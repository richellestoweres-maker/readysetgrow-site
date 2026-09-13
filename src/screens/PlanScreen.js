/**
 * Today's Plan
 *
 * A generated day: what to focus on, something to do, something to read,
 * and words to use. All of it derived from the child's age and lenses
 * rather than written per age.
 */

import React from 'react';
import { View } from 'react-native';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, ScriptCard, BodyText,
  Tiny, Eyebrow, Button, Disclaimer, Empty, LeafArt, Row, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getContentForChild, getScriptsForAge, CONTENT_DISCLAIMER } from '../data/developmentContent';
import { getActivitiesForChild } from '../data/activities';
import { buildDay, formatTime } from '../data/sleep';
import { buildRoutine } from '../data/routines';

function PlanItem({ eyebrow, title, body, action, onPress }) {
  return (
    <Card>
      <Eyebrow>{eyebrow}</Eyebrow>
      <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 15.5 }}>{title}</BodyText>
      {body ? <Tiny style={{ marginTop: 4 }}>{body}</Tiny> : null}
      {action ? (
        <View style={{ marginTop: 11, alignSelf: 'flex-start' }}>
          <Button title={action} variant="ghost" onPress={onPress} />
        </View>
      ) : null}
    </Card>
  );
}

export default function PlanScreen({ navigation }) {
  const { activeChild, summary, months, lensTags, lenses } = useApp();

  if (months == null) {
    return (
      <Screen>
        <Content><Empty title="Add a birthday first" body="The plan is built from your child's age." /></Content>
      </Screen>
    );
  }

  const content = getContentForChild(months, lenses);
  const activities = getActivitiesForChild(months, lensTags);
  const scripts = getScriptsForAge(months);

  const used = new Set();
  const pick = (test) => {
    const found = activities.find((a) => test(a) && !used.has(a.id));
    if (found) used.add(found.id);
    return found;
  };

  const morning = pick((a) => a.skills.includes('regulation') || a.skills.includes('socialEmotional')) || activities[0];
  const learning = pick((a) => a.skills.some((s) => ['cognitive', 'literacy', 'numeracy', 'language'].includes(s))) || activities[1];
  const move = pick((a) => a.skills.includes('grossMotor') || a.setting === 'outdoor') || activities[2];

  const readMinutes = months < 12 ? 5 : months < 36 ? 10 : months < 72 ? 15 : 20;
  const script = scripts.length ? scripts[Math.min(2, scripts.length - 1)] : null;

  const day = buildDay({
    months,
    wakeTime: activeChild ? activeChild.wakeTime : '06:30',
    naps: activeChild ? activeChild.napOverride : null,
  });
  const routine = day.ok
    ? buildRoutine({
        type: 'bedtime',
        months,
        endTime: formatTime(day.summary.bedtime),
        include: activeChild ? activeChild.routineInclude : [],
      })
    : { ok: false };

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader
        title="Today's Plan"
        sub={`${activeChild ? activeChild.name : 'Your child'}  ·  ${summary.label}`}
      />

      <Content>
        {content[0] ? (
          <Card tone="leafy">
            <Eyebrow>Today's development focus</Eyebrow>
            <BodyText style={{ color: C.ink, fontWeight: '600', fontSize: 16 }}>{content[0].title}</BodyText>
            <BodyText style={{ marginTop: 5 }}>{content[0].summary}</BodyText>
          </Card>
        ) : null}

        {morning ? (
          <PlanItem
            eyebrow="Morning activity"
            title={morning.title}
            body={morning.description}
            action="Let's do it"
            onPress={() => navigation.navigate('Activity', { id: morning.id })}
          />
        ) : null}

        {learning ? (
          <PlanItem
            eyebrow="Learning moment"
            title={learning.title}
            body={learning.description}
            action="Try this"
            onPress={() => navigation.navigate('Activity', { id: learning.id })}
          />
        ) : null}

        <PlanItem
          eyebrow="Reading time"
          title={`Read together for ${readMinutes} minutes`}
          body="Ask what they think happens next. Questions build more language than reading straight through does."
        />

        {move ? (
          <PlanItem
            eyebrow="Movement"
            title={move.title}
            body={move.description}
            action="Get moving"
            onPress={() => navigation.navigate('Activity', { id: move.id })}
          />
        ) : null}

        {script ? (
          <>
            <SectionTitle>Parent script</SectionTitle>
            <ScriptCard situation={script.situation} say={script.say} why={script.why} />
          </>
        ) : null}

        {routine.ok ? (
          <>
            <SectionTitle>Winding down</SectionTitle>
            <Card>
              <BodyText>
                Start the bedtime routine at{' '}
                <BodyText style={{ color: C.ink, fontWeight: '700' }}>{routine.startTime}</BodyText>{' '}
                to finish by {routine.endTime}.
              </BodyText>
              <View style={{ marginTop: 11, alignSelf: 'flex-start' }}>
                <Button title="See the whole day" variant="ghost" onPress={() => navigation.navigate('Sleep')} />
              </View>
            </Card>
          </>
        ) : null}

        <Disclaimer>{CONTENT_DISCLAIMER}</Disclaimer>
      </Content>
    </Screen>
  );
}
