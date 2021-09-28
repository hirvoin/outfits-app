import { storiesOf } from "@storybook/react-native";
import React from "react";
import GarmentListItem from "./";

storiesOf("Garment List Item", module).add("Usage", () => <Usage />);

const Usage = () => <GarmentListItem />;
