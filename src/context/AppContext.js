/**
 * Ready Set Grow: App State
 * ------------------------------------------------------------------
 * One place that holds everything the app knows, and the only place that
 * writes to storage.
 *
 * WHY ONE CONTEXT
 * Every screen needs the active child, and almost every screen needs
 * that child's age, stage and lenses. Passing those down through
 * navigation props would mean touching every screen whenever anything
 * changes. This way a screen calls useApp() and has what it needs.
 *
 * THE MULTI CHILD RULE
 * Everything that belongs to a child lives INSIDE that child's object:
 * their lenses, their milestone statuses, their wake time, their
 * routine choices. Nothing about a child is stored at the top level.
 *
 * That is deliberate. The fastest way to ship a bug that shows one
 * child's milestone progress under their sibling's name is to keep a
 * shared map keyed by milestone id. Keeping it per child makes that
 * mistake structurally impossible rather than something to remember.
 */

import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAgeSummary } from '../utils/age';
import { getStage, getGrowthDetail } from '../data/stages';
import {
  getMergedStrategyTags,
  getMilestoneFlexMonths,
  getCorrectedAgeMonths,
} from '../data/supportLenses';

const STORAGE_KEY = 'readysetgrow:v1';

/* ------------------------------------------------------------------
 * SHAPE
 * ------------------------------------------------------------------ */

const emptyState = {
  ready: false,        // has storage been read yet
  parentName: '',
  children: [],
  activeChildId: null,
};

/** A new child record. Everything about them starts here. */
export function makeChild({ name, birthday, dueDate }) {
  return {
    id: `c${Date.now()}${Math.floor(Math.random() * 1000)}`,
    name: (name || '').trim(),
    birthday: birthday || null,
    dueDate: dueDate || null,
    lenses: [],
    // A single choice inside a lens, such as an autism support level,
    // keyed by lens id. Turning a lens off clears its entry.
    lensOptions: {},
    // A number a lens needs, such as weeksEarly for a baby born early.
    lensNumbers: {},
    milestoneStatuses: {},
    wakeTime: '06:30',
    napOverride: null,
    routineInclude: [],
    bagChecked: [],
    logs: [],
    createdAt: new Date().toISOString(),
  };
}

/* ------------------------------------------------------------------
 * REDUCER
 * ------------------------------------------------------------------ */

function reducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return { ...state, ...action.payload, ready: true };

    case 'ready':
      return { ...state, ready: true };

    case 'setParentName':
      return { ...state, parentName: action.name };

    case 'addChild': {
      const children = [...state.children, action.child];
      return { ...state, children, activeChildId: state.activeChildId || action.child.id };
    }

    case 'updateChild':
      return {
        ...state,
        children: state.children.map((c) =>
          c.id === action.id ? { ...c, ...action.patch } : c
        ),
      };

    case 'removeChild': {
      const children = state.children.filter((c) => c.id !== action.id);
      const activeChildId =
        state.activeChildId === action.id ? (children[0] ? children[0].id : null) : state.activeChildId;
      return { ...state, children, activeChildId };
    }

    case 'setActiveChild':
      return { ...state, activeChildId: action.id };

    case 'toggleLens':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          const has = c.lenses.includes(action.lensId);
          // Turning a lens off also drops anything stored inside it, so a
          // parent who turns autism off and back on later does not silently
          // inherit a support level they picked months ago.
          const nextOptions = { ...(c.lensOptions || {}) };
          const nextNumbers = { ...(c.lensNumbers || {}) };
          if (has) {
            delete nextOptions[action.lensId];
            delete nextNumbers[action.lensId];
          }
          return {
            ...c,
            lenses: has ? c.lenses.filter((l) => l !== action.lensId) : [...c.lenses, action.lensId],
            lensOptions: nextOptions,
            lensNumbers: nextNumbers,
          };
        }),
      };

    // A single choice inside a lens, such as an autism support level or an
    // ADHD presentation. Passing a null key clears the choice.
    case 'setLensOption':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          const next = { ...(c.lensOptions || {}) };
          if (action.choiceKey == null) delete next[action.lensId];
          else next[action.lensId] = action.choiceKey;
          return { ...c, lensOptions: next };
        }),
      };

    // A number a lens needs, currently only weeksEarly. Stored per lens so
    // a future lens can ask for its own number without a new reducer case.
    case 'setLensNumber':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          const next = { ...(c.lensNumbers || {}) };
          const raw = Number(action.value);
          if (action.value == null || action.value === '' || !isFinite(raw)) {
            delete next[action.lensId];
          } else {
            next[action.lensId] = { ...(next[action.lensId] || {}), [action.numberKey]: raw };
          }
          return { ...c, lensNumbers: next };
        }),
      };

    case 'setMilestoneStatus':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          const next = { ...c.milestoneStatuses };
          // Tapping the status a milestone already has clears it, so a
          // parent can undo a mistap without a separate control.
          if (next[action.milestoneId] === action.status) delete next[action.milestoneId];
          else next[action.milestoneId] = action.status;
          return { ...c, milestoneStatuses: next };
        }),
      };

    case 'addLog':
      return {
        ...state,
        children: state.children.map((c) =>
          c.id === action.id ? { ...c, logs: [action.log, ...(c.logs || [])] } : c
        ),
      };

    case 'updateLog':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          return {
            ...c,
            logs: (c.logs || []).map((l) => (l.id === action.logId ? { ...l, ...action.patch } : l)),
          };
        }),
      };

    case 'deleteLog':
      return {
        ...state,
        children: state.children.map((c) =>
          c.id === action.id ? { ...c, logs: (c.logs || []).filter((l) => l.id !== action.logId) } : c
        ),
      };

    case 'toggleRoutineStep':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          const has = c.routineInclude.includes(action.stepId);
          return {
            ...c,
            routineInclude: has
              ? c.routineInclude.filter((s) => s !== action.stepId)
              : [...c.routineInclude, action.stepId],
          };
        }),
      };

    /**
     * The hospital bag lives on the child record, not on the account,
     * for the same reason logs and milestones do. A second pregnancy
     * gets its own bag rather than inheriting a bag that was already
     * packed and unpacked two years ago.
     */
    case 'toggleBagItem':
      return {
        ...state,
        children: state.children.map((c) => {
          if (c.id !== action.id) return c;
          const list = Array.isArray(c.bagChecked) ? c.bagChecked : [];
          const has = list.includes(action.itemId);
          return {
            ...c,
            bagChecked: has
              ? list.filter((i) => i !== action.itemId)
              : [...list, action.itemId],
          };
        }),
      };

    case 'clearBag':
      return {
        ...state,
        children: state.children.map((c) =>
          c.id === action.id ? { ...c, bagChecked: [] } : c
        ),
      };

    case 'reset':
      return { ...emptyState, ready: true };

    default:
      return state;
  }
}

/* ------------------------------------------------------------------
 * PROVIDER
 * ------------------------------------------------------------------ */

const AppContext = createContext(null);

