import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const  user = JSON.parse(localStorage.getItem('userInfo'));
  const [formData, setFormData] = useState({
    name: user.name,
    dob: '01/01/1990',
    email: user.email,
    mobile: '9876543210',
    goal: 'Short Term',
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
    <div className="profile">

   
    <div className="profile-container">
    

      <div className="profile-image">
        <img src="https://res.cloudinary.com/df0bb8ly2/image/upload/v1712053815/Mutual%20Funds%20Logo/Assets/b.73b74158_xgywlm.png"
          alt="Profile" className="profile-img" />
        <h1 className="profile-h3">{formData.name}</h1>
      </div>
      <div>
        {isEditing ? (
          <form className='profile-form-grid' onSubmit={handleSubmit}>
            <div className="profile-grid-item">
              <label>Name :</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <br />
            <div className="profile-grid-item">
              <label>DOB :</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
            </div>
            <br />
            <div className="profile-grid-item">
              <label>Email :</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <br />
            <div className="profile-grid-item">
              <label>Mobile :</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
            </div>
            <br />
            <div className="profile-grid-item">
              <label>Goal : </label>
              <select name="goal" value={formData.goal} onChange={handleInputChange}>
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
                <option value="Retirement">Retirement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <br />
            <button type="submit" className="profile-grid-item">Submit</button>
          </form>
        ) : (
          <div className="profile-info">
            <div>DOB : {formData.dob}</div>
            <div>Email : {formData.email}</div>
            <div>Mobile : {formData.mobile}</div>
            <div>Goal : {formData.goal}</div>
           
            <button className='edit' onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )}
      </div>
    </div>
     </div>
  );
};

export default Profile;
