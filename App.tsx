import React from "react";
import { ThemeProvider } from "styled-components/native";

import { RootTabNavigator } from "./src/navigation";
import StorybookUI from "./storybook";
import light from "./src/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <RootTabNavigator />
    </ThemeProvider>
  );
}

function Storybook() {
  return (
    <ThemeProvider theme={light}>
      <StorybookUI />
    </ThemeProvider>
  );
}

export default false ? Storybook : App;
