import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Messenger from "./pages/message/Messenger.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/message" exact element={<Messenger />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
