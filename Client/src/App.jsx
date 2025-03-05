import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Messenger from "./pages/message/Messenger.jsx";
import Home from "./pages/Home/Home.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/message" exact element={<Messenger />} />
          <Route path="/Home" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
