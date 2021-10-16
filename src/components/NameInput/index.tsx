import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
`;

const Input = styled.TextInput`
  font-size: 36px;
`;

const Icon = styled(MaterialCommunityIcons)`
  font-size: 32px;
  color: black;
  margin-right: 8px;
`;

interface Props extends TextInputProps {}

const NameInput = (props: Props) => {
  return (
    <Container>
      <Icon name='pencil' />
      <Input {...props} />
    </Container>
  );
};

export default NameInput;
