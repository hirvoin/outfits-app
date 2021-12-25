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
import { Garment } from "../services/garments";

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

const UPDATE_GARMENT = `mutation UpdateGarment($input: UpdatedGarment!) {
  updateGarment(input: $input){
    title,
    category,
    color,
		wearCount,
    isFavorite
    id,
    imageUri
  }
}`;

const GARMENT_QUERY = `query Garments($id: String) {
  garments(id:$id) {
    id,
    title,
    category,
    imageUri,
    color
  }
}`;

function GarmentFormScreen({ navigation, route }: Props) {
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<PickerItemProps["value"]>();
  const [color, setColor] = useState<PickerItemProps["value"]>("black");
  const [imageUri, setImage] = useState("");

  const theme = useTheme();

  useEffect(() => {
    setCategory(route.params.category.toLowerCase());
    if (route.params.garmentId) {
      const fetch = async () => {
        const queryVariables = {
          id: route.params.garmentId,
        };
        try {
          const result = await fetchGraphQL(GARMENT_QUERY, queryVariables);

          if (result.data?.garments.length !== 1) {
            Toast.show("Something went wrong.", {
              backgroundColor: theme.colors.salmon,
            });
            return;
          }

          const garment = result.data.garments[0] as Garment;
          setTitle(garment.title);
          setCategory(garment.category);
          setColor(garment.color);
          setImage(garment.imageUri);
        } catch (e) {
          Toast.show("Network error.", {
            backgroundColor: theme.colors.salmon,
          });
        }
      };
      fetch();
    }
  }, [route.params.category, route.params.garmentId, theme.colors.salmon]);

  const handleSubmit = async () => {
    const updateVariables = {
      input: {
        id: route.params.garmentId,
        title,
        category,
        imageUri,
        color,
      },
    };

    const createVariables = {
      input: {
        userId: 1,
        title,
        category,
        imageUri,
        color,
      },
    };
    const query = route.params.garmentId
      ? fetchGraphQL(UPDATE_GARMENT, updateVariables)
      : fetchGraphQL(CREATE_GARMENT, createVariables);
    const response = await query;

    if (response.errors) {
      Toast.show("Something went wrong.", {
        backgroundColor: theme.colors.salmon,
      });
    } else {
      const message = route.params.garmentId
        ? `Changes saved succesfully.`
        : `${title} was succesfully added to your wardrobe.`;

      Toast.show(message, {
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
      <SubmitButton label="Save garment" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: {
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default GarmentFormScreen;
