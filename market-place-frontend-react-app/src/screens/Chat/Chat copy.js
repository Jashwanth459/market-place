import React from "react";
import io from 'socket.io-client';
import { useState, useEffect } from "react";
// import "../css/chat.css"

function Chat() {
  const name = localStorage.getItem("jwt")
  // window.localStorage.clear(); 
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const username = name;
  const room = 10
  const socket = io.connect("http://localhost:4000");
  socket.emit("join_room", room);
  const [showChat, setShowChat] = useState(false);

  const sendMessage = async () => {

    //setShowChat(true);
    console.log(currentMessage)
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  const closeForm = (event) => {
    const modal = document.querySelector(".chat-popup");
    modal.style.display = "none";
    event.preventDefault();
  }
  const openForm = (event) => {
    const modal = document.querySelector(".chat-popup");
    modal.style.display = "block";
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={openForm}>
        <button type="submit" className="open-button">Chat with us</button>
      </form>
      <div className="chat-popup" id="myForm">
        <div className="form-container">
          <h1>Chat</h1>
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <form>
            <button type="submit" className="btn" onClick={sendMessage}>Send</button>
          </form>
          <form onSubmit={closeForm}>
            <button type="submit" className="btn cancel">Close</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Chat;