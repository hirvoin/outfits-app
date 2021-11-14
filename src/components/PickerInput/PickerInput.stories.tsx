import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import Picker from "./PickerItem";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("PickerInput", module).add("Basic", () => <Basic />);

const Basic = () => (
  <Wrapper>
    <Picker />
  </Wrapper>
);
