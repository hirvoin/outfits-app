import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Typography from "../Typography/Typography";

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 12px;
  margin: 8px;
`;

const Label = styled(Typography)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

export interface Props extends TouchableOpacityProps {
  label: string;
}

const SubmitButton = ({ label, ...touchableOpacityProps }: Props) => {
  return (
    <ButtonContainer {...touchableOpacityProps}>
      <Label fontWeight="medium">{label}</Label>
    </ButtonContainer>
  );
};

export default SubmitButton;
