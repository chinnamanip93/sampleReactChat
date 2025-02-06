import React, { useEffect, useState } from "react";
import { getAllUser } from "../../features/user/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { stepButtonClasses } from "@mui/material";
import { io } from "socket.io-client";

const Messenger = () => {
  const userInfo = useSelector((state) => state.user.usersInfo);
  const [newmessage, setNewmessage] = useState("");
  const [messages, setMessages] = useState("");
  const dispatch = useDispatch();
  const BACK_END_SOCKET_URI = "http://localhost:8900";
  const socket = io(BACK_END_SOCKET_URI);

  useEffect(() => {
    socket.on("receiveMessage", (newmessage) => {
      setNewmessage("");
      setMessages((prevMessages) => [...prevMessages, newmessage]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(userInfo);

  return (
    // <div>
    //   UserDetails
    //   {userInfo?.map((item, i) => (
    //     <>
    //       <p key={i}>{item.email}</p>
    //     </>
    //   ))}
    // </div>

    <>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="write something here.."
              value={newmessage}
              onChange={(e) => setNewmessage(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Messenger;
