export default function Player(){
    return (
<tr key={puppyid}>
<td>{puppy.name}</td>
<td>{puppy.breed}</td>
<td>{puppy.status}</td>
<td>
<button onCLick={() => onClick(player.id)>View Player</button>
</td>
</tr>
);
}