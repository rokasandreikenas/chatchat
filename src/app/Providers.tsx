"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/styles/theme";
import { loadDynamicComponent } from "@/utils/component";

const UserProvider = loadDynamicComponent(import("@/context/UserContext"));
const ChatProvider = loadDynamicComponent(import("@/context/ChatContext"));

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <UserProvider>
        <ChatProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ChatProvider>
      </UserProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
