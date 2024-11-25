import React, { useState, useEffect, useRef } from 'react';
import BotAvatar from '../BotAvatar';
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import "./CustomMessage.css"

const CustomMessage = (state, message) => {

  const [isDisplayed, setIsDisplayed] = useState("none");

  const expandCollapseContent = () => {
    if (isDisplayed=="block") {
      setIsDisplayed("none");
    }
    else {
      setIsDisplayed("block");
    }
  };

  // useEffect(() => {
  //   window.expandCollapseContent = function() {
  //     var content = document.querySelector('.sql-query-content');
  //     var header = document.querySelector('.query-collapsible');
  //     // console.log("expand collapse content function");
  //     // console.log(content);
  //     // console.log(content.style.display);
  //     if (content) {
  //       if (content.style.display === 'none' || content.style.display === '') {
  //         content.style.display = 'block';
  //         header.innerHTML = "SQL Query <div class='plusminus'>-</div>";
  //       } else {
  //         content.style.display = 'none';
  //         header.innerHTML = "SQL Query <div class='plusminus'>+</div>";
  //       }
  //     }
  //     // console.log("expand collapse content----------------------------");
  //     // console.log(content);
  //     // console.log(content.style.display);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleToggle = (event) => {
  //     console.log("handle toggle");
  //     if (event.target.matches('.query-collapsible')) {
  //       console.log("event matches query collapsible");
  //       console.log("id");
  //       console.log(event.target.id);
  //       var id = event.target.id;
  //       const content = event.target.nextElementSibling;
  //       // var content = document.getElementById(`sql-query-content-${id}`);
  //       // var content = document.getElementsByClassName("sql-query-content").getElementById(`${id}`);
  //       // var content = document.getElementById(id).getElementsByClassName("sql-query-content");

  //       // var elements = document.getElementsByClassName("sql-query-content");
  //       // console.log(contents);
  //       // // console.log(elements[0]);
  //       // var content = null;

  //       // for (let index = 0; index < elements.length; index++) {
  //       //   if(elements[index].id === id) {
  //       //     var content = elements[index]
  //       //   }
  //       // }

  //       console.log(content);
  //       if (content) {
  //         console.log("content contains sql query");
  //         if (content.style.display === 'none' || content.style.display === '') {
  //           console.log("Trying to change to block");
  //           content.style.display = 'block';
  //           event.target.innerHTML = "SQL Query <div class='plusminus'>-</div>";
  //           console.log(event.target);
  //         } else {
  //           console.log("Trying to change to none");
  //           content.style.display = 'none';
  //           event.target.innerHTML = "SQL Query <div class='plusminus'>+</div>";
  //         }
  //       }
  //       console.log(content);
  //     }
  //   };

  //   document.addEventListener('click', handleToggle);

  //   return () => {
  //     document.removeEventListener('click', handleToggle);
  //   };
  // }, []);

  // const [isToggled, setIsToggled] = useState(false);

  // const toggleButton = () => {
  //   setIsToggled(!isToggled);
  // };

  // useEffect(() => {
  //   const button = document.getElementById('toggleButton');
  //   button.addEventListener('click', toggleButton);
  //   return () => {
  //     button.removeEventListener('click', toggleButton);
  //   };
  // }, [isToggled]);

  // const buttonHTML = `
  //   <button id="toggleButton">
  //     ${isToggled ? 'ON' : 'OFF'}
  //   </button>
  // `;


  // console.log("ADAFDSFADSFASDFDSAFSDFSDAFDAFDFAASDFAFSDFDSFAFDA");
  // console.log(state.message.message['response']);
  return (
    <div className="react-chatbot-kit-chat-bot-message-container">
        <BotAvatar />
          <div className="react-chatbot-kit-chat-bot-message">
            <div dangerouslySetInnerHTML={{ __html: state.message.message['response'] }}></div>
            {state.message.message['is_sql_query']=="1" && isDisplayed=="none" && (
              <>
                <button type="button" class="query-collapsible" onClick={expandCollapseContent}>SQL Query <div class='plusminus'>+</div></button>
                <div className='sql-query-content' style={{display:'none'}} >{state.message.message['sql_query']}</div>
              </>
            )}

            {state.message.message['is_sql_query']=="1" && isDisplayed=="block" && (
              <>
                <button type="button" class="query-collapsible" onClick={expandCollapseContent}>SQL Query <div class='plusminus'>-</div></button>
                <div className='sql-query-content' style={{display:'block'}} >{state.message.message['sql_query']}</div>
              </>
            )}
            
          </div>
    </div>
  )

};

export default CustomMessage;
