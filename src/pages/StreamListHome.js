import React, { useState } from "react";

function StreamListHome({ onAddEvent }) {
  const [input, setInput] = useState("");

  // Function for input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function for submission of form
  const handleSubmit = (event) => {
    event.preventDefault(); // As per Prof Kanto feedback, prevents the default form submission behavior
    console.log(input);
    onAddEvent(`User submitted: ${input}`); 
    setInput(""); 
  };

  return (
    <div className="streamlist-home-container">
      <h1>Search Movies</h1>
      {/* Form element to wrap input and button */}
      <form onSubmit={handleSubmit}> 
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamListHome;
// original
