import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Garment } from "../../services/garments";
import Typography from "../Typography/Typography";

const Container = styled.TouchableOpacity<{ width: number }>`
  margin: 4px;
  height: 150px;
  width: ${(props) => `${props.width}px`};
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

const TitleContainer = styled.View`
  width: 75%;
  align-items: baseline;
`;

const Title = styled(Typography)`
  color: white;
  margin-top: auto;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const StyledIcon = styled(Icon)`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) => props.theme.colors.background};
`;

const IconContainer = styled.TouchableOpacity`
  margin-left: auto;
  align-self: center;
`;

const screen = Dimensions.get("screen");
const width = screen.width / 2 - 16;

export interface Props extends Garment {
  isSelected?: boolean;
  onFavorite?: (id: string) => void;
  onPress?: (id: string) => void;
}

const GarmentListItem = ({
  title,
  id,
  isFavorited,
  imageUri,
  onFavorite,
  isSelected,
  onPress,
}: Props) => {
  const iconName = isFavorited ? "heart" : "heart-outline";

  const handleFavorite = () => onFavorite?.(id);
  const handlePress = () => onPress?.(id);

  return (
    <Container onPress={handlePress} width={width}>
      <GarmentImage source={{ uri: imageUri }} />
      <InfoContainer>
        <TitleContainer>
          <Title fontWeight="medium">{title}</Title>
        </TitleContainer>
        {onFavorite && (
          <IconContainer onPress={handleFavorite}>
            <StyledIcon name={iconName} />
          </IconContainer>
        )}
        {onPress && (
          <IconContainer onPress={handlePress}>
            {isSelected && <StyledIcon name="check-circle-outline" />}
          </IconContainer>
        )}
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
