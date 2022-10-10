// import React, { useState } from 'react';
import './css/chat.css'

const Message = ({ isSender, UserName, UserImage }) => { 
  
  return(
    <div className={`messageBubble ${isSender === "true" ? "sender" : "reciever"}`}>
      <h1>{isSender}</h1>
    </div>
  )
}

const Chat = () => {
  return(
    <div className="Chat">
      <Message isSender="true" UserName="Yopi" UserImage="Soon" />
      <Message isSender="false" UserName="Yopi" UserImage="Soon" />
    </div>
  )
}

export default Chat