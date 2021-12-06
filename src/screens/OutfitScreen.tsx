import React from "react";
import { StyleSheet, View } from "react-native";

import {
  FloatingActionButton,
  OutfitList,
  OutfitListItemProps,
} from "../components";

const data: OutfitListItemProps[] = [
  { id: 1, dateLabel: "Weekday 00.00.0000" },
  { id: 2, dateLabel: "Weekday 00.00.0000" },
  { id: 3, dateLabel: "Weekday 00.00.0000" },
  { id: 4, dateLabel: "Weekday 00.00.0000" },
  { id: 5, dateLabel: "Weekday 00.00.0000" },
  { id: 6, dateLabel: "Weekday 00.00.0000" },
];

function OutfitScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <OutfitList data={data} />
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("OutfitForm")}
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

export default OutfitScreen;
