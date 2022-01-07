import React from "react";
import styled, { useTheme } from "styled-components/native";
import { ActivityIndicator, FlatList, FlatListProps } from "react-native";

import GarmentListItem, {
  Props as GarmentListItemProps,
} from "../GarmentListItem/GarmentListItem";
import Typography from "../Typography/Typography";

const Container = styled.View`
  width: 100%;
  padding: 16px 8px;
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.large};
  padding: 4px;
`;

interface Props {
  title: string;
  data: FlatListProps<GarmentListItemProps>["data"];
  onItemPress: (id: GarmentListItemProps["id"]) => void;
}

const GarmentFormList = ({ title, data = [], onItemPress }: Props) => {
  const theme = useTheme();
  const renderItem = ({ item }: { item: GarmentListItemProps }) => (
    <GarmentListItem {...item} onPress={onItemPress} />
  );

  const keyExtractor = (item: GarmentListItemProps) => item.title.toString();

  return (
    <Container>
      <Title fontWeight="medium">{title}</Title>
      {!data ||
        (data?.length < 1 && (
          <ActivityIndicator color={theme.colors.primary} size="large" />
        ))}
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
