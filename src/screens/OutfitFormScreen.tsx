import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import {
  GarmentFormList,
  GarmentListItemProps,
  SubmitButton,
} from "../components";
import garmentService, { Garment } from "../services/garments";

type OutfitGarment = Garment & { isSelected?: boolean };

function OutfitFormScreen({ navigation, route }) {
  const [garments, setGarments] = useState<OutfitGarment[]>([]);

  useEffect(() => {
    const fetchGarments = async () => {
      const data = await garmentService.getAll();
      setGarments(data);
    };
    fetchGarments();
  }, [route]);

  const toggleFavorite = (item: GarmentListItemProps["id"]) => {
    const toggledItem = garments.find((i) => i.id === item);
    if (!toggledItem) return;

    const copy = [...garments];
    const itemIndex = copy.indexOf(toggledItem);
    const updatedItem = { ...toggledItem, isSelected: !toggledItem.isSelected };

    copy.splice(itemIndex, 1, updatedItem);
    setGarments(copy);
  };

  const handleSubmit = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <GarmentFormList
          title="Outerwear"
          data={garments.filter((g) => g.category === "outerwear")}
          onItemPress={toggleFavorite}
        />
        <GarmentFormList
          title="Tops"
          data={garments.filter((g) => g.category === "top")}
          onItemPress={toggleFavorite}
        />
        <GarmentFormList
          title="Bottoms"
          data={garments.filter((g) => g.category === "bottom")}
          onItemPress={toggleFavorite}
        />
        <GarmentFormList
          title="Shoes"
          data={garments.filter((g) => g.category === "footwear")}
          onItemPress={toggleFavorite}
        />
      </ScrollView>
      <SubmitButton label="Submit outfit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
});

export default OutfitFormScreen;
