import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import HomeTabNavigator from "./HomeTabNavigator";
import { LoginScreen } from "../screens";
import { useAuth } from "../context/auth";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {token === "" ? (
          <RootStack.Screen name="Login" component={LoginScreen} />
        ) : (
          <RootStack.Screen name="Home" component={HomeTabNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
