// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={loggedIn ? 'navbar' : 'hide'}>
      {/* <h1>Fund mantra</h1> */}
      <div className="navbar-logo">

      <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1712046689/Mutual%20Funds%20Logo/Assets/1918d0276461ed980d6ec0cde30c771d-removebg-preview_aqi4jp.png" alt="" />
      </div>
      <div className="menu-icon">
        <button onClick={toggleMenu}>&#9776;</button>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        {loggedIn && <li><Link to="/">Home</Link></li>}
        {loggedIn && <li><Link to="/profile">Profile</Link></li>}
        {loggedIn && <li><Link to="/prediction">Prediction</Link></li>}
        {loggedIn && <li><Link to="/filter">Filter</Link></li>}
        {!loggedIn && <li><Link to="/">Login</Link></li>}
        {loggedIn && <li><button className='menu-btn' onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
