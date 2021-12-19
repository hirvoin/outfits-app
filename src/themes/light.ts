/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultTheme } from "styled-components/native";

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
