import { Chat } from "@/types/chat";
import { User } from "@/types/user";

export const excludeUserEmail = (
  participants: Chat["participants"],
  user: User | null
): string[] => {
  if (!participants || !Array.isArray(participants)) {
    return [];
  }

  return participants.filter((participant) => participant !== user?.email);
};
