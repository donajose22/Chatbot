import React from 'react'
import { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./feedback.css"

const Feedback = () => {

  const [isThumbsUp, setIsThumbsUp] = useState("none");

  const setThumbsUp = () => {
    setIsThumbsUp("up");
  };

  const setThumbsDown = () => {
    setIsThumbsUp("down");
  };

  return (
    <div className='feedback-buttons'>
      <span className='feedback-text'>Was this helpful?</span>  

      {isThumbsUp=="none" && (
        <>
        <button className='thumbs-up' onClick={setThumbsUp}><FaRegThumbsUp /></button>
        <button className='thumbs-down' onClick={setThumbsDown}><FaRegThumbsDown /></button>
        </>
      )}

      {isThumbsUp=="up" && (
              <>
              <button className='thumbs-up' ><FaThumbsUp /></button>
              <button className='thumbs-down' onClick={setThumbsDown}><FaRegThumbsDown /></button>
              </>
            )}

      {isThumbsUp=="down" && (
              <>
              <button className='thumbs-up' onClick={setThumbsUp}><FaRegThumbsUp /></button>
              <button className='thumbs-down'><FaThumbsDown /></button>
              </>
            )}
      
    </div>
  )
}

export default Feedback
