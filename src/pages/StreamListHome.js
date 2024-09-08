import React, { useState } from "react";

function StreamListHome({ onAddEvent }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    console.log(input);
    onAddEvent(`User submitted: ${input}`); 
    setInput(""); 
  };

  return (
    <div className="streamlist-home-container">
      <h1>Search Movies</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default StreamListHome;

