// src/components/UserProfile.js
import React from 'react';

const UserProfile = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;