import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  ImageInput,
  NameInput,
  PickerInput,
  PickerItemProps,
  SubmitButton,
} from "../components";
import { GarmentStackParamList } from "../navigation";

type Props = NativeStackScreenProps<GarmentStackParamList, "GarmentForm">;

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
  { label: "Footwear", value: "footwear" },
];

function GarmentFormScreen({ navigation, route }: Props) {
  const [category, setCategory] = useState<PickerItemProps["value"]>();
  const [color, setColor] = useState<PickerItemProps["value"]>();

  useEffect(() => {
    setCategory(route.params.category.toLowerCase());
  }, [route.params.category]);

  const handleSubmit = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <NameInput placeholder="Garment name..." />
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
      </ScrollView>
      <SubmitButton label="Add garment" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,

    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default GarmentFormScreen;
