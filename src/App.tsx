import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar';
import PlaylistCard from './component/PlaylistCard';
import SwitchButton from './SwitchButton';
import AlbumsPage from './component/Albums';
import SongsPage from './component/Songs';
import Artists from './component/Artist';
import ArtistDetails from './component/ArtistDetails';
import data from '../db.json';

const App: React.FC = () => {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Relaxing', imageUrl: 'https://pics.craiyon.com/2023-11-30/mt_jmLpXRj6rfXdUflvNwA.webp' },
    { id: 2, name: 'Going Out', imageUrl: 'https://i.pinimg.com/236x/48/59/77/4859776ca6184318f7c1d8db85e3162b.jpg' },
    { id: 3, name: 'At Work', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3CSzw9r4tuQIlldwuaEaN7qA06wT8sYKKw&s' },
    { id: 4, name: 'Working Out', imageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84124bd0cf5122f4e1aa2a65b7' },
  ]);

  const [artists, setArtists] = useState(data.artists);

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
    <Router>
      <div className="app">
        <header className="app-header">
          <h1 className="title">WAVY MUSIC</h1>
        </header>

        <Sidebar artists={artists} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="playlist-container">
                  {playlists.map(playlist => (
                    <PlaylistCard
                      key={playlist.id}
                      playlist={playlist}
                      onDelete={handleDelete}
                      onChangeImage={handleChangeImage}
                      onUpdateName={handleUpdateName}
                    />
                  ))}
                </div>
              }
            />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/artists" element={<Artists artists={artists} />} /> {/* Pass artists data */}
            <Route path="/artists/:artistId" element={<ArtistDetails artists={artists} />} /> {/* Pass artists data */}
          </Routes>
        </main>

        <SwitchButton />
      </div>
    </Router>
  );
};

export default App;
