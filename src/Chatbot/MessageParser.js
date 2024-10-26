// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      // console.log(message);
      // console.log(this.state);

      if(message==="clear")
      {
        this.actionProvider.clearChatHandler();
      }

      else if(message==="menu")
      {
        // this.state.messages.push(message)
        // console.log("mesage parser", this.state.messages);
        // this.actionProvider.mainMenuHandler(this.state.messages);
        this.actionProvider.mainMenuHandler(message);
      }
      else 
      {
        this.actionProvider.handleQuery(message);
      }
    }

  }
  
  export default MessageParser;