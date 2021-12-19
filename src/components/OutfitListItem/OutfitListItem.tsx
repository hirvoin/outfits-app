import React from "react";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { GarmentListItemProps } from "..";
import Typography from "../Typography/Typography";

const Container = styled.TouchableOpacity`
  background: rgb(184, 184, 184);
  border-radius: 4px;
`;

const GarmentGrid = styled.View`
  margin: 8px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageContainer = styled.View`
  width: 160px;
  height: 140px;
  border-radius: 4px;
  margin: 4px;
`;

const GarmentImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const InfoContainer = styled.View`
  height: 50px;
  background: #0000005c;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 16px;
  /* justify-content: center; */
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled(Typography)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

const DateIcon = styled(Icon)`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.white};
  padding-right: 8px;
`;

type OutfitListGarment = Pick<GarmentListItemProps, "imageUri" | "id">;

export interface Props {
  date: string;
  garments: OutfitListGarment[];
}

const GarmentListItem = ({ date, garments }: Props) => {
  const renderGarmentImage = (g: OutfitListGarment) => {
    return (
      <ImageContainer key={g.id}>
        <GarmentImage source={{ uri: g.imageUri }} />
      </ImageContainer>
    );
  };

  return (
    <Container>
      <GarmentGrid>{garments.map(renderGarmentImage)}</GarmentGrid>
      <InfoContainer>
        <DateIcon name="calendar-clock" />
        <StyledText>{date}</StyledText>
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
