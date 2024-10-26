import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import config from "../Chatbot/config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";
import FormButtons from './FormButtons/FormButtons';
import { FaRegWindowMinimize } from "react-icons/fa";
import { MdOutlineFullscreen } from "react-icons/md";

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import '../App.css';

const ChatbotButton = ({ isToggled, isMaximizedChatbot }) => {

  // console.log(isMaximizedChatbot);
  // console.log(isToggled);
  //const history = useHistory();
  const navigateTo = useNavigate();


  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState("none");
  const [isMaximized, setIsMaximized] = useState(isMaximizedChatbot);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsDisplayed("none");
    }
    else {
      setIsDisplayed("block");
    }
  };

  const maximizeChatbot = () => {
    // setIsMaximized(!isMaximized);
    setIsMaximized(true);
    // console.log(isMaximized);
  };

  const validator = (input) => {
    if (input.length > 0) return true;
    return false
  }

  return (
    <>
      {!isMaximizedChatbot && (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <button className="chatbot-icon-button" onClick={toggleChatbot}>
            {isOpen && (
              <div className='chatbot-icon-open-button'><IoClose></IoClose></div>
            )}
            {!isOpen && (
              <img src="https://c0avaamo.s3-us-west-2.amazonaws.com/dashboard/bots/avatars/000/074/205/medium/Group_33.png?1708487017" className='chatbot-icon' />
            )}
          </button>

          <div className='chatbot-popup' style={{ display: isDisplayed }}>

            <div className='header-minimize-button'>
              <Link target={"_blank"} to="/maximize-chatbot">
                <button className='fullscreen-button' onClick={maximizeChatbot}><MdOutlineFullscreen /></button>
              </Link>

              <button className='minimize-button' onClick={toggleChatbot}><FaRegWindowMinimize></FaRegWindowMinimize></button>
            </div>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              validator={validator}
            />

          </div>
        </>

      )}


      {isMaximizedChatbot && (


        <div className='chatbot-max'>


          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            validator={validator}
          />

        </div>
      )}


    </>
  );
};

export default ChatbotButton;
