import { memo, useCallback, useState } from 'react';
import Age from "./Age"
import Name from "./Name"

export interface PersonProps {
    id: string;
    data: Readonly<{
        name: string;
        initialAge: number;
    }>
}

export default memo(function Person({id, data: {name, initialAge}}: PersonProps) {
    console.log(`rendering Person with id="${id}"`)

    const [goals, setGoals] = useState(0);
    const [age, setAge] = useState(initialAge);

    //const incrementAge = useMemo(() => () => {setAge(a => a+1)}, [])
    const incrementAge = useCallback(() => {setAge(a => a+1)}, [])

    return (
        <div>
            <p>ID: {id}</p>
            <Name name={name}/>
            <Age age={age} increment={incrementAge}/>
            <p onClick={() => {setGoals(d => d+1)}}>Goals: {goals}</p>
            <hr/>
        </div>
    )
})
