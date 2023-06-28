import styled from "styled-components";
import { Chat } from "@/types/chat";
import ChatListItem from "./ChatListItem";

interface Props {
  chats: Chat[];
}

const ChatContainer = styled.div`
  padding: 1rem;
`;

const ItemContainer = styled.div`
  margin-bottom: 1rem;
`;

const ChatList = ({ chats }: Props) => {
  return (
    <ChatContainer>
      {chats.map((chat) => (
        <ItemContainer key={chat.id}>
          <ChatListItem chat={chat} />
        </ItemContainer>
      ))}
    </ChatContainer>
  );
};

export default ChatList;
