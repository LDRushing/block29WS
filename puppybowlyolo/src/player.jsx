export default function Player({ player, onClick}){
    return (
<tr key={puppy.id}>
<td>{puppy.name}</td>
<td>{puppy.breed}</td>
<td>{puppy.status}</td>
<td>
  <button onCLick={() => onClick(puppy.id)}>View Player</button>
</td>
</tr>
);
}