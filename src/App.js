import { useState } from 'react';
import Banner from './components/Banner/Banner.js'; //".js" (or any file extension) is optional
import Form from './components/Form/Form';
//If no file is specified, it tries to import the file named index in the directory

function App() {

  // Initial value will be an empty array, and after a player is registered
  // it will be pushed to the array.
  const [players, setPlayers] = useState([])

  const newPlayerRegistered = (newPlayer) => {
    console.log("New player registered:" + newPlayer)
    setPlayers([...players, newPlayer])
    console.log("Players registered:" + JSON.stringify(players, null, 4))
  }

  return (
    <div className="App">
      <Banner/>
      <Form atPlayerRegistered={newPlayer => newPlayerRegistered(newPlayer)}/>
    </div>
  );
}

export default App;
