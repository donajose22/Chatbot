// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      console.log(this.state);

      if(message==="clear")
      {
        this.actionProvider.clearChatHandler();
      }

      if(message==="menu")
      {
        // this.state.messages.push(message)
        // console.log("mesage parser", this.state.messages);
        // this.actionProvider.mainMenuHandler(this.state.messages);
        this.actionProvider.mainMenuHandler(message);
      }
    }

  }
  
  export default MessageParser;