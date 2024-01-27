export type Conversation = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
  userId: string;
};

export type Message = {
  id: string;
  isUser: boolean;
  data: string;
  createdAt: Date;
  updatedAt: Date;
  conversationId: string;
};

export type SharedLink = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  conversationId: string;
  userId: string;
};
