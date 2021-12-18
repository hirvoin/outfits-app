import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import OutfitList from "./OutfitList";
import { OutfitListItemProps } from "..";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Outfit List", module).add("Basic", () => <Basic />);

const data: OutfitListItemProps[] = [
  { id: 1, date: "Weekday 00.00.0000" },
  { id: 2, date: "Weekday 00.00.0000" },
  { id: 3, date: "Weekday 00.00.0000" },
  { id: 4, date: "Weekday 00.00.0000" },
  { id: 5, date: "Weekday 00.00.0000" },
  { id: 6, date: "Weekday 00.00.0000" },
];

const Basic = () => (
  <Wrapper>
    <OutfitList data={data} />
  </Wrapper>
);
