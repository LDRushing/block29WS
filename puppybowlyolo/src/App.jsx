import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createPlayer } from './api.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function puppy() {
      const newPlayer = await createPlayer({
        name: 'Rufus',
        breed: 'Irish setter'
      });
    }
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

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
