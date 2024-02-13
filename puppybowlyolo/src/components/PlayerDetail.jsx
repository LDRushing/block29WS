import React from 'react';

function PlayerDetail({ Player }) {
  return (
    <div>
      {player ? (
        <div>
          <h2>Player Details</h2>
          <p><strong>Name:</strong> {player.name}</p>
          <p><strong>Breed:</strong> {player.breed}</p>
          <p><strong>Status:</strong> {player.status}</p>
        </div>
      ) : (
        <p>No player selected</p>
      )}
    </div>
  );
}
export default PlayerDetail;