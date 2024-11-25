import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import ChatbotButton from "./Components/ChatbotButton";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<ChatbotButton isToggled={false} isMaximizedChatbot={false} />} />
  <Route path="/maximize-chatbot" element={<ChatbotButton isToggled={false} isMaximizedChatbot={true} />} />
</Routes>
</BrowserRouter>
  );
  
}

export default App;