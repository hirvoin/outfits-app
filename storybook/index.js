import { getStorybookUI, configure } from "@storybook/react-native";

import { loadStories } from "./storyLoader";

import "./rn-addons";

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === "android" ? "10.0.2.2" : "0.0.0.0",
  asyncStorage: null,
  // asyncStorage: require("@react-native-community/async-storage").default,
});

export default StorybookUIRoot;
