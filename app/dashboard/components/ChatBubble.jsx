import React from "react";

export default function ChatBubble(props) {
  return (
    <>
      <div className={`chat ${props.isSent ? "chat-end" : "chat-start"} `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://picsum.photos/200" />
          </div>
        </div>
        <div className="chat-header mb-1">
          <span className="link link-primary">{props.sender}</span>
          <time className="text-xs opacity-50 ml-2">{props.time}</time>
        </div>
        <div className="chat-bubble">{props.message}</div>
      </div>
    </>
  );
}
