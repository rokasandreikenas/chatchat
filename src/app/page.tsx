"use client";

import styled from "styled-components";
import ChatList from "@/components/ChatList";
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
  return (
    <Container>
      <ChatListContainer>
        <ChatList chats={chats} />
      </ChatListContainer>
      <ChatBoxContainer>Test</ChatBoxContainer>
    </Container>
  );
};

export default withAuth(Chat);
