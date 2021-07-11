import React, { memo, useCallback, useMemo, useState } from 'react';
import People from './People';

/* const peopleList = {
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
} as const; */

function App() {
  console.log("rendering app")

  const [teamName, setTeamName] = useState('Goal diggers')

  const onTeamNameClick = useCallback(() => {
    setTeamName(teamName => prompt('New team name') || teamName)
  }, [])

  const peopleList = useMemo(() => ({
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
  }), [])

  return (
    <div>
      <h1 onClick={onTeamNameClick}>{teamName}</h1>
      <People people={peopleList}/>
    </div>
  );
}

export default memo(App);
