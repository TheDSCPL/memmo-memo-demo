interface AgeProps {
    age: number;
    increment: ()=>void;
}

export default function Age({age, increment}: AgeProps) {
    console.log(`rendering Age="${age}"`)

    return (
        <p onClick={increment}>Age: {age} year{age!==1 && 's'} old</p>
    )
}
