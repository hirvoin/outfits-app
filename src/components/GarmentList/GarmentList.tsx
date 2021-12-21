import React from "react";
import styled from "styled-components/native";
import { Dimensions, FlatList, FlatListProps } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem/GarmentListItem";

const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 8px;
`;

interface ItemContainerProps {
  width: number;
  isOdd: boolean;
}

const ItemContainer = styled.View<ItemContainerProps>`
  width: ${(props) => `${props.width}px`};
  margin-right: ${(props) => (props.isOdd ? "8px" : "0px")};
  margin-bottom: 8px;
`;

interface Props
  extends Pick<
    FlatListProps<GarmentListItemProps>,
    "data" | "refreshing" | "onRefresh"
  > {
  onFavorite: (id: GarmentListItemProps["id"]) => void;
}

const screen = Dimensions.get("screen");
const width = screen.width / 2 - 16;

const GarmentList = ({ data, onFavorite, refreshing, onRefresh }: Props) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: GarmentListItemProps;
    index: number;
  }) => {
    const isOdd = index % 2 === 0;
    return (
      <ItemContainer isOdd={isOdd} width={width}>
        <GarmentListItem {...item} onFavorite={onFavorite} />
      </ItemContainer>
    );
  };

  const keyExtractor = (item: GarmentListItemProps) => item.title.toString();

  return (
    <Container>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </Container>
  );
};

export default GarmentList;
