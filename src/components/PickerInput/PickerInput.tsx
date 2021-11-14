import React, { useState } from "react";
import styled from "styled-components/native";
import {
  Picker,
  PickerItemProps as RNPPickerItemProps,
} from "@react-native-picker/picker";

const PickerContainer = styled.View`
  width: 100%;
  background: rgb(184, 184, 184);
  padding: 16px 8px;
  border-radius: 4px;
`;

const Container = styled.View`
  width: 100%;
`;

const Label = styled.Text`
  padding-left: 16px;
`;

export interface PickerItemProps extends RNPPickerItemProps {}

export interface Props {
  label: string;
  items: PickerItemProps[];
  value: PickerItemProps["value"];
  setValue: (value: PickerItemProps["value"]) => void;
}

const PickerInput = ({ label, items, value, setValue }: Props) => {
  const renderItems = () => {
    return items.map((i) => <Picker.Item key={i.value} {...i} />);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <PickerContainer>
        <Picker selectedValue={value} onValueChange={setValue}>
          {renderItems()}
        </Picker>
      </PickerContainer>
    </Container>
  );
};

export default PickerInput;
