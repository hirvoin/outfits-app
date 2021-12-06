import React from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  bottom: 32px;
  right: 32px;
  position: absolute;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.tertiary};
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  elevation: 4;
`;

const ButtonIcon = styled(Icon)`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: white;
`;

export interface Props extends TouchableOpacityProps {
  iconName: string;
}

const NameInput = ({ iconName, onPress }: Props) => {
  return (
    <Container>
      <Button onPress={onPress}>
        <ButtonIcon name={iconName} />
      </Button>
    </Container>
  );
};

export default NameInput;
