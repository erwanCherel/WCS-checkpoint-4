import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import "./App.css";

import Accueil from "./pages/Accueil";
import ChatRoom from "./pages/ChatRoom";
import Conversation from "./components/ChatRoom/Conversation";

function App() {
  return (
    <UserContextProvider>
      <main className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/chat-room" element={<ChatRoom />}>
            <Route path="/chat-room" element={<Conversation />} />
          </Route>
        </Routes>
      </main>
    </UserContextProvider>
  );
}

export default App;
