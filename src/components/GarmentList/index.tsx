import React from "react";
import styled from "styled-components/native";
import { FlatListProps } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem";

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 8px;
`;

const List = styled.FlatList``;

const StyledText = styled.Text`
  color: black;
  font-size: 18px;
`;

interface Props {
  title: string;
  data: FlatListProps<GarmentListItemProps>["data"];
}

const GarmentList = ({ title = "List title", data }: Props) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: GarmentListItemProps;
    index: number;
  }) => <GarmentListItem key={index} {...item} />;

  return (
    <Container>
      <StyledText>{title}</StyledText>
      <List horizontal data={data} renderItem={renderItem} />
    </Container>
  );
};

export default GarmentList;
