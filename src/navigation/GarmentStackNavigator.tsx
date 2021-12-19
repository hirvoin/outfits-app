import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import GarmentTabNavigator from "./GarmentTabNavigator";
import { GarmentFormScreen } from "../screens";

export type GarmentStackParamList = {
  GarmentTab: undefined;
  GarmentForm: { category: string };
};

const GarmentStack = createNativeStackNavigator<GarmentStackParamList>();

const GarmentStackNavigator = ({
  navigation,
  route,
}: NativeStackScreenProps<GarmentStackParamList>) => {
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
        component={GarmentTabNavigator}
        options={{
          headerShadowVisible: false,
        }}
      />
      <GarmentStack.Screen name="GarmentForm" component={GarmentFormScreen} />
    </GarmentStack.Navigator>
  );
};

export default GarmentStackNavigator;
