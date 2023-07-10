import React from "react";
import { Link } from "react-router-dom";

function Greeting() {
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Greeting</p>
    </div>
  )
};

export default Greeting;