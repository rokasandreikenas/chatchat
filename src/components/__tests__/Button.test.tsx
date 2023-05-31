import { render } from "@testing-library/react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Button from "../Button";

const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#0051a2",
    lightGrey: "#ddd",
    darkGrey: "#555",
    white: "#fff",
    background: "#fafafa",
    error: "#d32f2f",
  },
};

describe("Button", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button>Test Button</Button>
      </ThemeProvider>
    );

    const button = getByRole("button");
    expect(button).toHaveTextContent("Test Button");
  });

  it("applies default styles", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button>Test Button</Button>
      </ThemeProvider>
    );

    const button = getByRole("button");
    expect(button).toHaveStyle(`
      padding: 1em 2em;
      border-radius: 5px;
      border: none;
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      cursor: pointer;
    `);
  });
});
