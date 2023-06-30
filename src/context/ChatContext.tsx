import { PropsWithChildren, createContext, useState } from "react";
import { Chat } from "@/types/chat";

export const ChatContext = createContext<{
  activeChat: Chat | undefined;
  setActiveChat: (chat: Chat) => void;
}>({
  activeChat: undefined,
  setActiveChat: () => ({}),
});

const ChatProvider = ({ children }: PropsWithChildren) => {
  const [activeChat, setActiveChat] = useState<Chat | undefined>(undefined);

  return (
    <ChatContext.Provider value={{ activeChat, setActiveChat }}>
      {children}
    </ChatContext.Provider>
  );
};
export default ChatProvider;
