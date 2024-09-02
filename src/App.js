import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamListHome from "./pages/StreamListHome";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import About from "./pages/About";
import './App.css';
import homeIcon from './assets/home.png'; // Add your image paths here
import moviesIcon from './assets/movies.png';
import cartIcon from './assets/cart.png';
import aboutIcon from './assets/about.png';
import logo from './assets/sllogo.png';

function App() {
  return (
    <Router>
      <div className="streamlist-home-container">
      <img src={logo} alt="StreamList Logo" className="streamlist-logo" />
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">
                <img src={homeIcon} alt="Home" className="menu-icon" />
              </Link>
            </li>
            <li>
              <Link to="/movies">
                <img src={moviesIcon} alt="Movies" className="menu-icon" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src={cartIcon} alt="Cart" className="menu-icon" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src={aboutIcon} alt="About" className="menu-icon" />
              </Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<StreamListHome />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;