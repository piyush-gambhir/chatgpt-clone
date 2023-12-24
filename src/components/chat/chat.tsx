import getUser from "@/lib/utils/getUser";

import ChatMessage from "@/components/chat/chat-message";

type Props = {
  chatId: string;
};

const chat = [
  {
    prompt: "Hello, how are you?",
    response: "I am good, how are you?",
    messageTimestamp: "2021-10-10T00:00:00.000Z",
  },
  {
    prompt: "I'm doing well, thanks! What have you been up to lately?",
    response: "Not much, just working on some coding projects. How about you?",
    messageTimestamp: "2021-10-11T08:15:00.000Z",
  },
  {
    prompt:
      "That sounds interesting! What kind of coding projects are you working on?",
    response:
      "I'm currently building a web application for a client. It involves e-commerce functionalities.",
    messageTimestamp: "2021-10-12T15:30:00.000Z",
  },
  {
    prompt: "Nice! How's the progress so far?",
    response:
      "It's going well. I've completed the backend and now focusing on the frontend development.",
    messageTimestamp: "2021-10-13T10:45:00.000Z",
  },
  {
    prompt: "Nice! How's the progress so far?",
    response:
      "It's going well. I've completed the backend and now focusing on the frontend development.",
    messageTimestamp: "2021-10-13T10:45:00.000Z",
  },
  {
    prompt: "Nice! How's the progress so far?",
    response:
      "It's going well. I've completed the backend and now focusing on the frontend development.",
    messageTimestamp: "2021-10-13T10:45:00.000Z",
  },
];

export default async function Chat({ chatId }: Props) {
  const user = await getUser();

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden chat-scrollbar ">
      {chat.map((chat) => (
        <div key={chat.messageTimestamp}>
          <ChatMessage
            user={{
              name: "Piyush Gambhir",
              avatar: "/images/avatars/1.jpg",
            }}
            message={chat.prompt}
          />
          <ChatMessage
            user={{
              name: "ChatGPT",
              avatar: "/images/avatars/1.jpg",
            }}
            message={chat.response}
          />
        </div>
      ))}
    </div>
  );
}
