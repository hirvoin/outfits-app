import React from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  bottom: 32px;
  right: 32px;
  position: absolute;
`;

const Button = styled.TouchableOpacity`
  font-size: 36px;
  background-color: black;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  elevation: 4;
`;

const Icon = styled(MaterialCommunityIcons)`
  font-size: 32px;
  color: white;
`;

export interface Props extends TouchableOpacityProps {
  iconName: string;
}

const NameInput = ({ iconName, onPress }: Props) => {
  return (
    <Container>
      <Button onPress={onPress}>
        <Icon name={iconName} />
      </Button>
    </Container>
  );
};

export default NameInput;
