// src/CustomSendButton.js
import React from 'react';

const CustomSendButton = ({ onClick }) => {
  return (
    <button className="custom-send-button" onClick={onClick}>
      Send
    </button>
  );
};

export default CustomSendButton;
