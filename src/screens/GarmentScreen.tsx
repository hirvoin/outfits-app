import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import useQuery from "../hooks/useQuery";
import { Garment } from "../services/garments";
import {
  FloatingActionButton,
  GarmentList,
  GarmentListItemProps,
  ScreenContainer,
} from "../components";
import { GarmentStackParamList } from "../navigation";

type Props = NativeStackScreenProps<GarmentStackParamList, "GarmentTab">;

const GARMENTS_QUERY = `query Garments($category: String) {
  garments(category:$category) {
    id,
    title,
    category,
    imageUri 
  }
}
`;

function GarmentScreen({ navigation, route }: Props) {
  const [garments, setGarments] = useState<Garment[]>([]);
  const theme = useTheme();
  const category = route.name.toLowerCase();
  const { loading, data } = useQuery(GARMENTS_QUERY, {
    category,
  });

  useEffect(() => {
    setGarments(data.garments);
    return () => setGarments([]);
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
    <ScreenContainer>
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
    </ScreenContainer>
  );
}

export default GarmentScreen;
