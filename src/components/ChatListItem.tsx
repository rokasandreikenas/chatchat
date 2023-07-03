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

const InfoContainer = styled.div`
  width: 100%;
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

const UpperTextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AdditionalInfo = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Message = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey};
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
  white-space: nowrap;
`;

const ChatListItem = ({
  chat,
  participants,
  firstParticipant,
  isActive,
}: Props) => {
  const lastMessage = chat.messages[chat.messages.length - 1];
  const activity = lastMessage.timestamp;
  return (
    <ItemContainer>
      <StyledAvatar text={getEmailInitials(participants)} />
      <InfoContainer>
        <UpperTextRow>
          <Participant isActive={isActive}>{firstParticipant}</Participant>
          <AdditionalInfo>
            {new Date(activity).toLocaleDateString()}
          </AdditionalInfo>
        </UpperTextRow>
        <UpperTextRow>
          <Message>{lastMessage.text}</Message>
          <AdditionalInfo>2</AdditionalInfo>
        </UpperTextRow>
      </InfoContainer>
    </ItemContainer>
  );
};

export default ChatListItem;
