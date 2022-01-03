import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import OutfitListItem from "./OutfitListItem";
import { createOutfit } from "../../services/outfits";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Outfit List Item", module).add("Basic", () => <Basic />);

const outfit = createOutfit();

const Basic = () => (
  <Wrapper>
    <OutfitListItem {...outfit} />
  </Wrapper>
);
