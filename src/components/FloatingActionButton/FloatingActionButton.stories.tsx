import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import FloatingActionButton from "./FloatingActionButton";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Floating Action Button", module).add("Basic", () => <Basic />);

const Basic = () => {
  return (
    <Wrapper>
      <FloatingActionButton
        onPress={() => console.log("onPress")}
        iconName='plus'
      />
    </Wrapper>
  );
};
