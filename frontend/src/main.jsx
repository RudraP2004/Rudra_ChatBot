import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";

// ✅ Updated backend server URL
export const server = "https://rudra-chat-mulbwrkl2-rudrap2004s-projects.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </UserProvider>
  </React.StrictMode>
);
