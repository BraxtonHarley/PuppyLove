import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar"
;import './ChatScreen.css';

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Finn",
      image: "",
      message: "HI!!",
    },
    {
      name: "Finn",
      image: "",
      message: "I like your pic",
    },
    {
      message: "Thanks!",
    },
  ]);

  return (
    <div class="chatScreen">
        <p className="chatScreen__timestamp"> YOU MATCHED WITH FINN</p>
      {messages.map((message) => (
        //   message.name ? (

        //   )
        <div className="chatScreen__message">
            <Avatar
            className="chatScreen__image" 
            alt={message.name} 
            src={message.image} 
            />
            <p className="chatScreen__text"> {message.message} </p>
        </div>
      ))}
    </div>
  );
}

export default ChatScreen;
