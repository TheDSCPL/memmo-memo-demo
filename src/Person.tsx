import { useState } from 'react';
import Age from "./Age"
import Name from "./Name"

export interface PersonProps {
    id: string;
    data: {
        name: string;
        initialAge: number;
    }
}

export default function Person({id, data: {name, initialAge}}: PersonProps) {
    console.log(`rendering Person with id="${id}"`)

    const [goals, setGoals] = useState(0);
    const [age, setAge] = useState(initialAge);

    return (
        <div>
            <p>ID: {id}</p>
            <Name name={name}/>
            <Age age={age} increment={() => {setAge(a => a+1)}}/>
            <p onClick={() => {setGoals(d => d+1)}}>Goals: {goals}</p>
            <hr/>
        </div>
    )
}
