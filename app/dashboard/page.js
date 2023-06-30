"use client";

import ChatBubble from "./components/ChatBubble";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { PiSmiley } from "react-icons/pi";

import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const [addEmoji, setAddEmoji] = useState("");

  //   Validating Message input
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //   const appendEmojiToMessage = (emoji) => {
  //     const textarea = document.getElementById("message-textarea");
  //     textarea.value += emoji.emoji;
  //   };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      //   addMessage(inputValue);
      if (inputValue.trim() !== "") {
        addMessage(inputValue);
      }
    }
  };
  const addMessage = (message) => {
    const newMessage = {
      sender: "Me",
      message: message,
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiPickerClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <>
      <section className="flex">
        <aside>
          <Sidebar />
        </aside>
        <div className=" w-full">
          <header className="sticky top-0 z-20">
            <Navbar />
          </header>

          {/* Message container */}
          <div className="p-5 h-[75vh] overflow-y-auto custom-scrollbar">
            {/* Greetings */}
            <div className="">
              <h2 className="text-2xl font-medium">Welcome to #general-chat</h2>
              <p className="mt-2">
                This is the start of #general-chat channel.
              </p>
            </div>
            {/* Divider */}
            <div className="divider text-xs text-gray-500">Jul 1, 2023</div>
            {/* Messages */}
            <div id="chat-box">
              <ChatBubble
                message="Hi Rohan 👋, How are you doing?"
                time="05:32 PM"
                sender="Gourav"
              />
              <ChatBubble
                isSent={true}
                message="Hi Gourav, I'm doing great! How 'bout u?"
                time="05:32 PM"
                sender="Rohan K"
              />
              {messages.map((message, index) => {
                return (
                  <ChatBubble
                    isSent={true}
                    key={index}
                    message={message.message}
                    time="05:32 PM"
                    sender={message.sender}
                  />
                );
              })}
            </div>
          </div>

          {/* Message Input */}
          <div className="py-2 px-3 flex items-center sticky bg-[#2d353d] bottom-0">
            {/* <EmojiPicker /> */}
            <PiSmiley size={28} onClick={handleEmojiPickerClick} p />

            <textarea
              type="text"
              placeholder="Message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              class="input h-full w-full active:outline-none bg-[#2d353d] focus:outline-none"
            />

            {showEmojiPicker && (
              <div ref={emojiPickerRef} className="absolute bottom-0">
                {/* Render your emoji picker component here */}
                <EmojiPicker
                  theme="dark"
                  height={300}
                  onEmojiClick={addEmoji}
                  previewConfig={{ showPreview: false }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
