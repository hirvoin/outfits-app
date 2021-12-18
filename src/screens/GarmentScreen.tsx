import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";

import useQuery from "../hooks/useQuery";
import { Garment } from "../services/garments";
import {
  FloatingActionButton,
  GarmentList,
  GarmentListItemProps,
} from "../components";

enum Category {
  Tops = "tops",
  Outerwear = "outerwear",
  Footwear = "footwear",
  Bottoms = "bottoms",
}

const GARMENTS_QUERY = `query Garments($category: String) {
  garments(category:$category) {
    id,
    title,
    category,
    imageUri 
  }
}
`;

function GarmentScreen({ navigation, route }) {
  const [garments, setGarments] = useState<Garment[]>([]);
  const theme = useTheme();
  const category =
    route.name === "Shoes" ? "footwear" : route.name.toLowerCase();
  const { loading, data } = useQuery(GARMENTS_QUERY, {
    category,
  });

  useEffect(() => {
    setGarments(data.garments);
  }, [data]);

  const toggleFavorite = (item: GarmentListItemProps["id"]) => {
    const toggledItem = garments.find((i) => i.id === item);
    if (!toggledItem) return;

    const copy = [...garments];
    const itemIndex = copy.indexOf(toggledItem);
    const updatedItem = {
      ...toggledItem,
      isFavorited: !toggledItem.isFavorited,
    };

    copy.splice(itemIndex, 1, updatedItem);
    setGarments(copy);
  };

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      )}
      <GarmentList data={garments} onFavorite={toggleFavorite} />
      <FloatingActionButton
        iconName="plus"
        onPress={() =>
          navigation.navigate("GarmentForm", { category: route.name })
        }
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