export function AppProvider({ children: reactChildren }) {
  const [state, dispatch] = useReducer(reducer, emptyState);

  // Read storage once on launch. A failure here must never block the app,
  // so a broken or missing record just starts the user at onboarding.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (cancelled) return;
        if (!raw) return dispatch({ type: 'ready' });
        const parsed = JSON.parse(raw);
        dispatch({
          type: 'hydrate',
          payload: {
            parentName: typeof parsed.parentName === 'string' ? parsed.parentName : '',
            children: Array.isArray(parsed.children) ? parsed.children.map(normalizeChild) : [],
            activeChildId: parsed.activeChildId || null,
          },
        });
      } catch (e) {
        if (!cancelled) dispatch({ type: 'ready' });
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Write on every change once hydrated. Failures are non fatal.
  useEffect(() => {
    if (!state.ready) return;
    const payload = JSON.stringify({
      parentName: state.parentName,
      children: state.children,
      activeChildId: state.activeChildId,
    });
    AsyncStorage.setItem(STORAGE_KEY, payload).catch(() => {});
  }, [state.ready, state.parentName, state.children, state.activeChildId]);

  const value = useMemo(() => {
    const activeChild =
      state.children.find((c) => c.id === state.activeChildId) || state.children[0] || null;

    const summary = getAgeSummary(activeChild);
    const months = summary.age ? summary.age.totalMonths : null;
    const lenses = activeChild ? activeChild.lenses : [];
    const lensOptions = activeChild && activeChild.lensOptions ? activeChild.lensOptions : {};
    const lensNumbers = activeChild && activeChild.lensNumbers ? activeChild.lensNumbers : {};

    return {
      ...state,
      activeChild,
      summary,
      months,
      stage: summary.stageId ? getStage(summary.stageId) : null,
      growth: summary.stageId ? getGrowthDetail(summary.stageId) : null,
      lenses,
      logs: activeChild ? (activeChild.logs || []) : [],
      lensTags: getMergedStrategyTags(lenses),
      milestoneFlex: getMilestoneFlexMonths(lenses),
      lensOptions,
      lensNumbers,
      // Corrected age for a baby born early, or null. Screens that show a
      // milestone window should prefer this number when it is present.
      correctedMonths: getCorrectedAgeMonths(months, lenses, lensNumbers.prematurity),

      // actions
      setParentName: (name) => dispatch({ type: 'setParentName', name }),
      addChild: (child) => dispatch({ type: 'addChild', child }),
      updateChild: (id, patch) => dispatch({ type: 'updateChild', id, patch }),
      removeChild: (id) => dispatch({ type: 'removeChild', id }),
      setActiveChild: (id) => dispatch({ type: 'setActiveChild', id }),
      toggleLens: (lensId) =>
        activeChild && dispatch({ type: 'toggleLens', id: activeChild.id, lensId }),
      setLensOption: (lensId, choiceKey) =>
        activeChild && dispatch({ type: 'setLensOption', id: activeChild.id, lensId, choiceKey }),
      setLensNumber: (lensId, numberKey, value) =>
        activeChild &&
        dispatch({ type: 'setLensNumber', id: activeChild.id, lensId, numberKey, value }),
      setMilestoneStatus: (milestoneId, status) =>
        activeChild && dispatch({ type: 'setMilestoneStatus', id: activeChild.id, milestoneId, status }),
      toggleRoutineStep: (stepId) =>
        activeChild && dispatch({ type: 'toggleRoutineStep', id: activeChild.id, stepId }),
      bagChecked: activeChild && Array.isArray(activeChild.bagChecked) ? activeChild.bagChecked : [],
      toggleBagItem: (itemId) =>
        activeChild && dispatch({ type: 'toggleBagItem', id: activeChild.id, itemId }),
      clearBag: () => activeChild && dispatch({ type: 'clearBag', id: activeChild.id }),
      setWakeTime: (wakeTime) =>
        activeChild && dispatch({ type: 'updateChild', id: activeChild.id, patch: { wakeTime } }),
      setNapOverride: (napOverride) =>
        activeChild && dispatch({ type: 'updateChild', id: activeChild.id, patch: { napOverride } }),

      // Logs belong to the child, never to the account. Passing the child id
      // on every action is what stops one child's logs appearing under a
      // sibling's name after a switch.
      addLog: (typeId, values, at) => {
        if (!activeChild) return null;
        const log = {
          id: `l${Date.now()}${Math.floor(Math.random() * 1000)}`,
          typeId,
          at: at || new Date().toISOString(),
          values: values || {},
        };
        dispatch({ type: 'addLog', id: activeChild.id, log });
        return log;
      },
      updateLog: (logId, patch) =>
        activeChild && dispatch({ type: 'updateLog', id: activeChild.id, logId, patch }),
      deleteLog: (logId) =>
        activeChild && dispatch({ type: 'deleteLog', id: activeChild.id, logId }),
      resetAll: () => dispatch({ type: 'reset' }),
    };
  }, [state]);

  return <AppContext.Provider value={value}>{reactChildren}</AppContext.Provider>;
}

/**
 * Fills in any field a stored child record is missing, so a record saved
 * by an older version of the app cannot crash a newer screen.
 */
function normalizeChild(c) {
  const base = makeChild({ name: '', birthday: null });
  return {
    ...base,
    ...c,
    lenses: Array.isArray(c.lenses) ? c.lenses : [],
    lensOptions: c.lensOptions && typeof c.lensOptions === 'object' ? c.lensOptions : {},
    lensNumbers: c.lensNumbers && typeof c.lensNumbers === 'object' ? c.lensNumbers : {},
    milestoneStatuses: c.milestoneStatuses && typeof c.milestoneStatuses === 'object' ? c.milestoneStatuses : {},
    logs: Array.isArray(c.logs) ? c.logs : [],
    routineInclude: Array.isArray(c.routineInclude) ? c.routineInclude : [],
    bagChecked: Array.isArray(c.bagChecked) ? c.bagChecked : [],
    wakeTime: typeof c.wakeTime === 'string' ? c.wakeTime : '06:30',
  };
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside an AppProvider');
  return ctx;
}

export default AppContext;
