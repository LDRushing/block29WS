import { useState, useEffect } from 'react';
import { deletePlayer, getPlayer } from '../api.js'
import { Routes, Route, useParams, Link } from 'react-router-dom';
import PuppyList from './PuppyList.jsx';
//Props are how we pass data from one component to another. 
function PlayerDetail() {
    const [player, setPlayer] = useState(0);
    let {puppyid} = useParams();
    console.log(puppyid);
    useEffect (() => {
   getPlayer(puppyid).then((playerData) => {
    setPlayer(playerData); // Update player state with fetched player data
}).catch((error) => {
    console.error("Error fetching player:", error);
});
}, [puppyid]); // Fetch player whenever puppyid changes. Get player uses a puppy id to get info tied to that ID. 
const handlePlayerDelete = () => {
    console.log(handlePlayerDelete);
    useEffect (() => {
        deletePlayer(puppyid).then((playerData) => {
            setPlayer(playerData);
    }).catch((error) => {
        console.error("Error deleting player:", error)
    });
    } [puppyid]);
  //  handlePlayerDelete(puppyid).then((playerData) => {
   //     onDelete(puppyid); // Notify parent component of deletion
   //     history.push("/"); // Redirect to home page after deletion
   // }).catch((error) => {
   //     console.error("Error deleting player:", error);
   // });
};
const handleSubmit = (event) => //{
  console.log(handleSubmit);
  useEffect (() => {
      addPlayer(puppyid).then((playerData) => {
          setPlayer(playerData);
  }).catch((error) => {
      console.error("Error submitting player:", error)
  });
  } [puppy.id]);
const handleFilter(evt) {
    filterPlayer((playerDate);
}).catch((error) => {
    console.error("Error filtering playes:"), error)
)};
  return (
    <div classname="details">
      {player ? (
        <div>
          <h2>Player Details</h2>
          <p><strong>Name:</strong> {player.name}</p>
          <p><strong>Breed:</strong> {player.breed}</p>
          <p><strong>Status:</strong> {player.status}</p>
        </div>
      ) : (
        <p>No player selected</p>
      )}
    </div>
  );
}
export default PlayerDetail;
//Using let puppyid to grab info from the API. Player ? means 'if player is not null, enable the first parenthesis. If it is, enable the second parenthesis. 0 = null, so it shows 'no player selected'. 