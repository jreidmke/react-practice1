import React, { useState } from 'react';
const { v4: uuidv4 } = require('uuid');

function NewCardForm({createCard}) {
    const INITIAL_STATE = {
        name: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(formData);
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const input = (e) => {
        e.preventDefault();
        createCard({...formData, id: uuidv4()});
        console.log(formData);
        setFormData(INITIAL_STATE);
    }

    return(
        <div>
            <form onSubmit={input}>
                <label htmlFor='name'>Name</label>
                <input
                onChange={handleChange}
                type='text'
                name='name'
                value={formData.name}
                id='name'/>
                <button id='newCardBtn'>New Card</button>
            </form>
        </div>
    )
}

export default NewCardForm;