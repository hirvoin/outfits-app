import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import GarmentTabNavigator from "./GarmentTabNavigator";
import { GarmentFormScreen } from "../screens";
import { useAuth } from "../context/auth";

export type GarmentStackParamList = {
  GarmentTab: undefined;
  GarmentForm: { category: string; garmentId?: number };
};

const GarmentStack = createNativeStackNavigator<GarmentStackParamList>();

const GarmentStackNavigator = ({
  navigation,
  route,
}: NativeStackScreenProps<GarmentStackParamList>) => {
  const theme = useTheme();
  const { logout } = useAuth();

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
          fontFamily: "Montserrat_600SemiBold",
        },
        headerTintColor: theme.colors.white,
        headerRight: () => (
          <TouchableOpacity onPress={logout}>
            <Icon name="logout" size={25} color={theme.colors.white} />
          </TouchableOpacity>
        ),
      }}
    >
      <GarmentStack.Screen
        name="GarmentTab"
        component={GarmentTabNavigator}
        options={{
          headerTitle: "Wardrobe",
          headerShadowVisible: false,
        }}
      />
      <GarmentStack.Screen
        name="GarmentForm"
        component={GarmentFormScreen}
        options={{
          headerTitle: "Add new garment",
        }}
      />
    </GarmentStack.Navigator>
  );
};

export default GarmentStackNavigator;
