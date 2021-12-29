import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import Picker, { PickerItemProps } from "./PickerInput";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Picker Input", module).add("Basic", () => <Basic />);

const Basic = () => {
  const [value, setValue] = useState<PickerItemProps["value"]>();

  const items: PickerItemProps[] = [
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
    { label: "Item 3", value: 3 },
    { label: "Item 4", value: 4 },
    { label: "Item 5", value: 5 },
    { label: "Item 6", value: 6 },
  ];

  return (
    <Wrapper>
      <Picker value={value} items={items} setValue={setValue} label="Label" />
    </Wrapper>
  );
};
