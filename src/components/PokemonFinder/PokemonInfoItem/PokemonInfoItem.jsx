import React, { Component } from "react";
import style from "./PokemonItem.module.css";


export default class PokemonInfoItem extends Component {
    constructor() {
        super();
        this.state = {
        content: false
        }
    };

    componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
    };

        
    render() {
        const { pokemon: { sprites, name, weight, height } } = this.props;
        const { content } = this.state;
        const changedName = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            <div className={style.container}>
                <h2 className={style.pokemonName}>{changedName}</h2>
                <img className={style.imgPokemon} alt="pokemon" src={sprites.other['official-artwork'].front_shiny} />
                <div className={style.containerInfo}>
                    <button className={style.btn} onClick={this.componentHideAndShow}>More info</button>
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
    }
}
