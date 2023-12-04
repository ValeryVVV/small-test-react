import React, { Component } from "react";
import style from "./SearchPokemonBar.module.css";
  import { toast } from 'react-toastify';

class SearchPokemonBar extends Component {
    state = {
        pokemonName: ''
    };
    
    handleChange = e => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast.error('Please enter your search pokemon name or pokemok id!');
            return;
        };

        this.props.onSubmit(this.state.pokemonName);
        
        this.setState({ pokemonName: '' });

    };

    render() {
        return (
            <header className={style.searchbar}>
                <form className={style.form} onSubmit={this.handleSubmit}>
                    <input
                        className={style.searchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                    <button type="submit" className={style.searchForm_button}>
                        Search
                    </button>
                </form>
            </header>
        )
    }
    
};

export default SearchPokemonBar;