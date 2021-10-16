import React from "react";
import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem";

const Container = styled.View`
  width: 100%;
  padding: 16px 8px;
`;

const ItemContainer = styled.View`
  width: 150px;
  margin-right: 8px;
`;

const StyledText = styled.Text`
  color: black;
  font-size: 22px;
`;

interface Props {
  title: string;
  data: FlatListProps<GarmentListItemProps>["data"];
}

const GarmentFormList = ({ title = "List title", data }: Props) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: GarmentListItemProps;
    index: number;
  }) => (
    <ItemContainer>
      <GarmentListItem key={index} {...item} />
    </ItemContainer>
  );

  return (
    <Container>
      <StyledText>{title}</StyledText>
      <FlatList horizontal data={data} renderItem={renderItem} />
    </Container>
  );
};

export default GarmentFormList;
