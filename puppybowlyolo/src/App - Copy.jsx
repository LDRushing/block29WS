import { useState } from 'react'
import { getPlayers, getPlayer, deletePlayer } from './api.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState(0);
  const [filter, setFilter] = useState(0);
  useEffect(() => {
    async function puppy() {
      const newPlayer = await createPlayer({
        name: 'Rufus',
        breed: 'Irish setter'
      });
    }
    //fetch().then(response => response.json()).then (result => {
    //  console.log(result);
    //})
    //getPlayers().then((players) => console.log(players));
    async function getAllPlayers(){
      const players = await getPlayers();
      console.log(players);
    }
    getAllPlayers();
  }
, []); //We want our useEffect to end here. 

  const fakePuppies = [{
    id: 1,
    name: "Fuzzy",
    breed: "Mastiff",
    status: "Field",
}]; //Box brackets are arrays and curly braces are objects. 
function App() {
  const [players, setPlayers] = useState(""); //I can always map over an empty array. Null won't work.
  const [player, setPlayer] = useState("");
  useEffect(() => {
getPlayers().then((players) => {
  setPlayers(players);
});
}, []);

  function handlePlayerClick(playerId) {
getPlayer(playerid).then(setPlayer);
  }

function handlePlayerDelete(playerId) {
  deletePlayers(playerId).then(() => {
    getPlayers().then((players) => {
    setPlayers(players);
  });
  });
}
function handleSubmit(evt) {
  evt.preventDefault();''
  const formData = new FormDate(evt.target);
  const newPlayer = object.fromEntries(formData.entries());
  createPlayer(newPlayer).then(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  });
}
function handleFilter(evt) => {
  setFilter(evt.target.value); 
}
  return (
    <div onClick={() => setPlayer()}>
    <h1>Puppy Bowl</h1>
    <PlayerDetails player={player} />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name"/>
      <label htmlFor="breed">Breed:</label>
      <input type="text" id="breed" />
      <label htmlFor="status">Status:</label>
      <input type="status" id="status" />
        <button type="submit">Add Player</button>
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
        {players.filter((players) => player.name.toLowerCase().include(filter.toLowerCase()))
        .map((player) => (
        <tr key={puppyid}>
          <td>{puppy.name}</td>
          <td>{puppy.breed}</td>
          <td>{puppy.status}</td>
          <td>
  <button onCLick={() => onClick(player.id)}>View Player</button>
  <button onClick={() => onDelete(player.id)}>Delete Player</button>
        </td>
        </tr>
        ))};
<tbody>
{players.filter((player) => player.toLowerCase().name.includes(filter.toCallLowerCase))
}
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
export default App;
