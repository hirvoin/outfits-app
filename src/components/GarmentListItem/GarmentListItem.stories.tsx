import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import GarmentListItem from "./GarmentListItem";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Garment List Item", module)
  .add("Basic", () => <Basic />)
  .add("Favorited", () => <Favorited />)
  .add("Selected", () => <Selected />);

const Basic = () => (
  <Wrapper>
    <GarmentListItem id={1} title="Title" />
  </Wrapper>
);

const Favorited = () => (
  <Wrapper>
    <GarmentListItem
      id={1}
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
        id={1}
        title="Selected"
        isSelected={selected}
        onPress={toggleSelected}
      />
    </Wrapper>
  );
};
