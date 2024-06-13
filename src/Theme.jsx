import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    cornflowerBlue: "#7189FF",
    royalPurple: "#624cab",
    timberwolf: "#E2DADB",
    timberwolf2: "#eeeeee",
    verdigis: "#5BC0BE",
    linen: "#FFEDDF"
  },
  fontFamily: "Segoe UI",
  fontSizes: {
    small: "1rem",
    medium: "1.25rem",
    large: "4rem"
  },
  fontWeight: 100
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
