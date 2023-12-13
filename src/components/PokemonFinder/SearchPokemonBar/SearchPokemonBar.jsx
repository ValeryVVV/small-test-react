import React, { useState } from "react";
import style from "./SearchPokemonBar.module.css";
  import { toast } from 'react-toastify';

export default function SearchPokemonBar({ onSubmit }) {
    
    const [pokemonName, setPokemonName] = useState('');
    const handleChange = e => {
        setPokemonName(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (pokemonName.trim() === '') {
            toast.error('Please enter your search pokemon name or pokemok id!');
            return;
        };

        onSubmit(pokemonName);
        
        setPokemonName('');

    };
        return (
            <header className={style.searchbar}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        className={style.searchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                    />
                    <button type="submit" className={style.searchForm_button}>
                        Search
                    </button>
                </form>
            </header>
        )
};
