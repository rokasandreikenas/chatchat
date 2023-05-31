import { cleanup, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Label from "../inputs/Label";

describe("Label component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Label>Test Label</Label>
      </ThemeProvider>
    );

    const labelElement = getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("applies correct default styles", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Label>Test Label</Label>
      </ThemeProvider>
    );

    const labelElement = getByText("Test Label");
    expect(labelElement).toHaveStyle(`
        font-weight: 600;
        color: ${theme.colors.darkGrey};
      `);
  });
});
