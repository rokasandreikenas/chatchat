import theme from "@/styles/theme";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
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
    expect(errorMessage).toHaveStyle(`
        font-size: 0.8rem;
        color: ${theme.colors.error};
      `);
  });
});
