import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import Card from './Card';
import SearchForm from './SearchForm';
const { v4: uuidv4 } = require('uuid');

const Deck = () => {
    const [deck, setDeck] = useState([]);
    const [running, setRunning] = useState(false);
    const timeRef = useRef(null);

    async function addRandom() {
        const rand = Math.ceil(Math.random() * 82);
        const resp = (await axios.get(`https://swapi.dev/api/people/${rand}`)).data;
        setData(resp);
    }

    async function addSearch(term) {
        try {
            const resp = (await axios.get(`https://swapi.dev/api/people/?search=${term}`)).data.results[0];
            setData(resp);
        } catch (error) {
            console.log(error);
        }
    }

    function setData(resp) {
        setDeck(c => [
            ...c,
            {
                key: uuidv4(),
                name: resp.name,
                height: resp.height,
                mass: resp.mass,
                birth_year: resp.birth_year
            }
        ]);
    }

    useEffect(() => {
        if(running) {
            timeRef.current = setInterval(async () => await addRandom(), 1000);
        }
        return () => {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    }, [running, setRunning]);

    const auto = () => {
        console.log(timeRef);
        console.log(timeRef.current);
        setRunning(!running)
    };

    const cards = deck.map(c => <Card key={c.key} name={c.name} height={c.height} mass={c.mass} birth_year={c.birth_year}/>)

    return(
        <div>
            <SearchForm createCard={addSearch}/>
            <button onClick={auto}>Random</button>
            {cards}
        </div>
    )
}

export default Deck;