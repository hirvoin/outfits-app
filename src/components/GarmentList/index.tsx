import React from "react";
import styled from "styled-components/native";
import { FlatListProps, Dimensions, FlatList } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem";

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
  width: ${(props) => props.width + "px"};
  margin-right: ${(props) => (props.isOdd ? "8px" : "0px")};
  margin-bottom: 8px;
`;

interface Props {
  title: string;
  data: FlatListProps<GarmentListItemProps>["data"];
}

const screen = Dimensions.get("screen");
const width = screen.width / 2 - 16;

const GarmentList = ({ title = "List title", data }: Props) => {
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
        <GarmentListItem key={index} {...item} />
      </ItemContainer>
    );
  };

  return (
    <Container>
      <FlatList data={data} numColumns={2} renderItem={renderItem} />
    </Container>
  );
};

export default GarmentList;