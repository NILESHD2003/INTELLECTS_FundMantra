import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { sentOTP } from '../Slice/userSlice';


function SignUp() {
const dispatch=useDispatch()
  const navigate = useNavigate();


  // const handleSubmit = () => {
  //   localStorage.setItem('signupData', JSON.stringify(formData));
  //   history.push('/otp');
  // };


 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: '',
    goal: '',
  });
  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem('signupData', JSON.stringify(formData));
    dispatch(sentOTP(formData.email));
    navigate('/otp');
   
  };


  return (
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

 <div className="form-group">
          <label htmlFor="phoneNo">phoneNo:</label>
         <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange}/>
        </div>


        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
       
        <div className="form-group">
          <label htmlFor="goal">Goal:</label>
          <select id="goal" name="goal" value={formData.goal} onChange={handleChange}>
            <option value="">Select Goal</option>
            <option value="short-term">Short Term</option>
            <option value="long-term">Long Term</option>
            <option value="retirement">Retirement</option>
          </select>
        </div>
        <button className='button' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
