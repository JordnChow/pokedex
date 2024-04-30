import React from "react"; 
import {useState} from "react";
import './home.css'

function Home(){    
    const [pokemon, setPokemon] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        setPokemon(event.target.value);     
    }
    
    return(
        <div className='main'>
            <h1>PokeDex Home</h1>
            <form>
                <input type="text" placeholder="Search for a pokemon" className='search' onSubmit={handleSubmit}/>
            </form>
            <h2>pokemon is : {pokemon}</h2>
        </div>
    )
}

export default Home