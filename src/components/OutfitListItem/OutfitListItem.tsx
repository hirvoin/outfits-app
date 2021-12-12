import React from "react";
import styled from "styled-components/native";

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
  width: 100%;
  background: #0000005c;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 16px;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

export interface Props {
  id: number;
  dateLabel: string;
}

const GarmentListItem = ({ id, dateLabel }: Props) => {
  const imageUri = "../../../assets/coat.jpg";

  const garments = [imageUri, imageUri, imageUri, imageUri];

  const renderGarmentImage = (g: string, i: number) => (
    <ImageContainer key={i}>
      <GarmentImage source={require(imageUri)} />
    </ImageContainer>
  );

  return (
    <Container>
      <GarmentGrid>{garments.map(renderGarmentImage)}</GarmentGrid>
      <InfoContainer>
        <StyledText>{dateLabel}</StyledText>
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
