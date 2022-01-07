import React from "react";
import { FlatList, FlatListProps } from "react-native";

import OutfitListItem, {
  Props as OutfitListItemProps,
} from "../OutfitListItem/OutfitListItem";

export interface Props {
  data: FlatListProps<OutfitListItemProps>["data"];
}

const GarmentList = ({ data }: Props) => {
  const renderItem = ({ item }: { item: OutfitListItemProps }) => (
    <OutfitListItem {...item} />
  );

  const keyExtractor = ({ id }: OutfitListItemProps) => id;

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default GarmentList;
