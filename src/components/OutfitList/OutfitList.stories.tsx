import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import OutfitList from "./OutfitList";
import { OutfitListItemProps } from "..";
import { createOutfit } from "../../services/outfits";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Outfit List", module).add("Basic", () => <Basic />);

const data: OutfitListItemProps[] = [
  createOutfit({ id: "1" }),
  createOutfit({ id: "2" }),
  createOutfit({ id: "3" }),
];

const Basic = () => (
  <Wrapper>
    <OutfitList data={data} />
  </Wrapper>
);
