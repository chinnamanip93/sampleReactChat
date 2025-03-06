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

      <div>
        <div
          style={{
            width: "100%",
            height: "460px",
            overflow: "scroll",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quidem adipisci officiis quibusdam dolorum dignissimos, voluptatum
          fuga eaque reiciendis, doloremque asperiores molestiae facere ipsa
          quam laudantium itaque harum quas suscipit. Sunt sequi esse,
          perspiciatis minima laudantium dolorum commodi possimus est id,
          molestias non veritatis? Ab aspernatur harum nobis, consectetur cumque
          debitis. Sapiente dolorum velit labore alias, voluptatibus corporis
          molestiae error! Fugit nesciunt, ex dicta dolor magni laudantium?
          Recusandae accusamus ipsa temporibus harum fugit nisi consequatur
          expedita, quia tempora perspiciatis molestiae dignissimos commodi
          consequuntur, dolore, eaque corrupti aliquam quidem itaque incidunt!
          Perferendis soluta illo voluptatum at vero? Neque, ex laborum
          voluptate est corporis culpa ut id laboriosam! A cumque dicta quas
          explicabo quibusdam. Quae numquam repudiandae commodi vero animi fugit
          asperiores! Minima quos ipsum labore minus cum, hic voluptas quia
          natus explicabo? Culpa accusamus temporibus ipsum ullam animi unde hic
          modi nam, et corporis, praesentium itaque id reiciendis sequi! Neque,
          minima? In facere quo cumque, vel nam voluptas molestiae ad quos
          repudiandae fuga dolorum suscipit reiciendis, aperiam sequi molestias
          corporis numquam quia, aliquam aspernatur. Fugiat mollitia atque
          perspiciatis explicabo non esse! Repudiandae aliquam totam praesentium
          accusamus quisquam vero accusantium enim neque corrupti quis
          laboriosam soluta repellendus maiores doloribus magni facilis,
          explicabo illo at libero molestiae nam nobis delectus. Deleniti,
          recusandae nemo! Ducimus pariatur commodi corrupti reprehenderit
          maiores quam, dolorem voluptatem ad quaerat cum cumque provident
          beatae inventore deserunt nulla neque quia. Enim placeat excepturi
          officia recusandae labore qui, iste fugiat quasi? Tenetur veniam
          voluptas adipisci sit doloribus maxime amet officiis, enim
          consequuntur natus neque assumenda, ab odio eligendi aut! In maxime
          libero ipsum placeat error officia accusamus modi facere omnis iste.
          Dolorem quia velit ducimus totam temporibus tenetur adipisci voluptas
          nisi porro cupiditate aut debitis perspiciatis incidunt omnis in sint,
          consequuntur recusandae qui tempora dolores non? Neque magnam corrupti
          reprehenderit quisquam.
        </div>
        {/* <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div> */}
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="write something here.."
              value={newmessage}
              onChange={(e) => setNewmessage(e.target.value)}
              style={{ width: "90%", padding: "13px" }}
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Messenger;
