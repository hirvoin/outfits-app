import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import NameInput from "./NameInput";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Name Input", module).add("Basic", () => <Basic />);

const Basic = () => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <NameInput
        value={value}
        onChangeText={setValue}
        placeholder="Type something..."
      />
    </Wrapper>
  );
};
