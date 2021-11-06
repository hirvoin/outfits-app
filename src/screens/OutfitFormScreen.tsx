import React from "react";
import { View, Text, StyleSheet } from "react-native";

function OutfitFormScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
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

export default OutfitFormScreen;
