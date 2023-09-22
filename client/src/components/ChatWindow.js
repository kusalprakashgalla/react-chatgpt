import React, { useState } from "react";
import axios from "axios";

const ChatWindow = (props) => {
  let chatWrapper = document.querySelector("#chat-messages");

  if (chatWrapper !== null) {
    chatWrapper.scrollTo({ top: chatWrapper.scrollHeight, behavior: "smooth" });
  }

  let [messagelist, setMessagelist] = useState([]);

  const handleClick = async (value) => {
    setMessagelist((prevmsgs) => {
      return [...prevmsgs, value];
    });
    try {
      const response = await axios.post(`http://localhost:5050/messages`, {
        message: value,
      });
      console.log(response.data);
      setMessagelist((prevmsgs) => {
        return [...prevmsgs, response.data];
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="chatbot">
      <nav className="flow-text">Chat window</nav>
      <div className="chat-box-body" id="chat-messages">
        {messagelist.map((val, index) => (
          <div key={index} className={`chat-logs ${index % 2 === 0 ? 'even' : 'odd'}`}>
            {val}
          </div>
        ))}
      </div>
      <div className="input-div">
        <input
          className="none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value !== "") {
                handleClick(e.target.value);
                e.target.value = null;
              }
            }
          }}
          type="search"
          placeholder="enter query"
        />
      </div>
    </section>
  );
};

export default ChatWindow ;
