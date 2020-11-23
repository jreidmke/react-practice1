import {useState} from 'react';
import axios from 'axios';
import Card from './Card';

const Deck = () => {
    //start with an empty deck in state
    const [deck, setDeck] = useState([]);

    //create an add card function

    //ok wait. hold on. before we start doin that, lets make a rndom interger to use.

    const rand = Math.ceil(Math.random * 82);
    async function add() {
        const resp = await axios.get(`https://swapi.dev/api/people/1`);
        console.log(resp.data);
    }

    return(
        <div>
            <button onClick={add}>Click</button>
        </div>
    )
}

export default Deck;