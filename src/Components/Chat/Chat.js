import React from "react";
import ChatInfo from "./ChatInfo/ChatInfo";

import "./Chat.scss";
import SendBox from "./SendBox/SendBox";
import Messages from "./Message/Messages";
function Chat() {
  return (
    <div className="chat">
      <ChatInfo />
      <Messages />
      <SendBox />
    </div>
  );
}

export default Chat;
