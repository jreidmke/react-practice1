import {useState} from 'react';
import axios from 'axios';
import Card from './Card';
const { v4: uuidv4 } = require('uuid');

const Deck = () => {
    const [deck, setDeck] = useState([]);
    async function add() {
        const rand = Math.ceil(Math.random() * 82);
        const resp = await axios.get(`https://swapi.dev/api/people/${rand}`);
        setDeck(c => [
            ...c,
            {
                key: uuidv4(),
                name: resp.data.name,
                height: resp.data.height,
                mass: resp.data.mass,
                birth_year: resp.data.birth_year
            }
        ]);
    }

    const cards = deck.map(c => <Card key={c.key} name={c.name} height={c.height} mass={c.mass} birth_year={c.birth_year}/>)

    return(
        <div>
            <button onClick={add}>Click</button>
            {cards}
        </div>
    )
}

export default Deck;