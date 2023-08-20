import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import CreateRoom from "./components/CreateRoom/CreateRoom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Game from "./components/Game/Game";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("https://backend-game1.onrender.com");
// const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/createRoom"
              element={<CreateRoom socket={socket} />}
            ></Route>
            <Route
              path="/joinRoom"
              element={<JoinRoom socket={socket} />}
            ></Route>
            <Route
              path="/game/:roomId"
              element={<Game socket={socket} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
