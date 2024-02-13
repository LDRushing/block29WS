import { useState } from 'react'
import { getPlayers } from './api.js';
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
getPlayer
  }
  return (
    <>
    <h1>Puppy Bowl</h1>
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
  <button onCLick={handlePlayerClick{puppy.id}}>View Player</button>
        </td>
        </tr>
       );
})};
      </tbody>
    </table>
    <dialog open>{player.name}</dialog>
    </>
  );
}
export default App
