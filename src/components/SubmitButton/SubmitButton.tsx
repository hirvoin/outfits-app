import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;
  display: flex;
  padding: 12px;
  margin: 8px;
`;

const Label = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: white;
`;

export interface Props extends TouchableOpacityProps {
  label: string;
}

const SubmitButton = ({ label, ...touchableOpacityProps }: Props) => {
  return (
    <ButtonContainer {...touchableOpacityProps}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};

export default SubmitButton;
