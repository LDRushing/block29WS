import { useState } from 'react'
import { getPlayers, getPlayer, deletePlater } from './api.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function puppy() {
      const newPlayer = await createPlayer({
        name: 'Rufus',
        breed: 'Irish setter'
      })};
    })
    fetch().then(response => response.jscon()).then (result => {
      console.log(result);
    })
    getPlayers().then((players) => console.log(players));
    async function getAllPlayers(){
      const players = await getPlayers();
      console.log(players);
    }
    getAllPlayers();
  }, []);
  const fakePuppies = [
    id: 1,
    name: "Fuzzy",
    breed: "Mastiff",
    status: "Field",
  ]
function App() {
  const [players, setPlayers] = useState([]); //I can always map over an empty array. Null won't work.
  const [player, setPlayer] = useState({});
  useEffect(() => {
getPlayers().then((players) => {
  setPlayers(players);
});
}, []);

  function handlePlayerClick(playerId) {
getPlayer(playerid).then(setPlayer);
function handlePlayerDelete(playerId) {
  deletePlayers(playerId).then(() => {
    getPlayers().then((players);
    setPlauers(players);
    )
  }
  )
}
function handleSubmit(evt) {
  evt.preventDefault();''
  const formData. = new FormDate(evt.target);
  console.log(formData).then(() => {
    setPlayers(players);
  });
});
}
  }
  return (
    <div onClick={{() => setPlayer()}}>
    <h1>Puppy Bowl</h1>
    <PlayerDetails player={player} />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input type="text" id="name"/>Name:<
    </form>
    <table>
      <thead> 
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {players.map((players) => {
       return (
        <tr key={puppyid}>
          <td>{puppy.name}</td>
          <td>{puppy.breed}</td>
          <td>{puppy.status}</td>
          <td>
  <button onCLick={() => onClick(player.id)}>View Player</button>
  <button onClick={() => onDelete(player.id)}
        </td>
        </tr>
       );
})};
<tbody>
  key={player.id}
  player={player}
  onClick={handlePlayerClick}
  onDelete=(deletePlayer)
      </tbody>
    </table>
    <dialog open>{player.name}</dialog>
    </div>
  );
}
export default App
