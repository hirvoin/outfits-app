import React from "react";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  width: 100%;
  background: rgb(128, 128, 128);
  border-radius: 4px;
  display: flex;
`;

const Image = styled.Image`
  width: 150px;
  height: 100%;
  align-self: center;
`;

const InfoContainer = styled.View`
  margin-top: auto;
  height: 60px;
  width: 100%;
  background: #00000078;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

const StyledText = styled.Text`
  color: white;
  align-self: flex-end;
  font-size: 18px;
`;

const FavoriteIcon = styled(Icon)`
  font-size: 40px;
  color: white;
`;

const IconContainer = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 8px;
`;

export interface Props {
  id: number;
  title: string;
  onFavorite?: (id: number) => void;
  isFavorited?: boolean;
}

const GarmentListItem = ({ id, title, isFavorited, onFavorite }: Props) => {
  const iconName = isFavorited ? "heart" : "heart-outline";
  const exampleImage = require("../../../assets/coat.jpg");

  return (
    <Container>
      <Image source={exampleImage} />
      {onFavorite && (
        <IconContainer onPress={() => onFavorite(id)}>
          <FavoriteIcon name={iconName} />
        </IconContainer>
      )}
      <InfoContainer>
        <StyledText>{title}</StyledText>
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
