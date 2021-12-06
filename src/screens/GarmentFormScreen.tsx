import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import {
  ImageInput,
  NameInput,
  PickerInput,
  PickerItemProps,
} from "../components";

const colorItems: PickerItemProps[] = [
  { label: "Black", value: 1 },
  { label: "White", value: 2 },
  { label: "Grey", value: 3 },
  { label: "Blue", value: 4 },
  { label: "Red", value: 5 },
  { label: "Green", value: 6 },
  { label: "Yellow", value: 7 },
];

const categories: PickerItemProps[] = [
  { label: "Outerwear", value: "outerwear" },
  { label: "Tops", value: "tops" },
  { label: "Bottoms", value: "bottoms" },
  { label: "Shoes", value: "shoes" },
];

function GarmentFormScreen({ navigation, route }) {
  const [category, setCategory] = useState<PickerItemProps["value"]>();
  const [color, setColor] = useState<PickerItemProps["value"]>();

  useEffect(() => {
    setCategory(route.params.category.toLowerCase());
  }, [route.params.category]);

  return (
    <View style={styles.container}>
      <NameInput placeholder="Image name..." />
      <ImageInput />
      <PickerInput
        label="Category"
        items={categories}
        value={category}
        setValue={setCategory}
      />
      <PickerInput
        label="Color"
        items={colorItems}
        value={color}
        setValue={setColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default GarmentFormScreen;
