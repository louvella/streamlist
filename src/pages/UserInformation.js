// UserInformation.js

import React from "react";
import { Link } from "react-router-dom";

function UserInformation() {
  return (
    <div className="streamlist-home-container">
      <nav className="submenu">
        <ul>
          <li><Link to="/user/information">Information</Link></li>
          <li><Link to="/user/password">Password</Link></li>
          <li><Link to="/user/payment">Payment</Link></li>
          <li><Link to="/user/subscription">Subscription</Link></li>
        </ul>

      </nav>
      <h1>Modify Member Contact Information</h1>
        <div>User name: John Smith
        <p>Address: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>City:</p>
        <p>State:</p>
        <p>Zip:</p>
        <p>Phone Number:</p>
        <p>Email Address:</p>
        </div>
    </div>
  );
}

export default UserInformation;
