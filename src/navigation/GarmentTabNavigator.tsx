import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "styled-components/native";

import { GarmentScreen } from "../screens";

type GarmentTabsParamList = {
  Outerwear: undefined;
  Tops: undefined;
  Bottoms: undefined;
  Shoes: undefined;
};

const GarmentTab = createMaterialTopTabNavigator<GarmentTabsParamList>();

const GarmentTabNavigator = () => {
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
};

export default GarmentTabNavigator;
