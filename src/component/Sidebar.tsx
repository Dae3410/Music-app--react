import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import '../index.css'; // Ensure this imports your main styles

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
        <h2 className="sidebar-title">User Profiles</h2>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <button className="sidebar-toggle-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isVisible ? '>' : '<'}
        </button>
      </div>
    </>
  );
}



