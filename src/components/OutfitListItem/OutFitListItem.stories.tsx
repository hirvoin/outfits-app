import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import OutfitListItem from "./";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Outfit List Item", module).add("Basic", () => <Basic />);

const Basic = () => (
  <Wrapper>
    <OutfitListItem id={1} dateLabel='Weekday 00.00.0000' />
  </Wrapper>
);
