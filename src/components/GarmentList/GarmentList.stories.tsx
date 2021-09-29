import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import GarmentList from "./";
import { Props as GarmentListItemProps } from "../GarmentListItem";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Garment List", module).add("Basic", () => <Basic />);

const data: GarmentListItemProps[] = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
  { title: "Item 5" },
];

const Basic = () => (
  <Wrapper>
    <GarmentList title='List title' data={data} />
  </Wrapper>
);
