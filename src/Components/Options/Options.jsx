import React from "react";
import BotAvatar from "../BotAvatar";

import "./Options.css";

const Options = (props) => {
    console.log(props);
    const options = [
        {
            text: "About DMS",
            handler: props.actionProvider.handleOptions,
            id: 1,
        },
        { text: "General Information", handler: () => { }, id: 2 },
        { text: "IPs", handler: () => { }, id: 3 },
        { text: "Intel and Recipient Reps", handler: () => { }, id: 4 },
        { text: "Export Compliances", handler: () => { }, id: 5 },
        { text: "Approvals", handler: () => { }, id: 6 },
        { text: "File a support ticket", handler: () => { }, id: 7 },
        { text: "Miscellaneous", handler: () => { }, id: 8 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={func} className="option-button">
            {option.text}
        </button>
    ));

    func = () => {
        console.log(props);
    }

    return <div className="react-chatbot-kit-chat-bot-message-container">

        <BotAvatar />
            <div className="react-chatbot-kit-chat-bot-message">
            I can help you with DMS process related questions. Select an option below, or type in your question.
                <div className="options-container">{buttonsMarkup}
                    
                </div>
                <button>Hello</button>
                hklajhsdjfkhsdkjfhkjahf
            </div>
    </div>;
};

export default Options;