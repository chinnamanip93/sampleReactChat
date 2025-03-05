import React, { useEffect, useState } from "react";
import { getAllUser } from "../../features/user/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { stepButtonClasses } from "@mui/material";
import { io } from "socket.io-client";
import "./Messenger.css";
const Messenger = () => {
  const userInfo = useSelector((state) => state.user.usersInfo);
  const [newmessage, setNewmessage] = useState("");
  const [messages, setMessages] = useState("");
  const [onlinuser, setonlineuser] = useState([]);
  const dispatch = useDispatch();
  const BACK_END_SOCKET_URI = "http://localhost:8900";
  const socket = io(BACK_END_SOCKET_URI);

  useEffect(() => {
    const socket = io(BACK_END_SOCKET_URI);
    socket.emit("addUser", (userId, error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("getUsers", (users, error) => {
      if (error) {
        alert(error);
      }
      setonlineuser(users);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("getMessage", ({ senderId, receiverId, text }, error) => {
      if (error) {
        alert(error);
      }
      setMessages([...messages, { senderId, receiverId, text }]);
    });
  }, [messages]);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // socket.emit("getMessage", ({
    //   text: newmessage,
    //   senderId:

    // })=>);
  };
  console.log(userInfo);

  return (
    <>
      {/* <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            bottom: 0,
            position: "fixed",
            textAlign: "center",
            marginLeft: "20px",
          }}
        >
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="write something here.."
            value={newmessage}
            onChange={(e) => setNewmessage(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </div> */}

      <div className="chatbox">
        {/* <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="write something here.."
            value={newmessage}
            onChange={(e) => setNewmessage(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Messenger;
