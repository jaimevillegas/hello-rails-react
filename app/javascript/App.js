import React from "react";
import Greeting from "./Greeting";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Link to="/greeting">Greeting</Link>
          <p>Home</p>
        </div>
      }
      />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  )
}

export default App;