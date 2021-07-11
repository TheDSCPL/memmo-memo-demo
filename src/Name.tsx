interface NameProps {
    name: string;
}

export default function Name({name}: NameProps) {
    console.log(`rendering Name with name="${name}"`)
    return (
        <p>Name: {name}</p>
    )
}
