import { memo } from 'react';
import Person, { PersonProps } from './Person';

interface PeopleProps {
    people: Readonly<Record<string, PersonProps['data']>>;
}

export default memo(function People({people}: PeopleProps) {
    console.log(`rendering People`)
    return (
        <>
            {Object.keys(people).map(id => (
                <Person key={id} id={id} data={people[id]} />
            ))}
        </>
    )
})
