import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Toast from "react-native-root-toast";

import { useTheme } from "styled-components/native";
import {
  GarmentFormList,
  GarmentListItemProps,
  SubmitButton,
} from "../components";
import { Garment } from "../services/garments";
import useQuery from "../hooks/useQuery";
import fetchGraphQL from "../services/fetchGraphQL";
import { OutfitStackScreenParams } from "../navigation";

type OutfitGarment = Garment & { isSelected?: boolean };

type Props = NativeStackScreenProps<OutfitStackScreenParams, "OutfitTab">;

const GARMENTS_QUERY = `query Garments($category: String) {
  garments(category:$category) {
    id,
    title,
    category,
    imageUri 
  }
}
`;

const CREATE_OUTFIT = `mutation CreateOutfit($input: NewOutfit!) {
  createOutfit(input: $input){
    id
		garments {
      id
      title
    }
  }
}
`;

function OutfitFormScreen({ navigation }: Props) {
  const [garments, setGarments] = useState<OutfitGarment[]>([]);
  const [selectedGarments, setSelectedGarments] = useState<
    OutfitGarment["id"][]
  >([]);
  const { data } = useQuery(GARMENTS_QUERY);
  const theme = useTheme();

  useEffect(() => {
    setGarments(data.garments);
    return () => setGarments([]);
  }, [data]);

  const selectItem = (item: GarmentListItemProps["id"]) => {
    const toggledItem = garments.find((i) => i.id === item);
    if (!toggledItem) return;

    if (toggledItem.isSelected) {
      setSelectedGarments(selectedGarments.filter((g) => g !== toggledItem.id));
    } else {
      setSelectedGarments([...selectedGarments, toggledItem.id]);
    }

    const copy = [...garments];
    const itemIndex = copy.indexOf(toggledItem);
    const updatedItem = { ...toggledItem, isSelected: !toggledItem.isSelected };

    copy.splice(itemIndex, 1, updatedItem);
    setGarments(copy);
  };

  const handleSubmit = async () => {
    const queryVariables = {
      input: {
        userId: 1,
        garments: selectedGarments,
      },
    };

    const response = await fetchGraphQL(CREATE_OUTFIT, queryVariables);

    if (response.errors) {
      Toast.show("Something went wrong.", {
        backgroundColor: theme.colors.salmon,
      });
    } else {
      Toast.show("Outfit succesfully added!", {
        backgroundColor: theme.colors.primary,
      });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <GarmentFormList
          title="Outerwear"
          data={garments?.filter((g) => g.category === "outerwear")}
          onItemPress={selectItem}
        />
        <GarmentFormList
          title="Tops"
          data={garments?.filter((g) => g.category === "tops")}
          onItemPress={selectItem}
        />
        <GarmentFormList
          title="Bottoms"
          data={garments?.filter((g) => g.category === "bottoms")}
          onItemPress={selectItem}
        />
        <GarmentFormList
          title="Footwear"
          data={garments?.filter((g) => g.category === "footwear")}
          onItemPress={selectItem}
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
});

export default OutfitFormScreen;
