// StreamListHome.js

import React, { useState } from "react";

function StreamListHome() {
  const [input, setInput] = useState("");
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  
  const handleSubmit = () => {
    console.log(input);
  };
  
  return (
    <div className="streamlist-home-container">
      <h1>Welcome to StreamList!</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default StreamListHome;

