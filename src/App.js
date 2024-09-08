import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamListHome from "./pages/StreamListHome";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import About from "./pages/About";
import User from "./pages/User";
import UserInformation from "./pages/UserInformation"; 
import UserPassword from "./pages/UserPassword"; 
import UserPayment from "./pages/UserPayment";
import UserSubscription from "./pages/UserSubscription";
import './App.css';
import homeIcon from './assets/home.png'; 
import moviesIcon from './assets/movies.png';
import cartIcon from './assets/cart.png';
import aboutIcon from './assets/about.png';
import userIcon from './assets/user.png';
import logo from './assets/sllogo.png';

function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const handleClearEvents = () => {
    setEvents([]);
  };

  const handleIconClick = (iconName) => {
    handleAddEvent(`Icon Click: ${iconName} icon clicked`);
  };

  const handleIconHover = (iconName) => {
    handleAddEvent(`Icon Hover: ${iconName} icon hovered`);
  };

  return (
    <Router>
      <div className="streamlist-home-container">
        <header className="header">
          <img src={logo} alt="StreamList Logo" className="streamlist-logo" />
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src={homeIcon}
                    alt="Home"
                    className="menu-icon"
                    onClick={() => handleIconClick('Home')}
                    onMouseEnter={() => handleIconHover('Home')}
                  />
                </Link>
              </li>
              <li>
                <Link to="/movies">
                  <img
                    src={moviesIcon}
                    alt="Movies"
                    className="menu-icon"
                    onClick={() => handleIconClick('Movies')}
                    onMouseEnter={() => handleIconHover('Movies')}
                  />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <img
                    src={cartIcon}
                    alt="Cart"
                    className="menu-icon"
                    onClick={() => handleIconClick('Cart')}
                    onMouseEnter={() => handleIconHover('Cart')}
                  />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <img
                    src={aboutIcon}
                    alt="About"
                    className="menu-icon"
                    onClick={() => handleIconClick('About')}
                    onMouseEnter={() => handleIconHover('About')}
                  />
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <img
                    src={userIcon}
                    alt="User"
                    className="menu-icon"
                    onClick={() => handleIconClick('User')}
                    onMouseEnter={() => handleIconHover('User')}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<StreamListHome onAddEvent={handleAddEvent} />} />
          <Route path="/movies" element={<Movies onAddEvent={handleAddEvent} />} />
          <Route path="/cart" element={<Cart onAddEvent={handleAddEvent} />} />
          <Route path="/about" element={<About onAddEvent={handleAddEvent} />} />
          <Route path="/user" element={<User onAddEvent={handleAddEvent} />} />
          {/* Submenu */}
          <Route path="/user/information" element={<UserInformation />} />
          <Route path="/user/password" element={<UserPassword />} />
          <Route path="/user/payment" element={<UserPayment />} />
          <Route path="/user/subscription" element={<UserSubscription />} />
        </Routes>

        <div className="user-events-container">
          <h2>User Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
          {events.length > 0 && (
            <button onClick={handleClearEvents}>Clear Events</button>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
