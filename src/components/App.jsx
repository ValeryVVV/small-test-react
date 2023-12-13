import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import SearchPokemonBar from "./PokemonFinder/SearchPokemonBar/SearchPokemonBar";
import PokemonInfo from "./PokemonFinder/PokemonInfo/PokemonInfo";


export default function App() { 
    const [pokemonName, setPokemonName] = useState('');    

    const handleFormSubmit = pokemonName => {
        setPokemonName(pokemonName);
    };

        return (
            <>
                <SearchPokemonBar onSubmit={handleFormSubmit} />
                
                <PokemonInfo pokemonName={pokemonName} />
                
                <ToastContainer autoClose={3000} />
            </>
        )
};
