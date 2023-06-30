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
  width: 30%;
  border-right: ${({ theme }) => `1px solid ${theme.colors.border}`};
`;

const ChatBoxContainer = styled.div`
  width: 50%;
`;

const Chat = () => {
  const { activeChat } = useContext(ChatContext);
  return (
    <Container>
      <ChatListContainer>
        <ChatList chats={chats} />
      </ChatListContainer>
      <ChatBoxContainer>Active chat {activeChat?.id}</ChatBoxContainer>
    </Container>
  );
};

export default withAuth(Chat);
