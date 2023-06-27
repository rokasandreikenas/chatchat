import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { Chat } from "@/types/chat";
import { excludeUserEmail } from "@/utils/user";

interface Props {
  chat: Chat;
}

const ChatListItem = ({ chat }: Props) => {
  const { user } = useContext(UserContext);
  const participants = excludeUserEmail(chat.participants, user);

  return <div>{participants}</div>;
};

export default ChatListItem;
