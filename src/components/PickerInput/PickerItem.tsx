import React, { useState } from "react";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

const Container = styled.View`
  width: 100%;
  background: rgb(184, 184, 184);
  padding: 8px 4px;
  border-radius: 4px;
`;

const Label = styled.Text``;

export interface Props {
  id: number;
  dateLabel: string;
}

const GarmentListItem = ({ id, dateLabel }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Container>
      <Label>Hi</Label>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker>
    </Container>
  );
};

export default GarmentListItem;
