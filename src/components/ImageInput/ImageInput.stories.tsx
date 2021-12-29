import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import ImageInput from "./ImageInput";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Image Input", module).add("Basic", () => <Basic />);

const Basic = () => {
  return (
    <Wrapper>
      <ImageInput />
    </Wrapper>
  );
};
