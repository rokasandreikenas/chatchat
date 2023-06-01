import { render, screen } from "@testing-library/react";
import Providers from "../Providers";

test("renders children correctly", () => {
  render(
    <Providers>
      <div data-testid="child-component" />
    </Providers>
  );

  expect(screen.getByTestId("child-component")).toBeInTheDocument();
});
