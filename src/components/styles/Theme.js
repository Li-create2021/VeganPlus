import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "rgb(38, 170, 21)",
        lightBlue: "#AFDBD2",
        onyx: "#36313D"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;