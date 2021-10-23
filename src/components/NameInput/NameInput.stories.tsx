import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import NameInput from "./";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Name Input", module).add("Basic", () => <Basic />);

const Basic = () => {
  const [text, onChangeText] = useState("");

  return (
    <Wrapper>
      <NameInput
        value={text}
        onChangeText={onChangeText}
        placeholder='Type something...'
      />
    </Wrapper>
  );
};
