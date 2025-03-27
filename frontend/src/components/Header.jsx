import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const { chats } = ChatData();
  return (
    <div>
      <p className="text-lg mb-6">Hello, How can i help you today?</p>
      {chats && chats.length === 0 && (
        <p className="text-lg mb-6">This is a simple ChatBot</p>
      )}
    </div>
  );
};

export default Header;
