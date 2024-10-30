import React, { useState } from 'react';
import './App.css';
import Sidebar from './component/Sidebar';
import PlaylistCard from './component/PlaylistCard';
import SwitchButton from './SwitchButton';

const App: React.FC = () => {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: "Relaxing", imageUrl: "https://pics.craiyon.com/2023-11-30/mt_jmLpXRj6rfXdUflvNwA.webp" },
    { id: 2, name: "Going Out", imageUrl: "https://i.pinimg.com/236x/48/59/77/4859776ca6184318f7c1d8db85e3162b.jpg" },
    { id: 3, name: "At Work", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3CSzw9r4tuQIlldwuaEaN7qA06wT8sYKKw&s" },
    { id: 4, name: "Working Out", imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84124bd0cf5122f4e1aa2a65b7" },
  ]);

  const handleDelete = (id: number) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== id));
  };

  const handleChangeImage = (id: number, newImageUrl: string) => {
    setPlaylists(playlists.map(playlist =>
      playlist.id === id ? { ...playlist, imageUrl: newImageUrl } : playlist
    ));
  };

  const handleUpdateName = (id: number, newName: string) => {
    setPlaylists(playlists.map(playlist =>
      playlist.id === id ? { ...playlist, name: newName } : playlist
    ));
  };

  return (
    <div className="app">
      <h1 className='title'>Apple Music Clone</h1>
      <main>
        {playlists.map(playlist => (
          <PlaylistCard 
            key={playlist.id}
            playlist={playlist}
            onDelete={handleDelete}
            onChangeImage={handleChangeImage}
            onUpdateName={handleUpdateName}
          />
        ))}
      </main>
      <Sidebar />
        <SwitchButton />
    </div>
  );
};

export default App;


 