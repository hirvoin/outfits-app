/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { RootSiblingParent } from "react-native-root-siblings";

import { RootStackNavigator } from "./src/navigation";
import StorybookUI from "./storybook";
import light from "./src/themes/light";
import { AuthProvider } from "./src/context/auth";

function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <RootSiblingParent>
          <RootStackNavigator />
        </RootSiblingParent>
      </AuthProvider>
    </ThemeProvider>
  );
}

function Storybook() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={light}>
      <StorybookUI />
    </ThemeProvider>
  );
}

// export default Storybook;
export default App;
