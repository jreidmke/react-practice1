const Card = ({key, name, height, mass, birth_year}) => {
    return(
    <div>
        <h1>{name}</h1>
        <h4>Height: {height}</h4>
        <h4>Mass: {mass}</h4>
        <h4>Birth Year: {birth_year}</h4>
    </div>)
}

export default Card;