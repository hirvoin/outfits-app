import React from "react";
import styled from "styled-components/native";
import { FlatListProps, FlatList } from "react-native";

import OutfitListItem, {
  Props as OutfitListItemProps,
} from "../OutfitListItem";

const Container = styled.View`
  width: 100%;
  display: flex;
  padding: 16px 8px;
`;

const ItemContainer = styled.View`
  margin: 8px 0px;
`;

export interface Props {
  data: FlatListProps<OutfitListItemProps>["data"];
}

const GarmentList = ({ data }: Props) => {
  const renderItem = ({
    item,
  }: {
    item: OutfitListItemProps;
    index: number;
  }) => {
    return (
      <ItemContainer>
        <OutfitListItem {...item} />
      </ItemContainer>
    );
  };

  const keyExtractor = (item: OutfitListItemProps) => item.id.toString();

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default GarmentList;
