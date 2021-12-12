import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components";

import garmentsService, { Garment } from "../services/garments";
import {
  FloatingActionButton,
  GarmentList,
  GarmentListItemProps,
} from "../components";

function GarmentScreen({ navigation, route }) {
  const [garments, setGarments] = useState<Garment[]>([]);
  const theme = useTheme();

  const getEndpoint = (routeName: string) => {
    switch (routeName) {
      case "Outerwear":
        return garmentsService.getOuterwear;
      case "Tops":
        return garmentsService.getTops;
      case "Bottoms":
        return garmentsService.getBottoms;
      case "Shoes":
        return garmentsService.getFootwear;
      default:
        return garmentsService.getOuterwear;
    }
  };

  useEffect(() => {
    const fetchGarments = async () => {
      const data = await getEndpoint(route.name)();
      setGarments(data);
    };
    fetchGarments();
  }, [route]);

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
      {garments.length < 1 && (
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
