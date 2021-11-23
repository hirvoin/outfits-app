import React from "react";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  background: rgb(128, 128, 128);
  border-radius: 4px;
`;

const GarmentImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
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
  flex-direction: row;
`;

const StyledText = styled.Text`
  color: white;
  align-self: flex-end;
  font-size: 18px;
`;

const FavoriteIcon = styled(Icon)`
  font-size: 40px;
  color: ${(props) => props.theme.colors.background};
`;

const IconContainer = styled.TouchableOpacity`
  margin-left: auto;
  padding: 8px;
  align-self: center;
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
      <GarmentImage source={exampleImage} />
      <InfoContainer>
        <StyledText>{title}</StyledText>
        {onFavorite && (
          <IconContainer onPress={() => onFavorite(id)}>
            <FavoriteIcon name={iconName} />
          </IconContainer>
        )}
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
