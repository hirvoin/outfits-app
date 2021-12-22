import React, { useEffect, useState } from "react";
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
import fetchGraphQL from "../services/fetchGraphQL";

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
  const [loading, setLoading] = useState(false);
  const category = route.name.toLowerCase();
  const { loading: isFetching, data } = useQuery(GARMENTS_QUERY, {
    category,
  });

  const handleRefresh = async () => {
    setLoading(true);
    const response = await fetchGraphQL(GARMENTS_QUERY, {
      category,
    });
    setGarments(response?.data.garments);
    setLoading(false);
  };

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

  const openGarment = (id: Garment["id"]) => {
    navigation.navigate("GarmentForm", { category, garmentId: id });
  };

  return (
    <ScreenContainer>
      <GarmentList
        onPress={openGarment}
        data={garments}
        onFavorite={toggleFavorite}
        refreshing={loading || isFetching}
        onRefresh={handleRefresh}
      />
      <FloatingActionButton
        iconName="plus"
        label={`Add ${route.name.toLowerCase()}`}
        onPress={() =>
          navigation.navigate("GarmentForm", { category: route.name })
        }
      />
    </ScreenContainer>
  );
}

export default GarmentScreen;
