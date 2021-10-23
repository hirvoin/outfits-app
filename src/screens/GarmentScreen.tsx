import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import {
  FloatingActionButton,
  GarmentList,
  GarmentListItemProps,
} from "../components";

const garments = [
  { id: 0, title: "Item 1", isFavorited: false },
  { id: 1, title: "Item 2", isFavorited: false },
  { id: 2, title: "Item 3", isFavorited: true },
  { id: 3, title: "Item 4", isFavorited: false },
  { id: 4, title: "Item 5", isFavorited: false },
  { id: 5, title: "Item 6", isFavorited: false },
  { id: 6, title: "Item 7", isFavorited: false },
  { id: 7, title: "Item 8", isFavorited: false },
];

function GarmentScreen({ navigation, route }) {
  const [data, setData] = useState(garments);

  const toggleFavorite = (item: GarmentListItemProps["id"]) => {
    const toggledItem = data.find((i) => i.id === item);
    if (!toggledItem) return;
    const updatedData = data.filter((i) => i.id !== toggledItem.id);
    setData(
      [
        ...updatedData,
        { ...toggledItem, isFavorited: !toggledItem.isFavorited },
      ].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  return (
    <View style={styles.container}>
      <GarmentList data={data} onFavorite={toggleFavorite} />
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
