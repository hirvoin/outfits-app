import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import GarmentFormList from "./GarmentFormList";
import { Props as GarmentListItemProps } from "../GarmentListItem/GarmentListItem";
import { createGarment } from "../../services/garments";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Garment Form List", module).add("Basic", () => <Basic />);

const garments: GarmentListItemProps[] = [...Array(10)].map((i, index) =>
  createGarment({ id: index.toString() })
);

const Basic = () => {
  const [data, setData] = useState(garments);

  const toggleFavorite = (item: GarmentListItemProps["id"]) => {
    const toggledItem = data.find((i) => i.id === item);
    if (!toggledItem) return;

    const copy = [...data];
    const itemIndex = copy.indexOf(toggledItem);
    const updatedItem = { ...toggledItem, isSelected: !toggledItem.isSelected };

    copy.splice(itemIndex, 1, updatedItem);
    setData(copy);
  };

  return (
    <Wrapper>
      <GarmentFormList
        title="List title"
        data={data}
        onItemPress={toggleFavorite}
      />
    </Wrapper>
  );
};
