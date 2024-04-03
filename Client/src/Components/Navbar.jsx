// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser  } from '../Slice/userSlice';
import { useDispatch } from 'react-redux';
const Navbar = ({ loggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(true);
const dispatch=useDispatch();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    // Dispatch logoutUser thunk action
    dispatch(logoutUser());
  };

  return (
    <nav className={loggedIn ? 'navbar' : 'hide'}>
      {/* <h1>Fund mantra</h1> */}
      <div className={loggedIn?"navbar-logo":'opacity'}>

      <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1712046689/Mutual%20Funds%20Logo/Assets/1918d0276461ed980d6ec0cde30c771d-removebg-preview_aqi4jp.png" alt="" />
      </div>
      <div className="menu-icon">
        <button onClick={toggleMenu}>&#9776;</button>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        {loggedIn && <li><Link to="/">Home</Link></li>}
        {loggedIn && <li><Link to="/profile">Profile</Link></li>}
        {loggedIn && <li><Link to="/prediction">Prediction</Link></li>}
        {!loggedIn && <li><Link to="/">Login</Link></li>}
        {loggedIn && <li><button className='button menu-btn' onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
