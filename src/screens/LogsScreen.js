/**
 * Logs
 *
 * Quick log grid at the top, because the whole point is recording
 * something in three seconds while holding a baby.
 *
 * The medication card sits above everything else when a dose has been
 * given recently. Rotating two fever medicines at 3 AM is exactly where
 * double dosing happens, and the app knows the timing even when the
 * parent does not.
 *
 * Export is here rather than buried in settings, because the moment a
 * parent wants it is the moment they are looking at the logs.
 */

import React, { useMemo, useState } from 'react';
import { View, Pressable, Share, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Screen, Content, ScreenHeader, Card, SectionTitle, Button, Chip, ChipRow,
  BodyText, Tiny, Eyebrow, Tag, Disclaimer, Empty, Row, LeafArt, colors as C,
} from '../components/ui';
import { useApp } from '../context/AppContext';
import { getLogGroupsForAge, getLogType, summarizeLog, getMedInterval } from '../data/logTypes';
import { nextDoseDue, buildReport, buildSubject, filterRecent } from '../utils/exportLogs';

function timeOf(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if (h === 0) h = 12;
  return `${h}:${m} ${ap}`;
}

function dayOf(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const today = new Date();
  const isToday = d.toDateString() === today.toDateString();
  const y = new Date(today.getTime() - 86400000);
  const isYesterday = d.toDateString() === y.toDateString();
  if (isToday) return 'Today';
  if (isYesterday) return 'Yesterday';
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

export default function LogsScreen({ navigation }) {
  const { activeChild, months, logs, deleteLog } = useApp();
  const [filter, setFilter] = useState(null);

  const groups = months == null ? [] : getLogGroupsForAge(months);

  // Which medicines have been given in the last day, so the due card only
  // appears when it is actually relevant.
  const activeMeds = useMemo(() => {
    const recent = filterRecent(logs, 1);
    const names = [];
    recent.forEach((l) => {
      if (l.typeId !== 'medication') return;
      const n = ((l.values || {}).name || '').trim();
      if (n && !names.some((x) => x.toLowerCase() === n.toLowerCase())) names.push(n);
    });
    return names
      .map((n) => ({ name: n, due: nextDoseDue(logs, n) }))
      .filter((x) => x.due);
  }, [logs]);

  const shown = useMemo(() => {
    const sorted = [...logs].sort((a, b) => new Date(b.at) - new Date(a.at));
    return filter ? sorted.filter((l) => l.typeId === filter) : sorted;
  }, [logs, filter]);

  const byDay = useMemo(() => {
    const out = [];
    shown.slice(0, 60).forEach((l) => {
      const label = dayOf(l.at);
      const last = out[out.length - 1];
      if (last && last.label === label) last.items.push(l);
      else out.push({ label, items: [l] });
    });
    return out;
  }, [shown]);

  async function exportLogs() {
    if (!activeChild || logs.length === 0) {
      return Alert.alert('Nothing to export yet', 'Record a few things first and this will have something to send.');
    }
    try {
      await Share.share({
        title: buildSubject(activeChild, 14),
        message: buildReport(activeChild, logs, { days: 14 }),
      });
    } catch (e) {
      Alert.alert('Could not open sharing', 'Try again, or take a screenshot of this screen.');
    }
  }

  if (months == null || !activeChild) {
    return <Screen><Content><Empty title="Add a birthday first" body="Which logs appear depends on your child's age." /></Content></Screen>;
  }

  return (
    <Screen>
      <LeafArt />
      <ScreenHeader title="Logs" sub="Capture today. See their amazing tomorrow." />

      <Content>
        {activeMeds.length ? (
          <Card tone={activeMeds.some((m) => m.due.atOrOverCap) ? 'warn' : 'flat'}>
            <Eyebrow color={C.taupe}>Medication timing</Eyebrow>
            {activeMeds.map(({ name, due }) => (
              <View key={name} style={{ marginBottom: 10 }}>
                <Row style={{ justifyContent: 'space-between' }}>
                  <BodyText style={{ color: C.ink, fontWeight: '600' }}>{name}</BodyText>
                  <Tag
                    label={due.readyNow ? 'Due now' : `Next at ${due.dueLabel}`}
                    tone={due.readyNow ? 'leaf' : 'warm'}
                  />
                </Row>
                <Tiny style={{ marginTop: 3 }}>
                  Last given {due.lastLabel}. {due.dosesInLast24h} dose
                  {due.dosesInLast24h === 1 ? '' : 's'} in the last 24 hours
                  {due.interval.maxPer24h ? `, label limit is ${due.interval.maxPer24h}` : ''}.
                </Tiny>
                {due.atOrOverCap ? (
                  <Tiny style={{ marginTop: 4, color: '#A85A44' }}>
                    That is at or over the usual 24 hour limit. Call your pediatrician before giving more.
                  </Tiny>
                ) : null}
              </View>
            ))}
            <Tiny>
              Timing only. How much to give comes from your pediatrician or the label, never from this app.
            </Tiny>
          </Card>
        ) : null}

        <SectionTitle>Quick log</SectionTitle>
        {groups.map((g) => (
          <View key={g.id} style={{ marginBottom: 4 }}>
            <Eyebrow>{g.label}</Eyebrow>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 9, marginBottom: 13 }}>
              {g.items.map((t) => (
                <Pressable
                  key={t.id}
                  onPress={() => navigation.navigate('LogEntry', { typeId: t.id })}
                  accessibilityRole="button"
                  accessibilityLabel={`Log ${t.label}`}
                  style={({ pressed }) => [{
                    width: '31%', minHeight: 84, backgroundColor: C.surface, borderRadius: 16,
                    padding: 11, alignItems: 'center', justifyContent: 'center', gap: 7,
                  }, pressed && { opacity: 0.62 }]}
                >
                  <View style={{
                    width: 34, height: 34, borderRadius: 17, backgroundColor: C.leafWash,
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Feather name={t.icon} size={16} color={C.primaryDeep} />
                  </View>
                  <Tiny style={{ color: C.ink, fontWeight: '600', textAlign: 'center', fontSize: 11.5 }}>
                    {t.label}
                  </Tiny>
                </Pressable>
              ))}
            </View>
          </View>
        ))}

        {logs.length === 0 ? (
          <Empty
            title="Nothing logged yet"
            body="Tap anything above. Even a few days of feeds and diapers turns a vague worry into something a doctor can actually read."
          />
        ) : (
          <>
            <SectionTitle>Recent</SectionTitle>
            <ChipRow style={{ marginBottom: 12 }}>
              <Chip label="All" active={!filter} onPress={() => setFilter(null)} />
              {[...new Set(logs.map((l) => l.typeId))].slice(0, 6).map((id) => {
                const t = getLogType(id);
                return t ? (
                  <Chip key={id} label={t.label} active={filter === id} onPress={() => setFilter(filter === id ? null : id)} />
                ) : null;
              })}
            </ChipRow>

            {byDay.map((day) => (
              <View key={day.label}>
                <Eyebrow>{day.label}</Eyebrow>
                <Card style={{ paddingVertical: 4 }}>
                  {day.items.map((l, i) => {
                    const t = getLogType(l.typeId);
                    const note = (l.values || {}).notes || '';
                    return (
                      <Pressable
                        key={l.id}
                        onLongPress={() =>
                          Alert.alert('Delete this entry?', summarizeLog(l), [
                            { text: 'Cancel', style: 'cancel' },
                            { text: 'Delete', style: 'destructive', onPress: () => deleteLog(l.id) },
                          ])
                        }
                        accessibilityRole="button"
                        accessibilityLabel={`${t ? t.label : ''} ${summarizeLog(l)}. Long press to delete.`}
                        style={({ pressed }) => [{
                          flexDirection: 'row', alignItems: 'flex-start', gap: 11, paddingVertical: 11,
                          borderBottomWidth: i < day.items.length - 1 ? 1 : 0, borderBottomColor: C.borderSoft,
                        }, pressed && { opacity: 0.6 }]}
                      >
                        <View style={{
                          width: 32, height: 32, borderRadius: 16, backgroundColor: C.leafWash,
                          alignItems: 'center', justifyContent: 'center', marginTop: 1,
                        }}>
                          <Feather name={t ? t.icon : 'circle'} size={14} color={C.primaryDeep} />
                        </View>
                        <View style={{ flex: 1 }}>
                          <BodyText style={{ color: C.ink, fontWeight: '600' }}>
                            {t ? t.label : l.typeId}
                          </BodyText>
                          <Tiny style={{ marginTop: 1 }}>{summarizeLog(l)}</Tiny>
                          {note ? <Tiny style={{ marginTop: 2 }}>{note}</Tiny> : null}
                        </View>
                        <Tiny style={{ paddingTop: 2 }}>{timeOf(l.at)}</Tiny>
                      </Pressable>
                    );
                  })}
                </Card>
              </View>
            ))}

            <SectionTitle>For your pediatrician</SectionTitle>
            <Card tone="leafy">
              <BodyText>
                Send the last two weeks as a summary: how many feeds, wet and dirty diapers, sleep,
                symptoms and every medication time. Walking in with this changes the appointment.
              </BodyText>
              <View style={{ marginTop: 12 }}>
                <Button title="Export or email logs" icon="share" onPress={exportLogs} />
              </View>
              <Tiny style={{ marginTop: 9 }}>
                Opens your phone's share sheet, so you can email it, message it, or save it.
              </Tiny>
            </Card>
          </>
        )}

        <Disclaimer>
          These are your observations, not clinical measurements, and the export says so. Nothing here
          is uploaded anywhere. It stays on this phone until you choose to send it.
        </Disclaimer>
      </Content>
    </Screen>
  );
}
