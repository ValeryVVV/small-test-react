import { Component } from "react";

import { Loader } from "components/PokemonFinder/Loader/Loader";
import { fetchPokemon } from "configs/imgconfig/pokemonApi";

import { toast } from "react-toastify";
import PokemonInfoItem from "../PokemonInfoItem/PokemonInfoItem";

import style from "../PokemonInfoItem/PokemonItem.module.css";



export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
    }
    async componentDidUpdate(prevProps, prevState) {
            
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        try {
            if (prevName !== nextName) {

            this.setState({ loading: true, pokemon: null });
            

            fetchPokemon(nextName)
            .then(pokemon => this.setState({ pokemon }))
            .catch(() => {
            toast.error('Something went wrong. Try the request again');
            this.setState({ isLoading: false });
            })
                .finally(() => this.setState({ loading: false }))
            }   

        } catch (error) {
            toast.error('Something went wrong. Try the request again');
            this.setState({ isLoading: false });
        }

    }
    render() {
        const { pokemon, loading } = this.state;
        const { pokemonName} = this.props;
        return (
            <div>
                {loading && <Loader />} 
                 {!pokemonName && <h1 className={style.title}>Enter Id or Name Pokemon</h1>} 
                {pokemon && (
                    <PokemonInfoItem pokemon={pokemon} />
                )}

            </div>
        )
            
    }
}