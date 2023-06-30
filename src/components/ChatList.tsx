import { useContext } from "react";
import styled from "styled-components";
import { ChatContext } from "@/context/ChatContext";
import { UserContext } from "@/context/UserContext";
import { Chat } from "@/types/chat";
import { excludeUserEmail } from "@/utils/user";
import ChatListItem from "./ChatListItem";

type Props = {
  chats: Chat[];
};

const ChatContainer = styled.div`
  padding: 1rem;
`;

const ItemContainer = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
`;

const ChatList = ({ chats }: Props) => {
  const { user } = useContext(UserContext);
  const { activeChat, setActiveChat } = useContext(ChatContext);

  return (
    <ChatContainer>
      {chats.map((chat) => {
        const participants = excludeUserEmail(chat.participants, user);
        const firstParticipant = participants[0];
        return (
          <ItemContainer key={chat.id} onClick={() => setActiveChat(chat)}>
            <ChatListItem
              chat={chat}
              participants={participants}
              firstParticipant={firstParticipant}
              isActive={chat.id === activeChat?.id}
            />
          </ItemContainer>
        );
      })}
    </ChatContainer>
  );
};

export default ChatList;
