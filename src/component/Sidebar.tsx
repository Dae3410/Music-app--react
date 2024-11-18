import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import '../index.css';

interface Artist {
  id: number;
  name: string;
  genre: string;
}

interface SidebarProps {
  artists: Artist[];
}

const Sidebar: React.FC<SidebarProps> = ({ artists }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter artists based on the search query
  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <h2 className="sidebar-title">Profile</h2>

      {/* Search Input */}
      <input
        type="text"
        className="sidebar-search"
        placeholder="Search artists..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <Link to="/albums" className="sidebar-link">Albums</Link>
        <Link to="/songs" className="sidebar-link">Songs</Link>
        <Link to="/artists" className="sidebar-link">Artists</Link>
      </nav>

     
      {/* Artist Profile Cards */}
      {filteredArtists.map(artist => (
        <ProfileCard key={artist.id} profile={artist} />
      ))}

      {/* Toggle Sidebar Button */}
      <button
        className="sidebar-toggle-btn"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isVisible ? '>' : '<'}
      </button>
    </div>
  );
};

export default Sidebar;
