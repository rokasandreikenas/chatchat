import { render } from "@testing-library/react";
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
    expect(inputElement).toHaveStyle(`
        padding: 0.75em;
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${theme.colors.lightGrey};
      `);
  });
});
