// ActionProvider starter code
import Loader from "../Components/Loader";

class ActionProvider {
    constructor (
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   mainMenuHandler = (msgs) => {
      const message = this.createCustomMessage("Test","custom");
      this.addMessageToState(message);
   };

   clearChatHandler = () => {
    const message = this.createCustomMessage("Test","formButtons");
    this.setState(state => ({ ...state, messages: [message]}));
   };

   handleAboutDMS = () => {
    const message = this.createClientMessage("About DMS");
    this.addMessageToState(message);

    // const loading = this.createChatBotMessage(<Loader />);
    // console.log(loading);
    //this.addMessageToState(msgs);

    //this.addMessagesToState(message, loading);

    const message2 = this.createChatBotMessage("DMS - Disclosure Management System");
    this.addMessageToState(message2);
    //this.replacePrevMessage(message2);
   }

   handleGeneralInformation = () => {
    const message = this.createClientMessage("General Information");
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage("General Information about DMS - Disclosure Management System. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis repellendus cum odio vitae dicta incidunt iure adipisci, in officiis ea assumenda corrupti quis commodi illo minima tempore autem at!");
    this.addMessageToState(message2);
   }

   addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));

    
  };

  addMessagesToState = (m1, m2) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, m1, m2],
    }));
  };

  replacePrevMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages.slice(0, -1), message],
    }));
  };




 }
 
 export default ActionProvider;