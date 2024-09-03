import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../BotAvatar";

import './InitialMessage.css'

// props.actionProvider.handleJavascriptQuiz

const InitialMessage = (props) => {
    const options = [
        {
            text: "About DMS",
            handler: props.actionProvider.handleAboutDMS,
            id: 1,
        },
        { text: "General Information", handler: props.actionProvider.handleGeneralInformation, id: 2 },
        { text: "IPs", handler: props.actionProvider.handleAboutDMS, id: 3 },
        { text: "Intel and Recipient Reps", handler: props.actionProvider.handleAboutDMS, id: 4 },
        { text: "Export Compliances", handler: props.actionProvider.handleAboutDMS, id: 5 },
        { text: "Approvals", handler: props.actionProvider.handleAboutDMS, id: 6 },
        { text: "File a support ticket", handler: props.actionProvider.handleAboutDMS, id: 7 },
        { text: "Miscellaneous", handler: props.actionProvider.handleAboutDMS, id: 8 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="react-chatbot-kit-chat-bot-message-container">

        <BotAvatar />
            <div className="react-chatbot-kit-chat-bot-message">
            Hi <strong>Name</strong>, what can I help you with today? <br/>
            I can help you with DMS process related questions. Select an option below, or type in your question.
                <div className="options-container">{buttonsMarkup}
                </div>
            </div>
    </div>;
}

export default InitialMessage
