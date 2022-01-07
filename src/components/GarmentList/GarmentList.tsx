import React from "react";
import { FlatList, FlatListProps } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem/GarmentListItem";

interface Props
  extends Pick<
    FlatListProps<GarmentListItemProps>,
    "data" | "refreshing" | "onRefresh"
  > {
  onFavorite: (id: GarmentListItemProps["id"]) => void;
  onPress: (id: GarmentListItemProps["id"]) => void;
}

const GarmentList = ({
  data,
  refreshing,
  onPress,
  onFavorite,
  onRefresh,
}: Props) => {
  const renderItem = ({ item }: { item: GarmentListItemProps }) => (
    <GarmentListItem {...item} onFavorite={onFavorite} onPress={onPress} />
  );

  const keyExtractor = ({ id }: GarmentListItemProps) => id;

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default GarmentList;
