import { Chat } from "@/types/chat";
import ChatListItem from "./ChatListItem";

interface Props {
  chats: Chat[];
}

const ChatList = ({ chats }: Props) => {
  return (
    <div>
      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
