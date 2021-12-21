import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-root-toast";

import { useTheme } from "styled-components/native";
import {
  ImageInput,
  NameInput,
  PickerInput,
  PickerItemProps,
  SubmitButton,
} from "../components";
import { GarmentStackParamList } from "../navigation";
import fetchGraphQL from "../services/fetchGraphQL";

type Props = NativeStackScreenProps<GarmentStackParamList, "GarmentForm">;

const colorItems: PickerItemProps[] = [
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
  { label: "Grey", value: "grey" },
  { label: "Blue", value: "blue" },
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
];

const categories: PickerItemProps[] = [
  { label: "Outerwear", value: "outerwear" },
  { label: "Tops", value: "tops" },
  { label: "Bottoms", value: "bottoms" },
  { label: "Footwear", value: "footwear" },
];

const CREATE_GARMENT = `mutation CreateGarment($input: NewGarment!) {
  createGarment(input: $input){
    title,
    category,
    color,
		wearCount,
    isFavorite
    id,
    imageUri
  }
}`;

function GarmentFormScreen({ navigation, route }: Props) {
  const [category, setCategory] = useState<PickerItemProps["value"]>();
  const [color, setColor] = useState<PickerItemProps["value"]>("black");
  const [title, setTitle] = useState<string>();
  const [imageUri, setImage] = useState();

  const theme = useTheme();

  useEffect(() => {
    setCategory(route.params.category.toLowerCase());
  }, [route.params.category]);

  const handleSubmit = async () => {
    const queryVariables = {
      input: {
        userId: 1,
        title,
        category,
        imageUri,
        color,
      },
    };

    const response = await fetchGraphQL(CREATE_GARMENT, queryVariables);

    if (response.errors) {
      Toast.show("Something went wrong.", {
        backgroundColor: theme.colors.salmon,
      });
    } else {
      Toast.show("Garment succesfully added!", {
        backgroundColor: theme.colors.primary,
      });
    }

    navigation.goBack();
  };

  const handleTextInput = (value: string) => setTitle(value);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <NameInput
          value={title}
          onChangeText={handleTextInput}
          placeholder="Garment name..."
        />
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
