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

import { OutfitScreen, GarmentScreen, GarmentFormScreen } from "./src/screens";

import StorybookUI from "./storybook";

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

const SettingsStack = createNativeStackNavigator();

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
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='GarmentTab'
        component={GarmentTabScreen}
        options={{ headerShadowVisible: false, lazy: true }}
      />
      <SettingsStack.Screen name='GarmentForm' component={GarmentFormScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Tab.Navigator>
        <Tab.Screen
          name='Outfit'
          component={OutfitScreen}
          options={{
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
  );
}

export default false ? StorybookUI : App;
