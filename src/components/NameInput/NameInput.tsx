import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 16px 8px;
  align-items: center;
`;

const Input = styled.TextInput`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-family: "Montserrat_400Regular";
  flex-grow: 1;
`;

const Icon = styled(MaterialCommunityIcons)`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 0 8px;
`;

export type Props = TextInputProps;

const NameInput = (props: Props) => {
  return (
    <Container>
      <Icon name="pencil" />
      <Input {...props} />
    </Container>
  );
};

export default NameInput;
