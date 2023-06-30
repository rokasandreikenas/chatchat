import { Chat } from "@/types/chat";
import { User } from "@/types/user";

export const excludeUserEmail = (
  participants: Chat["participants"],
  user?: User
): string[] => {
  if (!participants || !Array.isArray(participants)) {
    return [];
  }

  return participants.filter((participant) => participant !== user?.email);
};

export const getEmailInitials = (participants: Chat["participants"]) => {
  if (!participants || participants.length === 0) {
    return "";
  }

  const firstParticipant = participants[0];

  if (!firstParticipant) {
    return "";
  }

  return firstParticipant[0] || "";
};
