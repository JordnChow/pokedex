import React from "react";

function createPokemonImage(pokemon) {
    const pokeID = pokemon.id;
    const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png    `;
    return <img src={pokeImage} alt={pokemon.name} />
}

function renderPokemon(data) {
    const pokeID = data.id;
    const pokeName = data.name;
    const pokeType = data.types && data.types.length === 1 ? data.types[0].type.name : `${data.types[0].type.name} / ${data.types[1].type.name}`;
    const pokeImage = createPokemonImage(data);
    return(
        <div>
            {pokeImage}
            <h2>Name: {pokeName}</h2>
            <p>ID: #{pokeID}</p>
            <p>Type: {pokeType}</p>
        </div>
    )
}

export default renderPokemon;