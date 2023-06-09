import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Input from "../inputs/Input";

describe("Input", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Input type="text" />
      </ThemeProvider>
    );

    const inputElement = getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies default styles", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Input type="text" />
      </ThemeProvider>
    );

    const inputElement = getByRole("textbox");

    expect(inputElement).toHaveStyleRule(
      "border",
      `1px solid ${theme.colors.lightGrey}`
    );
  });
});
