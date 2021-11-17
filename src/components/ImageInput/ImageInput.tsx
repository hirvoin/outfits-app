import React, { useState } from "react";
import styled from "styled-components/native";
import FloatingActionButton from "../FloatingActionButton/FloatingActionButton";

const Container = styled.View`
  margin: 8px;
  height: 300px;
  border-radius: 8px;
  width: 100%;
`;

const StyledImage = styled.Image`
  border-radius: 8px;
  width: undefined;
  height: undefined;
  flex: 1;
`;

export interface Props {}

const ImageInput = ({}: Props) => {
  const exampleImage = require("../../../assets/coat.jpg");

  return (
    <Container>
      <StyledImage source={exampleImage} />
      <FloatingActionButton iconName='pencil' />
    </Container>
  );
};

export default ImageInput;
