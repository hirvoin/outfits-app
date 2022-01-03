import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import { createGarment } from "../../services/garments";
import GarmentListItem from "./GarmentListItem";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

const garment = createGarment();

storiesOf("Garment List Item", module)
  .add("Basic", () => <Basic />)
  .add("Favorited", () => <Favorited />)
  .add("Selected", () => <Selected />);

const Basic = () => (
  <Wrapper>
    <GarmentListItem {...garment} />
  </Wrapper>
);

const Favorited = () => (
  <Wrapper>
    <GarmentListItem
      {...garment}
      title="With onFavorite"
      onFavorite={() => null}
      isFavorited
    />
  </Wrapper>
);

const Selected = () => {
  const [selected, setSelected] = useState(true);
  const toggleSelected = () => setSelected(!selected);
  return (
    <Wrapper>
      <GarmentListItem
        {...garment}
        title="With onFavorite"
        isSelected={selected}
        onPress={toggleSelected}
      />
    </Wrapper>
  );
};
