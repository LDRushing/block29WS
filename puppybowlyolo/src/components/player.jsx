import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
export default function Player({ Player, onClick, handlePlayerDelet, handleFilter }){
  <div class="singleplayer">
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
</div>
}