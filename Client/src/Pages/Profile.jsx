import React, { useState } from 'react';
import './Profile.css'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    dob: '01/01/1990',
    email: 'johndoe@example.com',
    mobile: '9876543210',
    goal: 'Short Term',
    token: 'gsh532vs723b',
    password: '123-456-7890',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can add logic to submit the form data to a backend API or store it locally
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1712053815/Mutual%20Funds%20Logo/Assets/b.73b74158_xgywlm.png"
          alt="Profile" className="profile-img" />
        <h1 className="profile-h3">{formData.name}</h1>
      </div>
      <div>
        {isEditing ? (
          <form className='form-grid' onSubmit={handleSubmit}>
            <div className="grid-item">
              <label>Name :</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <br />
            <div className="grid-item">
              <label>DOB :</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
            </div>
            <br />
            <div className="grid-item">
              <label>Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <br />
            <div className="grid-item">
              <label>Mobile :</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>
            <br />
            <div className="grid-item">
              <label>Goal : </label>
              <select name="goal" value={formData.goal} onChange={handleInputChange}>
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
                <option value="Retirement">Retirement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <br />
            <div className="grid-item">
              <label>Token :</label>
              <input type="text" name="token" value={formData.token} onChange={handleInputChange} />
            </div>
            <br />
            <div className="grid-item">
              <label>Password :</label>
              <input type="text" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <br />
            <button type="submit" className="grid-item">Submit</button>
          </form>
        ) : (
          <div className="profile-info">
            <div>DOB : {formData.dob}</div>
            <div>Email : {formData.email}</div>
            <div>Mobile : {formData.mobile}</div>
            <div>Goal : {formData.goal}</div>
            <div>Token : {formData.token}</div>
            <div>Password : {formData.password}</div>
            <button className='edit' onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
