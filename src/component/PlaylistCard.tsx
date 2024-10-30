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
    <div className="card playlist-item">
      <img 
        className='card-image' 
        src={playlist.imageUrl} 
        alt={`Playlist cover for ${playlist.name}`} 
        onError={(e) => e.currentTarget.src = 'default-image-url.jpg'} 
      />
      <h2 className="playlist-names">{playlist.name}</h2>
      <div className="button-group">
        <button 
          onClick={() => onDelete(playlist.id)} 
          className="delete-button" 
          aria-label="Delete playlist"
        >
          🗑️
        </button>
        <button 
          onClick={handleImageChange} 
          className="change-image-button" 
          aria-label="Change playlist image"
        >
          ✏️
        </button>
        <button 
          onClick={handleNameUpdate} 
          className="update-name-button" 
          aria-label="Update playlist name"
        >
          📝
        </button>
      </div>
    </div>
  );
}

export default PlaylistCard;
