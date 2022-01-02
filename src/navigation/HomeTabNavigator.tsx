import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import GarmentStackNavigator from "./GarmentStackNavigator";
import OutfitStackNavigator from "./OutfitStackNavigator";

type MainTabsParamList = {
  Outfit: undefined;
  Garment: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

const HomeTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.black,
        tabBarInactiveBackgroundColor: theme.colors.black,
        tabBarLabelStyle: {
          color: theme.colors.white,
          fontFamily: "Montserrat_500Medium",
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Outfit"
        component={OutfitStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "tshirt-crew" : "tshirt-crew-outline"}
              size={25}
              color={theme.colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Garment"
        component={GarmentStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "wardrobe" : "wardrobe-outline"}
              size={25}
              color={theme.colors.white}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
