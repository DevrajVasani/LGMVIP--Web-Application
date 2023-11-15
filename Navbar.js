import React from 'react';
import './Navbar.css'; // Import your custom CSS file

const Navbar = ({ onGetUsers }) => {
  return (
    <div className="navbar">
      <div className="brand">Your Brand Name</div>
      <button onClick={onGetUsers}>Get Users</button>
    </div>
  );
};

export default Navbar;
