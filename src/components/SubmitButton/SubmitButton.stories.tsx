import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import SubmitButton from "./SubmitButton";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Submit Button", module).add("Basic", () => <Basic />);

const Basic = () => (
  <Wrapper>
    <SubmitButton label="Label" />
  </Wrapper>
);
