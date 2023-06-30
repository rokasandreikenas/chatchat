import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Chat } from "@/types/chat";
import { getEmailInitials } from "@/utils/user";
import Avatar from "./Avatar";

type Props = {
  chat: Chat;
  participants: string[];
  firstParticipant: string;
  isActive: boolean;
};

const ItemContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  width: 40%;
`;

const Participant = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ isActive, ...rest }: { isActive: boolean } & PropsWithChildren) => (
    <div {...rest} />
  )
)`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : undefined};
`;
const ChatListItem = ({
  chat,
  participants,
  firstParticipant,
  isActive,
}: Props) => {
  return (
    <ItemContainer>
      <StyledAvatar text={getEmailInitials(participants)} />
      <div>
        <Participant isActive={isActive}>{firstParticipant}</Participant>
        <div>{chat.messages[0].text}</div>
        <div>last activity</div>
      </div>
    </ItemContainer>
  );
};

export default ChatListItem;
