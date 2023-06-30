import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "@/context/UserContext";
import { Chat } from "@/types/chat";
import { excludeUserEmail, getEmailInitials } from "@/utils/user";
import Avatar from "./Avatar";

type Props = {
  chat: Chat;
};

const ItemContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  width: 40%;
`;

const ChatListItem = ({ chat }: Props) => {
  const { user } = useContext(UserContext);
  const participants = excludeUserEmail(chat.participants, user);
  const firstParticipant = participants[0];

  return (
    <ItemContainer>
      <StyledAvatar text={getEmailInitials(participants)} />
      <div>
        {firstParticipant}
        <div>last activity</div>
      </div>
    </ItemContainer>
  );
};

export default ChatListItem;
