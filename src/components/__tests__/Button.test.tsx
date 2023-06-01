import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Button from "../Button";

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
    expect(button).toHaveStyleRule("padding", "1em 2em");
    expect(button).toHaveStyleRule("border-radius", "5px");
    expect(button).toHaveStyleRule("border", "none");
    expect(button).toHaveStyleRule("color", theme.colors.white);
    expect(button).toHaveStyleRule("background-color", theme.colors.primary);
    expect(button).toHaveStyleRule("cursor", "pointer");
  });
});
