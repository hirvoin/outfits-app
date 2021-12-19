import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import Typography from "./Typography";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

storiesOf("Typography", module).add("Basic", () => <Basic />);

const Basic = () => (
  <Wrapper>
    <Typography fontWeight="thin">Thin</Typography>
    <Typography fontWeight="extraLight">ExtraLight</Typography>
    <Typography fontWeight="light">Light</Typography>
    <Typography fontWeight="regular">Regular</Typography>
    <Typography fontWeight="medium">Medium</Typography>
    <Typography fontWeight="semiBold">SemiBold</Typography>
    <Typography fontWeight="bold">Bold</Typography>
  </Wrapper>
);
