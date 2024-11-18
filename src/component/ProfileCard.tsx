import React from 'react';

const ProfileCard = ({ profile }) => (
  <div className="profile-card">
    <h3>{profile.name}</h3>
    <p>Genre: {profile.genre}</p>
  </div>
);

export default ProfileCard;