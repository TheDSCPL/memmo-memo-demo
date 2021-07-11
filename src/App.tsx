import React, { useState } from 'react';
import People from './People';

function App() {
  console.log("rendering app")

  const [teamName, setTeamName] = useState('Goal diggers')

  const onTeamNameClick = () => {
    setTeamName(prompt('New team name') || teamName)
  }

  return (
    <div>
      <h1 onClick={onTeamNameClick}>{teamName}</h1>
      <People people={{
        "luis-cirne": {
          name: 'Luis Cirne',
          initialAge: 25
        },
        "fredrik-gelotte": {
          name: 'Fredrik Gelotte',
          initialAge: 33
        },
        "alejandro-andersson": {
          name: 'Alejandro Andersson',
          initialAge: 28
        }
      }}/>
    </div>
  );
}

export default App;
