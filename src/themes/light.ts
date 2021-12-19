/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultTheme } from "styled-components/native";
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
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    salmon: string;
    white: string;
    black: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

const light: DefaultTheme = {
  colors: {
    primary: "#E9B872",
    secondary: "#6494AA",
    tertiary: "#42E2B8",
    background: "#F3DFBF",
    salmon: "#D62246",
    white: "#F9F4F5",
    black: "#343434",
  },
  fontSizes: {
    small: "12px",
    medium: "18px",
    large: "22px",
    xlarge: "32px",
    xxlarge: "36px",
  },
};

export default light;
