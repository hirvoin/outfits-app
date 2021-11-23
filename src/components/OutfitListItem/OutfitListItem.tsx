import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  width: 100%;
  background: rgb(184, 184, 184);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const GarmentRow = styled.View`
  flex-grow: 1;
  margin: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Garment = styled.View`
  width: 140px;
  height: 120px;
  background-color: blue;
  border-radius: 4px;
  margin: 4px;
`;

const ImageContainer = styled.View`
  width: 140px;
  height: 120px;
  border-radius: 4px;
  margin: 4px;
`;

const GarmentImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-self: center;
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
  color: white;
  font-size: 14px;
`;

export interface Props {
  id: number;
  dateLabel: string;
}

const GarmentListItem = ({ id, dateLabel }: Props) => {
  const imageUri = "../../../assets/coat.jpg";
  const exampleImage = require("../../../assets/coat.jpg");

  const garments = [imageUri, imageUri, imageUri, imageUri];

  const renderGarmentImage = (g: string, i: number) => (
    <ImageContainer key={i}>
      <GarmentImage source={exampleImage} />
    </ImageContainer>
  );

  return (
    <Container>
      <GarmentRow>{garments.map(renderGarmentImage)}</GarmentRow>
      <InfoContainer>
        <StyledText>{dateLabel}</StyledText>
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
