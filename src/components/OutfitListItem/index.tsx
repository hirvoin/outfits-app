import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  background: rgb(184, 184, 184);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  elevation: 4;
`;

const GarmentRow = styled.View`
  flex-grow: 1;
  margin: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Garment = styled.View`
  width: 65px;
  height: 80px;
  background-color: blue;
  border-radius: 4px;s
`;

const InfoContainer = styled.View`
  height: 40px;
  width: 100%;
  background: #0000005c;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 8px;
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
  return (
    <Container>
      <GarmentRow>
        <Garment />
        <Garment />
        <Garment />
        <Garment />
      </GarmentRow>
      <InfoContainer>
        <StyledText>{dateLabel}</StyledText>
      </InfoContainer>
    </Container>
  );
};

export default GarmentListItem;
