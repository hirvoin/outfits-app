import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import { OutfitFormScreen, OutfitScreen } from "../screens";

export type OutfitStackScreenParams = {
  OutfitTab: undefined;
  OutfitForm: undefined;
};

const OutfitStack = createNativeStackNavigator<OutfitStackScreenParams>();

const OutfitStackNavigator = ({
  navigation,
  route,
}: NativeStackScreenProps<OutfitStackScreenParams>) => {
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
          fontFamily: "Montserrat_600SemiBold",
        },
        headerTintColor: theme.colors.white,
      }}
    >
      <OutfitStack.Screen
        name="OutfitTab"
        component={OutfitScreen}
        options={{
          headerTitle: "Outfits",
        }}
      />
      <OutfitStack.Screen
        name="OutfitForm"
        component={OutfitFormScreen}
        options={{
          headerTitle: "Add new outfit",
        }}
      />
    </OutfitStack.Navigator>
  );
};

export default OutfitStackNavigator;
