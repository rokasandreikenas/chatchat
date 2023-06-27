import { Chat } from "@/types/chat";

export const chats: Chat[] = [
  {
    id: 1,
    participants: ["rokas@gmail.com", "tomas@gmail.com"],
    messages: [
      {
        sender: "rokas@gmail.com",
        timestamp: "2023-06-03T14:15:00Z",
        text: "Hello, how are you?",
      },
      {
        sender: "tomas@gmail.com",
        timestamp: "2023-06-03T14:16:00Z",
        text: "Hi, I'm good. You?",
      },
      {
        sender: "rokas@gmail.com",
        timestamp: "2023-06-03T14:17:00Z",
        text: "I'm good too, thanks for asking.",
      },
    ],
  },
  {
    id: 2,
    participants: ["rokas@gmail.com", "valdas@gmail.com"],
    messages: [
      {
        sender: "rokas@gmail.com",
        timestamp: "2023-06-03T15:15:00Z",
        text: "Hey, are you available for a quick chat?",
      },
      {
        sender: "valdas@gmail.com",
        timestamp: "2023-06-03T15:16:00Z",
        text: "Yes, I'm available.",
      },
    ],
  },
];
