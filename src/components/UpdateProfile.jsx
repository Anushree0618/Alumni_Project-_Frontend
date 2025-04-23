import React, { useState } from 'react';
import './UpdateProfile.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    email: 'vaishuu@gmail.com',
    contact: '8888888888',
    passOutYear: '2024',
    company: 'Wipro',
    gender: 'F',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const isValidContact = (contact) => {
    return /^\d{10}$/.test(contact);
  };

  const handleEdit = () => {
    if (!isValidContact(profile.contact)) {
      alert('Please enter a valid 10-digit contact number without spaces.');
      return;
    }
    console.log('Profile updated:', profile);
    // You can also send this to the backend here
  };

  return (
    <div className="profile-container">
      <h2>Welcome {profile.email.split('@')[0]}</h2>

      <label>Email:</label>
      <input type="email" name="email" value={profile.email} onChange={handleChange} disabled />

      <label>Contact:<span className="required">*</span></label>
      <input
        type="text"
        name="contact"
        value={profile.contact}
        onChange={handleChange}
        title="Please enter a valid 10-digit contact number without spaces"
      />

      <label>Pass Out Year:<span className="required">*</span></label>
      <input
        type="text"
        name="passOutYear"
        value={profile.passOutYear}
        onChange={handleChange}
      />

      <label>Company:</label>
      <input
        type="text"
        name="company"
        value={profile.company}
        onChange={handleChange}
      />

      <label>Gender:<span className="required">*</span></label>
      <input
        type="text"
        name="gender"
        value={profile.gender}
        onChange={handleChange}
      />

      <button onClick={handleEdit}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;


