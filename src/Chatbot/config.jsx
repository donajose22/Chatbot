// Config starter code
import { createChatBotMessage , createCustomMessage } from "react-chatbot-kit";
import Header from "../Components/Header";
import BotAvatar from "../Components/BotAvatar";
import Options from "../Components/Options/Options";
import CustomSendButton from "../Components/CustomSendButton/CustomSendButton";
import InitialMessage from "../Components/InitialMessage/InitialMessage";
import FormButtons from "../Components/FormButtons/FormButtons";



const config = {
  botName: "Ask DMS",

  initialMessages: [
  createCustomMessage("Test","custom"),
  createCustomMessage("Test","formButtons")
  ],
  state: {
    // messages: [createChatBotMessage(`Hi there, what can I help you with today?`, {
    //   widget: "options",
    // }),],
  },
  customComponents: {
    header: () => <Header />,
    botAvatar: () => <BotAvatar />,
    sendButton: () => <CustomSendButton />,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  customMessages: {
    custom: (props) => <InitialMessage {...props} />,
    formButtons: (props) => <FormButtons {...props} />
  },

};

export default config