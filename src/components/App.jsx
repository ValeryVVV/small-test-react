import React, { Component } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import SearchPokemonBar from "./PokemonFinder/SearchPokemonBar/SearchPokemonBar";
import PokemonInfo from "./PokemonFinder/PokemonInfo/PokemonInfo";


class App extends Component { 
    state = {
        pokemonName: ''
    };
    

    handleFormSubmit = pokemonName => {
        this.setState({ pokemonName, images: [], loadMore: false })

    };

    render() {
        const { pokemonName } = this.state;
        return (
            <>
                <SearchPokemonBar onSubmit={this.handleFormSubmit} />
                
                <PokemonInfo pokemonName={pokemonName} />
                
                <ToastContainer autoClose={3000} />
            </>
        )

    }
};


export default App;
