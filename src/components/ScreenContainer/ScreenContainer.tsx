import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export interface Props {
  children: React.ReactNode;
}

const SubmitButton = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default SubmitButton;
