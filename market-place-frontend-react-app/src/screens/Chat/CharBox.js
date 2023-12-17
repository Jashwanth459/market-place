import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function ChatBox({ socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                message_id: messageList.length+1,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            console.log('message data', messageList, messageData)
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log('message list ', messageList, data)
            return setMessageList((list) => {
                if(data.message_id == list.length) {
                    return list
                }
               return [...list, data]
            });
        });
        socket.on("room_info", (data) => {
            console.log('room info ', data)
            return 
        });
    }, [socket]);

    return (
        <center>
            <h2 style={{top: '30%'}}>Chat Window</h2>
            <div className="chat-window">
                <div className="chat-body">
                    <ScrollToBottom className="message-container">
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
                    </ScrollToBottom>
                </div>
                <div className="chat-footer">
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
                    <button onClick={sendMessage}>&#9658;</button>
                </div>
            </div>

        </center>
    );
}

export default ChatBox;