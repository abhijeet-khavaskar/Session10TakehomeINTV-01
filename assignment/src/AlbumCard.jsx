import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AlbumCard = ({ albumTitle, numberOfSongs }) => {
  return (
    <Tooltip title={` ${numberOfSongs} Songs`} arrow>
      <Card style={{ width: 200, margin: 10 }}>
        <CardContent>
          <h2>{albumTitle}</h2>
          {/* Add any other album details here */}
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default AlbumCard;