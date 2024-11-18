
import React from 'react';
import { useParams } from 'react-router-dom';

interface Track {
  title: string;
  duration: string;
}

interface Album {
  title: string;
  release_year: number;
  tracks: Track[];
}

interface Artist {
  id: number;
  name: string;
  genre: string;
  albums: Album[];
  top_songs: string[];
  social_media: {
    twitter: string;
    instagram: string;
  };
}

interface ArtistDetailsProps {
  artists: Artist[];
}

const ArtistDetails: React.FC<ArtistDetailsProps> = ({ artists }) => {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = artists.find(a => a.id === parseInt(artistId || ""));

  if (!artist) return <p>Artist not found.</p>;

  return (
    <div>
      <h1>{artist.name}</h1>
      <p>Genre: {artist.genre}</p>
      
      <h2>Top Songs</h2>
      <ul>
        {artist.top_songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>

      <h2>Albums</h2>
      {artist.albums.map((album, index) => (
        <div key={index}>
          <h3>{album.title} ({album.release_year})</h3>
          <ul>
            {album.tracks.map((track, trackIndex) => (
              <li key={trackIndex}>{track.title} - {track.duration}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Social Media</h2>
      <p>
        <a href={artist.social_media.twitter} target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href={artist.social_media.instagram} target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>
    </div>
  );
};

export default ArtistDetails;
