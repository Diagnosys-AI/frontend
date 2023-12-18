"use client";
import { useChat } from "ai/react";
import { MODEL } from "@/data/constants";
import { ChatInput, ChatMessages } from "@/components/ui/chat";

export default function ChatSection() {
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
  } = useChat({ api: process.env.NEXT_PUBLIC_CHAT_API });

  return (
    <div className="space-y-4 max-w-5xl w-full">
      <ChatInput
        input={input}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
        multiModal={(MODEL as any) === "gpt-4-vision-preview"}
      />
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
        reload={reload}
        stop={stop}
      />
    </div>
  );
}
