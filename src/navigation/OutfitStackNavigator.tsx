import React from "react";
import { TouchableOpacity } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { OutfitFormScreen, OutfitScreen } from "../screens";
import { useAuth } from "../context/auth";

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
  const { logout } = useAuth();

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
        headerRight: () => (
          <TouchableOpacity onPress={logout}>
            <Icon name="logout" size={25} color={theme.colors.white} />
          </TouchableOpacity>
        ),
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
