import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";

type FontWeight =
  | "thin"
  | "extraLight"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | "bold";

const fontWeights = {
  thin: "Montserrat_100Thin",
  extraLight: "Montserrat_200ExtraLight",
  light: "Montserrat_300Light",
  regular: "Montserrat_400Regular",
  medium: "Montserrat_500Medium",
  semiBold: "Montserrat_600SemiBold",
  bold: "Montserrat_700Bold",
};

const StyledText = styled.Text<{ fontWeight: FontWeight }>`
  font-family: ${(props) => props.fontWeight};
`;

export interface Props extends Omit<TextProps, "fontWeight"> {
  children: React.ReactNode;
  fontWeight?: FontWeight;
}

const Typography = ({
  children,
  fontWeight = "regular",
  ...textProps
}: Props) => {
  return (
    <StyledText
      fontWeight={fontWeights[fontWeight] as FontWeight}
      {...textProps}
    >
      {children}
    </StyledText>
  );
};

export default Typography;
