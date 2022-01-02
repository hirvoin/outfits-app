import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import FloatingActionButton from "./FloatingActionButton";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Floating Action Button", module)
  .add("Basic", () => <Basic />)
  .add("Label", () => <Label />);

const Basic = () => {
  return (
    <Wrapper>
      <FloatingActionButton onPress={() => null} iconName="plus" />
    </Wrapper>
  );
};

const Label = () => {
  return (
    <Wrapper>
      <FloatingActionButton
        onPress={() => null}
        iconName="plus"
        label="Label"
      />
    </Wrapper>
  );
};
