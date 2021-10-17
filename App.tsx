import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "@expo/vector-icons/Ionicons";

import StorybookUI from "./storybook";

const GarmentTab = createMaterialTopTabNavigator();

function TopScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tops</Text>
      <Button
        title='Go to GarmentForm'
        onPress={() => navigation.navigate("GarmentForm")}
      />
    </View>
  );
}

function BottomScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bottoms</Text>
      <Button
        title='Go to GarmentForm'
        onPress={() => navigation.navigate("GarmentForm")}
      />
    </View>
  );
}

function OuterwearScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Outerwear</Text>
      <Button
        title='Go to GarmentForm'
        onPress={() => navigation.navigate("GarmentForm")}
      />
    </View>
  );
}

function ShoeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Shoes</Text>
      <Button
        title='Go to GarmentForm'
        onPress={() => navigation.navigate("GarmentForm")}
      />
    </View>
  );
}

function GarmentTabScreen() {
  return (
    <GarmentTab.Navigator>
      <GarmentTab.Screen name='Outwear' component={OuterwearScreen} />
      <GarmentTab.Screen name='Tops' component={TopScreen} />
      <GarmentTab.Screen name='Bottoms' component={BottomScreen} />
      <GarmentTab.Screen name='Shoes' component={ShoeScreen} />
    </GarmentTab.Navigator>
  );
}

function GarmentFormScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Garment Form</Text>
    </View>
  );
}

const SettingsStack = createNativeStackNavigator();

function GarmentStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='GarmentTab'
        component={GarmentTabScreen}
        options={{ headerShadowVisible: false }}
      />
      <SettingsStack.Screen name='GarmentForm' component={GarmentFormScreen} />
    </SettingsStack.Navigator>
  );
}

function OutfitScreen() {
  return (
    <View style={styles.container}>
      <Text>Outfits</Text>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default false ? StorybookUI : App;
