import { render, screen, waitFor } from "@testing-library/react";
import Providers from "../Providers";

test("renders children correctly", async () => {
  render(
    <Providers>
      <div data-testid="child-component" />
    </Providers>
  );

  await waitFor(() => {
    expect(screen.getByTestId("child-component")).toBeInTheDocument();
  });
});
