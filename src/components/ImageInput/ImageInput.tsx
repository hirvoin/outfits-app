import React, { useState } from "react";
import styled from "styled-components/native";
import { AnimatedLayout } from "react-native-reanimated";

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
  const [showButtons, setShowButtons] = useState(false);
  const source = imageUri
    ? { uri: imageUri }
    : // eslint-disable-next-line global-require
      require("../../../assets/icon.png");

  const toggleButtons = () => setShowButtons(!showButtons);

  return (
    <Container>
      <StyledImage source={source} />
      <FloatingActionButton iconName="pencil" onPress={toggleButtons} />
      {showButtons && (
        <AnimatedLayout>
          <FloatingActionButton
            iconName="camera"
            onPress={toggleButtons}
            right={80}
          />
          <FloatingActionButton
            iconName="image-plus"
            onPress={toggleButtons}
            right={146}
          />
        </AnimatedLayout>
      )}
    </Container>
  );
};

export default ImageInput;
