import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
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

const OutfitStack = createNativeStackNavigator();

function OutfitStackScreen({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "OutfitForm") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <OutfitStack.Navigator>
      <OutfitStack.Screen name='Outfits' component={OutfitScreen} />
      <OutfitStack.Screen name='OutfitForm' component={OutfitFormScreen} />
    </OutfitStack.Navigator>
  );
}

const GarmentTab = createMaterialTopTabNavigator();

function GarmentTabScreen() {
  return (
    <GarmentTab.Navigator>
      <GarmentTab.Screen name='Outerwear' component={GarmentScreen} />
      <GarmentTab.Screen name='Tops' component={GarmentScreen} />
      <GarmentTab.Screen name='Bottoms' component={GarmentScreen} />
      <GarmentTab.Screen name='Shoes' component={GarmentScreen} />
    </GarmentTab.Navigator>
  );
}

const GarmentStack = createNativeStackNavigator();

function GarmentStackScreen({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "GarmentForm") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <GarmentStack.Navigator>
      <GarmentStack.Screen
        name='GarmentTab'
        component={GarmentTabScreen}
        options={{ headerShadowVisible: false }}
      />
      <GarmentStack.Screen name='GarmentForm' component={GarmentFormScreen} />
    </GarmentStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar style='auto' />
        <Tab.Navigator>
          <Tab.Screen
            name='Outfit'
            component={OutfitStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Icon
                  name={focused ? "md-shirt" : "md-shirt-outline"}
                  size={25}
                  color='black'
                />
              ),
            }}
          />
          <Tab.Screen
            name='Garment'
            component={GarmentStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Icon
                  name={focused ? "md-shirt" : "md-shirt-outline"}
                  size={25}
                  color='black'
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
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
