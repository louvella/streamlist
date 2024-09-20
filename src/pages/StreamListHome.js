// streamlisthome.js
import React, { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

function StreamListHome({ onAddEvent }) {
  const [input, setInput] = useState('');
  const [movies] = useLocalStorage('movies', [])
  const [filteredMovies, setFilteredMovies] = useState([])

  // Function for input change
  const handleInputChange = (event) => {
    setInput(event.target.value);

    if (!input) {
      setFilteredMovies(movies)
    }

    // Log search event 
    onAddEvent(`Search Event:User searched string ${event.target.value}`)
    
    // Filter movies based on input
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="streamlist-home-container">
      <h1>Search Movies</h1>
      <form>
        <input type="text" value={input} onChange={handleInputChange} />
      </form>
      {/* Display the filtered movies */}
      <ul>
        {(filteredMovies.length ? filteredMovies : movies).map((movie) => (
          <li key={movie.id}>
            {movie.title} (Rating: {movie.vote_average})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamListHome;
