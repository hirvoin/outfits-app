import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import GarmentListItem from "./";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Garment List Item", module).add("Basic", () => <Basic />);

const Basic = () => (
  <Wrapper>
    <GarmentListItem title='Title' />
  </Wrapper>
);
