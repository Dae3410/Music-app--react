import React from 'react';
import { Link } from 'react-router-dom';

type Artist = {
  id: number;
  name: string;
  genre: string;
  albums: string[];
  title: string;
  release_year: number;
  tracks: string[];
  top_songs: string[];
  twitter: string;
  instagram: string;
};

interface ArtistsProps {
  artists: Artist[];
}

const Artists: React.FC<ArtistsProps> = ({ artists }) => {
  if (!artists || artists.length === 0) {
    return <p>No artists available</p>;  // Handle the empty state
  }

  return (
    <div className="artists-page">
      <h1 className="title">Artists</h1>
      <ul className="artist-list">
        {artists.map((artist) => (
          <li key={artist.id} className="artist-item">
            <Link to={`/artists/${artist.id}`} className="artist-link">
              <h2>{artist.name}</h2>
              <p>Genre: {artist.genre}</p>
              <p>Top Album: {artist.albums.join(', ')}</p> {/* Join if albums is an array */}
              <p>
                Twitter:{" "}
                <a
                  href={artist.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.twitter}
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.instagram}
                </a>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;

