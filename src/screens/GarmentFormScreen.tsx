import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function GarmentScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
      <Button
        title='Go to GarmentForm'
        onPress={() => navigation.navigate("GarmentForm")}
      />
    </View>
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

export default GarmentScreen;
