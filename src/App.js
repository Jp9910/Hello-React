import { useState } from 'react';
import Banner from './components/Banner/Banner.js'; //".js" (or any file extension) is optional
import Form from './components/Form/Form';
import Team from './components/Team/Team';

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
  
  const teams = [
    {nome:'DRX', cor1: "#57C278", cor2: "#09F7E9"},
    {nome:'T1', cor1: "#82CFFA", cor2: "#E8F8FF"},
    {nome:'LSB', cor1: "#A60157", cor2: "#F0F8E2"},
  ]

  return (
    <div className="App">
      <Banner/>
      <Form atPlayerRegistered={newPlayer => newPlayerRegistered(newPlayer)} teams={teams}/>
      {/* These 4 next lines are equivalent: */}
      {teams.map(function(element,index){return <Team key={index} name={element.nome} cor1={element.cor1} cor2={element.cor2} />})}
      {/*teams.map((element) => {return <Team name="123"/>})*/}
      {/*teams.map((element) => <Team name="123"/>)*/}
      {/*teams.map(element => <Team name="123"/>)*/}
    </div>
  );
}

export default App;
