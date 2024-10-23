import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import '../index.css'; // Ensure you import your CSS file

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className="sidebar">
          <h2 className="sidebar-title">User Profiles</h2>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <button className="btn btn-light p-1 border" onClick={toggleSidebar}>
            {"<"} 
          </button>
        </div>
      )}
      {!isVisible && (
        <button className="btn btn-light p-1 border" onClick={toggleSidebar}>
          {">"} 
        </button>
      )}
    </>
  ); 
}


