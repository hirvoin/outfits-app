import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Garment } from "../../services/garments";

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

export interface Props extends Garment {
  isSelected?: boolean;
  onFavorite?: (id: number) => void;
  onPress?: (id: number) => void;
}

const GarmentListItem = ({
  title,
  id,
  isFavorited,
  image,
  onFavorite,
  isSelected,
  onPress,
}: Props) => {
  const iconName = isFavorited ? "heart" : "heart-outline";

  const handleFavorite = () => onFavorite?.(id);
  const handlePress = () => onPress?.(id);

  return (
    <Container onPress={handlePress}>
      <GarmentImage source={{ uri: image }} />
      <InfoContainer>
        <StyledText>{title}</StyledText>
        {onFavorite && (
          <IconContainer onPress={handleFavorite}>
            <FavoriteIcon name={iconName} />
          </IconContainer>
        )}
        {onPress && (
          <IconContainer onPress={handlePress}>
            {isSelected && <FavoriteIcon name="check-circle-outline" />}
          </IconContainer>
        )}
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
