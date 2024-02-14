import { useState } from "react";
import PuppyList from "./components/PuppyList";
import { Routes, Route, Link } from "react-router-dom";
import PlayerDetail from "./components/PlayerDetail";
function App() {
  return (
      <div id="container">
        <div id="links">
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<PuppyList/>} />
            <Route path="/:puppyid" element={<PlayerDetail/>} />
          </Routes>
        </div>
        </div>
  )};
  export default App