"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
