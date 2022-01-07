import { storiesOf } from "@storybook/react-native";
import React from "react";
import styled from "styled-components/native";

import GarmentList from "./GarmentList";
import { Props as GarmentListItemProps } from "../GarmentListItem/GarmentListItem";
import { createGarment } from "../../services/garments";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Garment List", module).add("Basic", () => <Basic />);

const data: GarmentListItemProps[] = [...Array(10)].map((i, index) =>
  createGarment({ id: index.toString() })
);

const Basic = () => (
  <Wrapper>
    <GarmentList data={data} onFavorite={() => null} onPress={() => null} />
  </Wrapper>
);
