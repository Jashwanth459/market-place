import React from "react";
import io from 'socket.io-client';
import { useState, useEffect } from "react";
import ChatBox from "./CharBox";
import { NavigationHeader } from '../../components/NavigationHeader/NavigationHeader'
import { Footer } from '../../components/Footer/Footer'
// import "../css/chat.css"
import './Chat.css'
const socket = io.connect("http://localhost:4000");

function Chat() {
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const userObject = window?.localStorage?.user_object && JSON.parse(window.localStorage.user_object)
    let user_name = `${userObject?.data && userObject?.data[0]?.FName} ${userObject?.data && userObject?.data[0]?.LName} (${userObject?.user_type})`
    console.log('user_name', userObject)
    setUsername(user_name)
  }, [])

  const joinRoom = () => {
    if (username != "" && room != "") {
      socket.emit("join_room", room)
      setShowChat(true);
    }
  }
  return (
    <div>
      <NavigationHeader />
      <h2 style={{top: '30%'}}>Chat Window</h2>
      <h2 style={{top: '30%'}}>Chat Window</h2>
      <div>
      {
        !showChat ? (<div className="joinChatContainer">
          <center>
            <h3>Join a Chat</h3>
            <input type="text" placeholder="John..." value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <br />
            <input type="text" placeholder="Room ID..." onChange={(e) => setRoom(e.target.value)}></input>
            <br />
            <button onClick={joinRoom}>Join a room</button>
          </center>
        </div>) : <ChatBox socket={socket} username={username} room={room} />
      }
      </div>
      {/* <Footer /> */}
    </div>
  );
}
export default Chat;