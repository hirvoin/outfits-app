import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  FloatingActionButton,
  GarmentList,
  GarmentListItemProps,
} from "../components";

const data: GarmentListItemProps[] = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
  { title: "Item 5" },
  { title: "Item 6" },
  { title: "Item 7" },
  { title: "Item 8" },
  { title: "Item 9" },
  { title: "Item 10" },
  { title: "Item 11" },
  { title: "Item 12" },
  { title: "Item 13" },
  { title: "Item 14" },
  { title: "Item 15" },
];

function GarmentScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <GarmentList title='List title' data={data} />
      <FloatingActionButton
        iconName='plus'
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
