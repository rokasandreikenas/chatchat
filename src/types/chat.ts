export type Participant = string;

export type Message = {
  sender: string;
  timestamp: string;
  text: string;
};

export type Chat = {
  id: number;
  participants: Participant[];
  messages: Message[];
};
