import React from 'react'
import ProfileCard from './ProfileCard'
import Playlist from './Playlist';

const sidebarStyle: React.CSSProperties = {
    backgroundColor: 'white', // Light gray background
    borderRight: '1px solid #ddd', // Light gray border on the right
    padding: '10px', // Padding inside the sidebar
    width: '150px', // Fixed width for the sidebar
    height: '90vh', // Full height
    position: 'fixed', // Fixes the sidebar to the left
    top: 0, // Align to the top
    left: 0, // Align to the left
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
    overflowY: 'auto', // Allows scrolling if content overflows
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem', // Title font size
    marginBottom: '20px', // Space below the title
    color: '#333', // Dark text color
  };
  
  export default function Sidebar() {
    return (
      <div style={sidebarStyle}>
        <h2 style={titleStyle}>User Profiles</h2>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    );
  }

