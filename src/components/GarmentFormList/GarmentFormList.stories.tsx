import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import GarmentFormList from "./GarmentFormList";
import { Props as GarmentListItemProps } from "../GarmentListItem/GarmentListItem";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Garment Form List", module).add("Basic", () => <Basic />);

const data: GarmentListItemProps[] = [
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
  { title: "Item 5" },
  { title: "Item 6" },
  { title: "Item 7" },
  { title: "Item 8" },
  { title: "Item 9" },
  { title: "Item 10" },
  { title: "Item 11" },
  { title: "Item 12" },
  { title: "Item 13" },
  { title: "Item 14" },
  { title: "Item 15" },
];

const Basic = () => (
  <Wrapper>
    <GarmentFormList title='List title' data={data} />
  </Wrapper>
);
