const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT"
export async function getPlayers(){
 try {
  const response = await fetch (`${API_URL}/players`);
  const result = await response.json();
  return result.data.players;
 } catch (error){
    console.error(error);
 }
}
export async function getPlayer(playerId) { //this helps our app get the right info, and gets a player ID 
try {
   console.log(`${API_URL}/players/${playerId}`)
   const response = await fetch (`${API_URL}/players/${playerId}`);
   const result = await response.json();
   return result.data.player;
  } catch (error){
     console.error(error);
  }
 }
 export async function createPlayer(player) { //This helps our app get the right info. Creates a player. 
   try {
      const response = await fetch (`${API_URL}/players`, {
      method: "POST", 
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
   });
      const result = await response.json();
      return result.data.newPlayer;
     }  catch (error){
        console.error(error);
     }
    }
    export async function deletePlayer(playerId){
      console.log(playerId);
      try {
       const response = await fetch (`${API_URL}/players/${playerId}`, {
       method: "DELETE",
      });
       await response.json();
      } catch (error){
         console.error(error);
      }
   }
   export async function getTeams(){
      try {
       const response = await fetch (`${API_URL}/players`);
       const result = await response.json();
       return result.data.teams;
      }
      catch (error){
         console.error(error);
      }
     }