import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ThemeProvider } from "styled-components/native";
import Icon from "@expo/vector-icons/Ionicons";

import { useTheme } from "styled-components";
import StorybookUI from "./storybook";
import {
  GarmentFormScreen,
  GarmentScreen,
  OutfitFormScreen,
  OutfitScreen,
} from "./src/screens";
import light from "./src/themes/light";

type OutfitStackScreenParams = {
  OutfitTab: undefined;
  OutfitForm: undefined;
};

const OutfitStack = createNativeStackNavigator<OutfitStackScreenParams>();

function OutfitStackScreen({
  navigation,
  route,
}: NativeStackScreenProps<OutfitStackScreenParams>) {
  const theme = useTheme();

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "OutfitForm") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <OutfitStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.black,
        },
        headerTitleStyle: {
          color: theme.colors.white,
        },
        headerTintColor: theme.colors.white,
      }}
    >
      <OutfitStack.Screen name="OutfitTab" component={OutfitScreen} />
      <OutfitStack.Screen name="OutfitForm" component={OutfitFormScreen} />
    </OutfitStack.Navigator>
  );
}

type GarmentTabsParamList = {
  Outerwear: undefined;
  Tops: undefined;
  Bottoms: undefined;
  Shoes: undefined;
};

const GarmentTab = createMaterialTopTabNavigator<GarmentTabsParamList>();

function GarmentTabScreen() {
  const theme = useTheme();

  return (
    <GarmentTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.black,
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
        tabBarLabelStyle: {
          color: theme.colors.white,
        },
      }}
    >
      <GarmentTab.Screen name="Outerwear" component={GarmentScreen} />
      <GarmentTab.Screen name="Tops" component={GarmentScreen} />
      <GarmentTab.Screen name="Bottoms" component={GarmentScreen} />
      <GarmentTab.Screen name="Shoes" component={GarmentScreen} />
    </GarmentTab.Navigator>
  );
}

type GarmentStackParamList = {
  GarmentTab: undefined;
  GarmentForm: undefined;
};

const GarmentStack = createNativeStackNavigator<GarmentStackParamList>();

function GarmentStackScreen({
  navigation,
  route,
}: NativeStackScreenProps<GarmentStackParamList>) {
  const theme = useTheme();

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "GarmentForm") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <GarmentStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.black,
        },
        headerTitleStyle: {
          color: theme.colors.white,
        },
        headerTintColor: theme.colors.white,
      }}
    >
      <GarmentStack.Screen
        name="GarmentTab"
        component={GarmentTabScreen}
        options={{
          headerShadowVisible: false,
        }}
      />
      <GarmentStack.Screen name="GarmentForm" component={GarmentFormScreen} />
    </GarmentStack.Navigator>
  );
}

type MainTabsParamList = {
  Outfit: undefined;
  Garment: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

function MainTabs() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: "absolute" },
          tabBarActiveBackgroundColor: theme.colors.black,
          tabBarInactiveBackgroundColor: theme.colors.black,
          tabBarLabelStyle: { color: theme.colors.white },
        }}
      >
        <Tab.Screen
          name="Outfit"
          component={OutfitStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? "md-shirt" : "md-shirt-outline"}
                size={25}
                color={theme.colors.white}
              />
            ),
            // tabBarStyle: { height: 200 },
          }}
        />
        <Tab.Screen
          name="Garment"
          component={GarmentStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name={focused ? "md-shirt" : "md-shirt-outline"}
                size={25}
                color={theme.colors.white}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <ThemeProvider theme={light}>
      <MainTabs />
    </ThemeProvider>
  );
}

function Storybook() {
  return (
    <ThemeProvider theme={light}>
      <StorybookUI />
    </ThemeProvider>
  );
}

export default false ? Storybook : App;
