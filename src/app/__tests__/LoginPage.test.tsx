import { fireEvent, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { loginFormInitialValues } from "../const";
import LoginPage from "../page";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    );

    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("Log in")).toBeInTheDocument();
  });

  it("submits the form correctly", async () => {
    const { getByText, getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    );

    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const submitButton = getByText("Log in");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/chat"));
  });

  it("displays initial values correctly", () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    );

    const emailInput = getByLabelText("Email") as HTMLInputElement;
    const passwordInput = getByLabelText("Password") as HTMLInputElement;

    expect(emailInput.value).toEqual(loginFormInitialValues.email);
    expect(passwordInput.value).toEqual(loginFormInitialValues.password);
  });
});
