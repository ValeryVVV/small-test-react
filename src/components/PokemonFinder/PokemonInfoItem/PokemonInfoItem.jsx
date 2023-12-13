import React, { useState } from "react";
import style from "./PokemonItem.module.css";


export default function PokemonInfoItem({ pokemon: { sprites, name, weight, height } }) {
    const [content, setContent] = useState(false);

    const componentHideAndShow = () => {
        setContent(content => !content);
    };

        const changedName = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            <div className={style.container}>
                <h2 className={style.pokemonName}>{changedName}</h2>
                <img className={style.imgPokemon} alt="pokemon" src={sprites.other['official-artwork'].front_shiny} />
                <div className={style.containerInfo}>
                    <button className={style.btn} onClick={componentHideAndShow}>More info</button>
                    {
                        content ?
                            <>
                                <p className={style.moreInfo}><b>Weight:</b> {weight}</p>
                                <p className={style.moreInfo}><b>Height:</b> {height}</p>
                            </>
                            : null
                    }
                </div>

            </div>
        )
};
