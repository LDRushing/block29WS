import { useState, useEffect } from 'react'
import { getPlayers, getPlayer, deletePlayer, createPlayer } from '../api.js';
import PlayerDetail from './PlayerDetail.jsx' 
import PlayerInfo from './PlayerInfo.jsx'
import { Link } from 'react-router-dom';

function PuppyList() {
  const [player, setPlayer] = useState({});
  const [filter, setFilter] = useState('');
  console.log(filter);
  const [players, setPlayers] = useState([]); //I can always map over an empty array. Null won't work.
  useEffect(() => { //Wrap APIs in useEffect when we call it. 
  
    //fetch().then(response => response.json()).then (result => {
    //  console.log(result);
    //})
    //getPlayers().then((players) => console.log(players));
    async function getAllPlayers(){
      const puppies = await getPlayers();
      console.log(puppies);
    setPlayers(puppies);}//Sets the player's value in the state to equal 'players'. 
    getAllPlayers();
  }
, []); //We want our useEffect to end here. 

  function handlePlayerClick(playerId) {
//getPlayer(playerid).then(setPlayer);
  console.log(playerId);
  }

function handlePlayerDelete(playerId) {
  deletePlayer(playerId).then(() => {
    getPlayers().then((players) => {
   setPlayers(players);
  });
  });
}
function handleSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const newPlayer = Object.fromEntries(formData.entries());
  createPlayer(newPlayer).then(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  });
}
function handleFilter(evt) {
 //{players.filter((player) => player.name.toLowerCase().include(filter.toLowerCase()))
  setFilter(evt.target.value); 
}
  return (
    <div>
    <h1>Puppy Bowl</h1>
    <PlayerDetail player={player} />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"/>
      <label htmlFor="breed">Breed:</label>
      <input type="text" name="breed" />
      <label htmlFor="status">Status:</label>
      <input type="status" name="status" />
      <button type="submit">Add Player</button>
    </form>
    <input type="text" name="filter" value={filter} onChange={handleFilter} />
    <table>
      <thead> 
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {players.filter(puppy => puppy.name.match(filter)).map((puppy) => ( //map will affect anything in the array. Puppy => puppy means "I want to keep all the puppies."
        <tr key={puppy.id}>
          <td>{puppy.name}</td>
          <td>{puppy.breed}</td>
          <td>{puppy.status}</td>
          <td>
  <button onClick={() => handlePlayerDelete(puppy.id)}>Delete Player</button>
  <Link to={`/${puppy.id}`}>View Player</Link>
        </td>
        </tr>
        ))}
    </tbody>
    </table>
    <dialog open>{player.name}</dialog>
    </div>
  );
}
export default PuppyList