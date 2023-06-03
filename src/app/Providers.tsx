"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/styles/theme";

const UserProvider = dynamic(
  () => import("@/context/UserContext").then((ctx) => ctx.default),
  {
    ssr: false,
  }
);

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <UserProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </UserProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
