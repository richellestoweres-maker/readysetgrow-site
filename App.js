/**
 * Ready Set Grow
 * ------------------------------------------------------------------
 * App entry point. Sets up state, safe areas, and navigation.
 *
 * HOW NAVIGATION IS ORGANIZED
 *
 *   No children yet  ->  Onboarding, and nothing else exists
 *   Otherwise        ->  Five tabs, with detail screens pushed on top
 *
 * The tabs are Right Now, Sleep, Home, Plan and Hub. That order is
 * deliberate: Right Now is first because the moment a parent most needs
 * this app is the moment they have the least patience for navigating it.
 *
 * Detail screens such as a situation, a care topic or an activity live in
 * the stack rather than in tabs, so backing out always returns a parent
 * to where they were.
 *
 * NOTE ON THE TAB SET
 * This matches the working prototype. Your two mockup sets used different
 * tabs (Home / Plan / Memories / Logs / Hub, and Home / Learn / Planner /
 * Community / More). That decision is still open, and changing it means
 * editing only the Tabs function below.
 */

import React, { useCallback, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Caveat_600SemiBold } from '@expo-google-fonts/caveat';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { AppProvider, useApp } from './src/context/AppContext';
import { theme } from './src/theme/theme';

import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import RightNowScreen from './src/screens/RightNowScreen';
import SituationScreen from './src/screens/SituationScreen';
import SleepScreen from './src/screens/SleepScreen';
import LogsScreen from './src/screens/LogsScreen';
import LogEntryScreen from './src/screens/LogEntryScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import PregnancyScreen from './src/screens/PregnancyScreen';
import PrepTopicScreen from './src/screens/PrepTopicScreen';
import PregnancyHealthScreen from './src/screens/PregnancyHealthScreen';
import HospitalBagScreen from './src/screens/HospitalBagScreen';
import PostpartumScreen from './src/screens/PostpartumScreen';
import PumpingScreen from './src/screens/PumpingScreen';
import PlanScreen from './src/screens/PlanScreen';
import HubScreen from './src/screens/HubScreen';
import TopicsScreen from './src/screens/TopicsScreen';
import TopicScreen from './src/screens/TopicScreen';
import ContentScreen from './src/screens/ContentScreen';
import MilestonesScreen from './src/screens/MilestonesScreen';
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const C = theme.colors;
const Stack = createNativeStackNavigator();

// Hold the splash screen until the fonts are ready, so the app never
// flashes system type and then reflows once Playfair arrives.
SplashScreen.preventAutoHideAsync().catch(() => {});
const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: C.cream,
    card: C.surface,
    text: C.ink,
    border: C.borderSoft,
    primary: C.primaryDeep,
  },
};

/**
 * Five tabs. Six is one too many for a bottom bar, so Plan lives behind
 * the Today's Focus card on Home, which is how the mockups already do it,
 * and the sleep rhythm lives inside Plan because it IS the day's plan.
 */
const TAB_ICONS = {
  Home: 'home',
  RightNow: 'heart',
  Logs: 'file-text',
  Community: 'users',
  Hub: 'compass',
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: C.primaryDeep,
        tabBarInactiveTintColor: C.muted,
        tabBarStyle: {
          backgroundColor: C.surface,
          borderTopColor: C.borderSoft,
          borderTopWidth: 1,
          height: 64,
          paddingTop: 7,
          paddingBottom: 9,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.fontFamily.bodySemi,
          fontSize: 10.5,
          letterSpacing: 0.2,
        },
        tabBarIcon: ({ color, size }) => (
          <Feather name={TAB_ICONS[route.name] || 'circle'} size={size - 2} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="RightNow" component={RightNowScreen} options={{ title: 'Right Now' }} />
      <Tab.Screen name="Logs" component={LogsScreen} options={{ title: 'Logs' }} />
      <Tab.Screen name="Community" component={CommunityScreen} options={{ title: 'Community' }} />
      <Tab.Screen name="Hub" component={HubScreen} options={{ title: 'Hub' }} />
    </Tab.Navigator>
  );
}

/** Shared look for every pushed detail screen. */
const detailOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: C.cream },
  headerShadowVisible: false,
  headerTintColor: C.primaryDeep,
  headerTitleStyle: { fontFamily: theme.typography.fontFamily.bodySemi, fontSize: 16, color: C.ink },
  headerBackTitle: 'Back',
};

function RootNavigator() {
  const { ready, children } = useApp();

  // Storage has not been read yet. Showing onboarding here would flash
  // the setup screen at a returning user for a fraction of a second.
  if (!ready) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={C.primary} size="large" />
      </View>
    );
  }

  const hasChild = children.length > 0;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: C.cream } }}>
      {!hasChild ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Pregnancy" component={PregnancyScreen} options={{ ...detailOptions, title: 'Getting ready' }} />
          <Stack.Screen name="PrepTopic" component={PrepTopicScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="PregnancyHealth" component={PregnancyHealthScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="HospitalBag" component={HospitalBagScreen} options={{ ...detailOptions, title: 'Hospital bag' }} />
          <Stack.Screen name="Postpartum" component={PostpartumScreen} options={{ ...detailOptions, title: 'The fourth trimester' }} />
          <Stack.Screen name="Pumping" component={PumpingScreen} options={{ ...detailOptions, title: 'Pumping' }} />
          <Stack.Screen name="Plan" component={PlanScreen} options={{ ...detailOptions, title: "Today's Plan" }} />
          <Stack.Screen name="Sleep" component={SleepScreen} options={{ ...detailOptions, title: "Today's Rhythm" }} />
          <Stack.Screen name="LogEntry" component={LogEntryScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="Situation" component={SituationScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="Content" component={ContentScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="Topics" component={TopicsScreen} options={{ ...detailOptions, title: 'Care Topics' }} />
          <Stack.Screen name="Topic" component={TopicScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="Milestones" component={MilestonesScreen} options={{ ...detailOptions, title: 'Milestones' }} />
          <Stack.Screen name="Activities" component={ActivitiesScreen} options={{ ...detailOptions, title: 'Activities' }} />
          <Stack.Screen name="Activity" component={ActivityScreen} options={{ ...detailOptions, title: '' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ ...detailOptions, title: 'Children and settings' }} />
          <Stack.Screen name="AddChild" component={OnboardingScreen} options={{ ...detailOptions, title: 'Add a child' }} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Caveat_600SemiBold,
  });

  // A font that fails to download must not leave a parent staring at a
  // splash screen forever. React Native falls back to the system face on
  // its own, so we carry on either way.
  const fontsReady = fontsLoaded || !!fontError;

  const onReady = useCallback(() => {
    if (fontsReady) SplashScreen.hideAsync().catch(() => {});
  }, [fontsReady]);

  useEffect(() => {
    if (fontsReady) SplashScreen.hideAsync().catch(() => {});
  }, [fontsReady]);

  if (!fontsReady) return null;

  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer theme={navTheme} onReady={onReady}>
          <StatusBar style="dark" />
          <RootNavigator />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: C.cream },
});
