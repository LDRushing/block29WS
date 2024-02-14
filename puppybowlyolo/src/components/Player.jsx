import { useState, useEffect } from 'react'
export default function Player({ Player, onClick }){
    return (
<tr key={player.id}>
<td>{player.name}</td>
<td>{player.breed}</td>
<td>{player.status}</td>
<td>
  <button onClick={() => onClick(player.id)}>View Player</button>
  <button onClick={() => handlePlayerDelete(player.id)}>Delete Player</button>
</td>
</tr>
);
}