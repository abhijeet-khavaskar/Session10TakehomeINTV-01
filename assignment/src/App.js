import React from 'react';
import AlbumCard from './AlbumCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <AlbumCard albumTitle="Album 1" numberOfSongs={12} />
      <AlbumCard albumTitle="Album 2" numberOfSongs={15} />
      {/* Add more AlbumCard components with different titles and song counts */}
    </div>
  );
};

export default App;