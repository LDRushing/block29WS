import { useState, useEffect } from 'react'
import { getPlayers, getPlayer, deletePlayer, createPlayer } from '../api.js';
import PlayerDetail from './PlayerDetail.jsx' 
import Player from './Player.jsx'
import { Link } from 'react-router-dom';

function PuppyList() {
  const [player, setPlayer] = useState(0);
  const [filter, setFilter] = useState(0);
  const [players, setPlayers] = useState([]); //I can always map over an empty array. Null won't work.
  useEffect(() => { //Wrap APIs in useEffect when we call it. 
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
      const puppies = await getPlayers();
      console.log(puppies);
    setPlayers(puppies);}//Sets the player's value in the state to equal 'players'. 
    getAllPlayers();
  }
, []); //We want our useEffect to end here. 

  const fakePuppies = [{
    id: 1,
    name: "Fuzzy",
    breed: "Mastiff",
    status: "Field",
}]; //Box brackets are arrays and curly braces are objects.
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
  const formData = new formData(evt.target);
  const newPlayer = Object.fromEntries(formData.entries());
  createPlayer(newPlayer).then(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  });
}
function handleFilter(evt) {
 // {players.filter((player) => player.name.toLowerCase().include(filter.toLowerCase()))
  setFilter(evt.target.value); 
}
  return (
    <div>
    <h1>Puppy Bowl</h1>
    <PlayerDetail player={player} />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name"/>
      <label htmlFor="breed">Breed:</label>
      <input type="text" id="breed" />
      <label htmlFor="status">Status:</label>
      <input type="status" id="status" />
      <button type="submit">Add Player</button>
    </form>
    <input type="text" name="filter" value="filter" onChange={handleFilter} />
    <table>
      <thead> 
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {players.map((puppy) => (
        <tr key={puppy.id}>
          <td>{puppy.name}</td>
          <td>{puppy.breed}</td>
          <td>{puppy.status}</td>
          <td>
  <button onClick={() => handlePlayerDelete(player.id)}>Delete Player</button>
  <Link to={`/${puppy.id}`}>View Player</Link>
        </td>
        </tr>
        ))};
    </tbody>
    </table>
    <dialog open>{player.name}</dialog>
    </div>
  );
}
export default PuppyList;