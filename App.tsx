import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "@expo/vector-icons/Ionicons";
import { ThemeProvider } from "styled-components/native";

import StorybookUI from "./storybook";
import {
  OutfitScreen,
  GarmentScreen,
  GarmentFormScreen,
  OutfitFormScreen,
} from "./src/screens";
import light from "./src/themes/light";
import { useTheme } from "styled-components";

const OutfitStack = createNativeStackNavigator();

function OutfitStackScreen({ navigation, route }) {
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
      <OutfitStack.Screen name='Outfits' component={OutfitScreen} />
      <OutfitStack.Screen name='OutfitForm' component={OutfitFormScreen} />
    </OutfitStack.Navigator>
  );
}

const GarmentTab = createMaterialTopTabNavigator();

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
      <GarmentTab.Screen name='Outerwear' component={GarmentScreen} />
      <GarmentTab.Screen name='Tops' component={GarmentScreen} />
      <GarmentTab.Screen name='Bottoms' component={GarmentScreen} />
      <GarmentTab.Screen name='Shoes' component={GarmentScreen} />
    </GarmentTab.Navigator>
  );
}

const GarmentStack = createNativeStackNavigator();

function GarmentStackScreen({ navigation, route }) {
  const theme = useTheme();

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "GarmentForm") {
      navigation.setOptions({ barStyle: { display: "none" } });
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
        name='GarmentTab'
        component={GarmentTabScreen}
        options={{
          headerShadowVisible: false,
        }}
      />
      <GarmentStack.Screen name='GarmentForm' component={GarmentFormScreen} />
    </GarmentStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MainTabs() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Tab.Navigator
        barStyle={{
          backgroundColor: theme.colors.black,
        }}
        screenOptions={{
          tabBarColor: theme.colors.black,
        }}
      >
        <Tab.Screen
          name='Outfit'
          component={OutfitStackScreen}
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
        <Tab.Screen
          name='Garment'
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
