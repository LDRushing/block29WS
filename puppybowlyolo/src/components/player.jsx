export default function Player({ Player }){
    return (
<tr key={puppy.id}>
<td>{puppy.name}</td>
<td>{puppy.breed}</td>
<td>{puppy.status}</td>
<td>
  <button onClick={() => onClick(puppy.id)}>View Player</button>
  <button onClick={() => handlePlayerDelete(player.id)}>Delete Player</button>
</td>
</tr>
);
}