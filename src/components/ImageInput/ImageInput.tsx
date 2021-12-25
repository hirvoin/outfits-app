import React from "react";
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

export interface Props {
  imageUri: string;
}

const ImageInput = ({ imageUri }: Props) => {
  const source = imageUri
    ? { uri: imageUri }
    : // eslint-disable-next-line global-require
      require("../../../assets/icon.png");

  return (
    <Container>
      <StyledImage source={source} />
      <FloatingActionButton iconName="pencil" />
    </Container>
  );
};

export default ImageInput;
