import React from "react";
import styled from "styled-components/native";
import {
  Picker,
  PickerItemProps as RNPPickerItemProps,
} from "@react-native-picker/picker";

import Typography from "../Typography/Typography";

const PickerContainer = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding-left: 8px;
  border-radius: 4px;
`;

const Container = styled.View`
  width: 100%;
  margin: 8px;
`;

const Label = styled(Typography)`
  padding-left: 16px;
  margin-bottom: 4px;
`;

const StyledPicker = styled(Picker)`
  font-family: "Montserrat_400Regular";
`;

export type PickerItemProps = RNPPickerItemProps;

export interface Props {
  label: string;
  items: PickerItemProps[];
  value: PickerItemProps["value"];
  setValue: (value: PickerItemProps["value"]) => void;
}

const PickerInput = ({ label, items, value, setValue }: Props) => {
  const renderItems = () =>
    items.map((i) => (
      <Picker.Item fontFamily="Montserrat_400Regular" key={i.value} {...i} />
    ));

  return (
    <Container>
      <Label fontWeight="regular">{label}</Label>
      <PickerContainer>
        <StyledPicker selectedValue={value} onValueChange={setValue}>
          {renderItems()}
        </StyledPicker>
      </PickerContainer>
    </Container>
  );
};

export default PickerInput;
