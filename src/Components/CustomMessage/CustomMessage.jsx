import React from 'react'
import BotAvatar from '../BotAvatar';
import "./CustomMessage.css"

const CustomMessage = (state, message) => {
  console.log(state.message.message);
  return (
    <div className="react-chatbot-kit-chat-bot-message-container">
        <BotAvatar />
            <div className="react-chatbot-kit-chat-bot-message" dangerouslySetInnerHTML={{ __html: state.message.message }}>
            </div>
    </div>
  )
};

export default CustomMessage;
