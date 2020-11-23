import {useState} from 'react';

//how would i do this?? How would I use a custom hook to set state?

function useSetDeck(resp = []) {
    const [deck, setDeck] = useState([]);
    function add() {
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
    return[deck, add];
}

export {useSetDeck};