import { Send } from "lucide-react";
import { useState } from "react";

import TextFormatter from "./components/text-formatter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Header } from "@/sections/header";
import axios, { endpoints } from "@/utils/axios";

interface Message {
  role: string;
  content: string;
  related_documents?: {
    document_type: string;
    document_title: string;
    document_url: string;
    page_numbers: string[];
    presigned_url: string;
  }[];
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const inputLength = input.trim().length;

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (inputValue: string) => {
    if (inputValue.trim() === "") return;

    const userMessage = { role: "user", content: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    let attempts = 0; // Initialize attempt count
    const maxRetries = 3;

    const makeRequest = async () => {
      try {
        // Attempt the request
        const response = await axios.post(
          endpoints.chat,
          {
            user_id: "12345",
            query: inputValue,
            file_path: "",
            file_type: "",
          },
          { timeout: 1000 * 60 * 2 }
        );

        // Process the successful response
        const botResponse = response.data.response;

        const botMessage = {
          role: "agent",
          content: botResponse.answer,
          related_documents: botResponse.related_documents,
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        attempts += 1; // Increment attempt count

        if (attempts <= maxRetries) {
          // Update the chat to show the retrying message
          const retryMessage = {
            role: "agent",
            content: `Retrying... (Attempt ${attempts})`,
          };
          setMessages((prevMessages) => [...prevMessages, retryMessage]);

          console.error(`Attempt ${attempts} failed:`, error);

          // Retry the request
          await makeRequest();
        } else {
          // Handle final failure after retries
          const errorMessage = {
            role: "agent",
            content: error?.message || "Sorry, there was an error processing your request.",
          };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
      }
    };

    await makeRequest(); // Start the first request attempt
    setIsLoading(false); // Hide loading indicator
  };

  // ---------------------------------------------

  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* -------------------------- */}
      <Header />
      {/* -------------------------- */}

      <div className="flex-grow p-4 w-full flex justify-center">
        <div className="flex justify-center w-full max-w-2xl xl:max-w-3xl h-full ">
          <div className="w-full flex flex-col">
            <div className="w-full pt-4 pb-8">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                      message.role === "user"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <TextFormatter content={message.content} />
                  </div>
                ))}
                {isLoading && (
                  <p className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                    Generating Response...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------- */}

      <footer className="sticky bottom-0 w-full  flex items-center justify-center px-4 py-3 bg-background z-10">
        <div className="w-full max-w-2xl xl:max-w-3xl flex items-center px-2 py-2 space-x-2 border rounded-lg">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (inputLength === 0) return;
              // setMessages((prevMessages) => [
              //   ...prevMessages,
              //   {
              //     role: "user",
              //     content: input,
              //   },
              // ]);
              handleSend(input);
              setInput("");
            }}
            className="flex items-center w-full space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1 border-none shadow-none focus-visible:ring-0"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" size="icon" disabled={inputLength === 0}>
              <Send className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </footer>

      {/* -------------------------- */}
    </div>
  );
}
