import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUserAsync } from '../Slice/userSlice'; // Import your login action from the user slice

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Dispatch login action with user data
    dispatch(loginUserAsync(formData));
  };

  return (
    <div className='login'>
      <div className="form">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter Your Email" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter Your Password" 
            value={formData.password} 
            onChange={handleInputChange} 
          />
        </div>
        <button className='button' onClick={handleLogin}>Log-in</button>
        <Link to="/signup">Sign-up</Link>
      </div>
    </div>
  );
};

export default Login;
