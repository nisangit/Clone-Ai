import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [messages, setMessages] = useState([]);

  const onSent = async (prompt) => {
    // Add user message
    const userMessage = { id: messages.length + 1, text: prompt, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Send prompt to AI and get response
    const result = await run(prompt);

    // Add AI response to messages
    const botMessage = { id: messages.length + 2, text: result, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);
  };

  const contextValue = {
    messages,
    onSent,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
