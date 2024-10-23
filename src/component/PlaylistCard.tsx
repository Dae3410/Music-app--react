import React from 'react';
import '../index.css';

interface Playlist {
  id: number;
  name: string;
  imageUrl: string;
}

interface PlaylistCardProps {
  playlist: Playlist;
  onDelete: (id: number) => void;
  onChangeImage: (id: number, newImageUrl: string) => void;
  onUpdateName: (id: number, newName: string) => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onDelete, onChangeImage, onUpdateName }) => {
  
  const handleImageChange = () => {
    const newImageUrl = prompt("Enter new image URL:", playlist.imageUrl);
    if (newImageUrl) {
      onChangeImage(playlist.id, newImageUrl);
    }
  };

  const handleNameUpdate = () => {
    const newName = prompt("Enter new playlist name:", playlist.name);
    if (newName) {
      onUpdateName(playlist.id, newName);
    }
  };

  return (
    <div className="playlist-item">
      <img className='card-image' src={playlist.imageUrl} alt={`Playlist cover for ${playlist.name}`} />
      <h2 className="playlist-names">{playlist.name}</h2>
      <button onClick={() => onDelete(playlist.id)} className="delete-button">🗑️</button>
      <button onClick={handleImageChange} className="change-image-button">✏️</button>
      <button onClick={handleNameUpdate} className="update-name-button">📝</button>
    </div>
  );
}

export default PlaylistCard;


