import Person, { PersonProps } from './Person';

interface PeopleProps {
    people: Record<string, PersonProps['data']>;
}

export default function People({people}: PeopleProps) {
    console.log(`rendering People`)
    return (
        <>
            {Object.keys(people).map(id => (
                <Person key={id} id={id} data={people[id]} />
            ))}
        </>
    )
}
