import React from "react";
import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

import Typography from "../Typography/Typography";

const Container = styled.View`
  bottom: 32px;
  right: 16px;
  position: absolute;
`;

const Button = styled.TouchableOpacity<{ hasLabel: boolean }>`
  background-color: ${(props) => props.theme.colors.tertiary};
  min-width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  elevation: 4;
  flex-direction: row;
  padding: ${({ hasLabel }) => (hasLabel ? "0 16px" : 0)};
`;

const ButtonIcon = styled(Icon)`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) => props.theme.colors.white};
`;

const Label = styled(Typography)`
  margin: 0 4px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

export interface Props extends TouchableOpacityProps {
  iconName: string;
  label?: string;
}

const FloatingActionButton = ({ iconName, label, onPress }: Props) => {
  return (
    <Container>
      <Button hasLabel={!!label} onPress={onPress}>
        <ButtonIcon name={iconName} />
        {!!label && <Label fontWeight="medium">{label}</Label>}
      </Button>
    </Container>
  );
};

export default FloatingActionButton;
