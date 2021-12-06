import React from "react";
import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem/GarmentListItem";

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
  onItemPress: (id: GarmentListItemProps["id"]) => void;
}

const GarmentFormList = ({
  title = "List title",
  data,
  onItemPress,
}: Props) => {
  const renderItem = ({ item }: { item: GarmentListItemProps }) => (
    <ItemContainer>
      <GarmentListItem {...item} onPress={onItemPress} />
    </ItemContainer>
  );

  const keyExtractor = (item, index) => item.title.toString();

  return (
    <Container>
      <StyledText>{title}</StyledText>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default GarmentFormList;
