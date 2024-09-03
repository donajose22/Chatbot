import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import ChatbotButton from "./Components/ChatbotButton";

function App() {



  return (
    <div className="App">
        <ChatbotButton isToggled={false} />
      </div>
  );
  
}

export default App;