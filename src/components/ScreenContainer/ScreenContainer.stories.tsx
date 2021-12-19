import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";

import ScreenContainer from "./ScreenContainer";

storiesOf("Screen Container", module).add("Basic", () => <Basic />);

const Basic = () => (
  <ScreenContainer>
    <Text>Child content</Text>
  </ScreenContainer>
);
