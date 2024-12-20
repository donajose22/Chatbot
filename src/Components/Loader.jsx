
import React from 'react';
import BotAvatar from './BotAvatar';

const Loader = () => {
  return (
    <div className='chatbot-loader-container'>
      <BotAvatar />
      
      <svg
        id='dots'
        width='50px'
        height='15px'
        viewBox='0 0 132 58'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g stroke='none' fill='none'>
          <g id='chatbot-loader' fill='#157acc'>
            <circle id='chatbot-loader-dot1' cx='25' cy='30' r='13'></circle>
            <circle id='chatbot-loader-dot2' cx='65' cy='30' r='13'></circle>
            <circle id='chatbot-loader-dot3' cx='105' cy='30' r='13'></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
