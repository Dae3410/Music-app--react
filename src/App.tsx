import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import Playlist from './component/Playlist';
import ProfileCard from './component/ProfileCard';

const App: React.FC = () => {
  return (
    <div className="app">
      
      <main>
        <h1>My Music App</h1>
        <ProfileCard />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </main>
      <Sidebar />
      
    </div>
  )
};

export default App;

 