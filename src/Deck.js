import {useState} from 'react';
import axios from 'axios';
import Card from './Card';

const Deck = () => {
    //start with an empty deck in state
    const [deck, setDeck] = useState([]);

    //create an add card function

    //ok wait. hold on. before we start doin that, lets make a rndom interger to use.

    async function add() {
        const rand = Math.ceil(Math.random() * 82);
        const resp = await axios.get(`https://swapi.dev/api/people/${rand}`);
        setDeck(c => [
            ...c,
            {
                name: resp.data.name,
                height: resp.data.height,
                mass: resp.data.mass,
                birth_year: resp.data.birth_year
            }
        ]);
        console.log(resp.data);
    }

    const cards = deck.map(c => <Card name={c.name} height={c.height} mass={c.mass} birth_year={c.birth_year}/>)

    return(
        <div>
            <button onClick={add}>Click</button>
            {cards}
        </div>
    )
}

export default Deck;