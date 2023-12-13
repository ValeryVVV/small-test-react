import { useEffect, useState } from "react";

import { Loader } from "components/PokemonFinder/Loader/Loader";
import { fetchPokemon } from "configs/imgconfig/pokemonApi";

import { toast } from "react-toastify";
import PokemonInfoItem from "../PokemonInfoItem/PokemonInfoItem";

import style from "../PokemonInfoItem/PokemonItem.module.css";



export default function PokemonInfo({ pokemonName }) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!pokemonName) {
            return
        };
        
        try {
            setPokemon(null);
            setLoading(true);
            

            fetchPokemon(pokemonName)
                .then(pokemon => {
                    setPokemon(pokemon)
                })
                .catch(() => {
                    toast.error('Something went wrong. Try the request again');
                    setLoading(false);
                })
                .finally(() => setLoading(false))

        } catch (error) {
            toast.error('Something went wrong. Try the request again');
            setLoading(false);
        }

    }, [pokemonName]);

        return (
            <div>
                {loading && <Loader />} 
                 {!pokemonName && <h1 className={style.title}>Enter Id or Name Pokemon</h1>} 
                {pokemon && (
                    <PokemonInfoItem pokemon={pokemon} />
                )}

            </div>
        )
};
