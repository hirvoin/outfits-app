import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
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

const garments: GarmentListItemProps[] = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
  { id: 6, title: "Item 6" },
  { id: 7, title: "Item 7" },
  { id: 8, title: "Item 8" },
  { id: 9, title: "Item 9" },
  { id: 10, title: "Item 10" },
  { id: 11, title: "Item 11" },
  { id: 12, title: "Item 12" },
  { id: 13, title: "Item 13" },
  { id: 14, title: "Item 14" },
  { id: 15, title: "Item 15" },
];

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
