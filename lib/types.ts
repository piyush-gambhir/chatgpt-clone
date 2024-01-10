export type Message = {
  id: string;
  isUser: boolean;
  data: string;
  createdAt: Date;
  updatedAt: Date;
  conversationId: string;
};
