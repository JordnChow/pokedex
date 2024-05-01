import React, { useState } from 'react';
import './home.css';
import renderPokemon from './modules/renderPokemon.js';

async function fetchPokemonData(pokemon) {
    if (typeof pokemon !== 'string') {
        return;
    } else {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        return await fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    }
}

function Home() {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        fetchPokemonData(search).then(data => setPokemon(data));
    }

    return (
        <div className='main'>
            <h1>PokeDex Home</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a pokemon" className='search' value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {pokemon && renderPokemon(pokemon)}
        </div>
    )
}

export default Home;