"use client";

import { useContext } from "react";
import styled from "styled-components";
import ChatList from "@/components/ChatList";
import { ChatContext } from "@/context/ChatContext";
import { withAuth } from "@/lib/withAuth";
import { chats } from "./mocks";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ChatListContainer = styled.div`
  min-width: 400px;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border}`};
`;

const Chat = () => {
  const { activeChat } = useContext(ChatContext);
  return (
    <Container>
      <ChatListContainer>
        <ChatList chats={chats} />
      </ChatListContainer>
      <div>Active chat {activeChat?.id}</div>
    </Container>
  );
};

export default withAuth(Chat);
