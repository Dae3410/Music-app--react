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
  onClick: () => void; // New prop for handling main card click
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onDelete, onChangeImage, onUpdateName, onClick }) => {
  
  const handleImageChange = () => {
    const newImageUrl = prompt("Enter new image URL:", playlist.imageUrl)?.trim();
    if (newImageUrl) {
      onChangeImage(playlist.id, newImageUrl);
    }
  };

  const handleNameUpdate = () => {
    const newName = prompt("Enter new playlist name:", playlist.name)?.trim();
    if (newName) {
      onUpdateName(playlist.id, newName);
    }
  };

  return (
    <button className="card playlist-item" onClick={onClick} aria-label={`Open playlist ${playlist.name}`}>
      <img 
        className="card-image" 
        src={playlist.imageUrl} 
        alt={`Playlist cover for ${playlist.name}`} 
        onError={(e) => e.currentTarget.src = 'default-image-url.jpg'} 
      />
      <h2 className="playlist-names">{playlist.name}</h2>
      <div className="button-group">
        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(playlist.id); }} 
          className="delete-button" 
          aria-label="Delete playlist"
        >
          🗑️
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleImageChange(); }} 
          className="change-image-button" 
          aria-label="Change playlist image"
        >
          ✏️
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleNameUpdate(); }} 
          className="update-name-button" 
          aria-label="Update playlist name"
        >
          📝
        </button>
      </div>
    </button>
  );
}

export default PlaylistCard;
