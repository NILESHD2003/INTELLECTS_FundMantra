// OtpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyOTP } from '../Slice/userSlice';
import { useDispatch } from 'react-redux';

function OtpPage() {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const signupData = JSON.parse(localStorage.getItem('signupData'));
    dispatch(verifyOTP({ otpValues, signupData }));
    navigate('/');
  };

  const handleChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index !== 0 && otpValues[index] === '') {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index - 1] = '';
      setOtpValues(updatedOtpValues);
    } else if (/^[a-zA-Z0-9]*$/.test(e.key) && index < 3) {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index + 1] = '';
      setOtpValues(updatedOtpValues);
    }
  };

  return (
   <div className="otp">
      <div className="otp-container">
        <h2>Enter OTP</h2>
        <form onSubmit={handleSubmit} className="otp-inputs">
          {otpValues.map((value, index) => (
            <input
              key={index}
              type="text"
              id="otp-input"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
          <button type='submit' className='button'>Submit</button> 
        </form>
      </div>
    </div>
  );
}

export default OtpPage;
