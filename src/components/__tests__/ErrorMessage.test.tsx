import { render } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import ErrorMessage from "../inputs/ErrorMessage";

describe("ErrorMessage", () => {
  it("renders correctly with children", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage>Test Error</ErrorMessage>
      </ThemeProvider>
    );

    const errorMessage = getByText("Test Error");
    expect(errorMessage).toBeInTheDocument();
  });

  it("applies default styles", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ErrorMessage>Test Error</ErrorMessage>
      </ThemeProvider>
    );

    const errorMessage = getByText("Test Error");
    expect(errorMessage).toHaveStyleRule("font-size", "0.8rem");
    expect(errorMessage).toHaveStyleRule("color", theme.colors.error);
  });
});
