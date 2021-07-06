import React from 'react'
import Gender from './Gender';


function About({ isShowing, pokemon }) {
    if (pokemon.hasOwnProperty('pokemonSpecies') && pokemon.pokemonSpecies.hasOwnProperty('genera')) {
        const specie = pokemon.pokemonSpecies.genera[7].genus.split(' ')[0];
        const height = (pokemon.height * 10 / 100).toFixed(2);
        const weight = (pokemon.weight * 0.1).toFixed(1);
        const habilidades = [];
        const percentageFemale = (pokemon.pokemonSpecies.gender_rate !== -1) ? (pokemon.pokemonSpecies.gender_rate * 100 / 8).toFixed(1) : -1;
        const percentageMale = (pokemon.pokemonSpecies.gender_rate !== -1) ? (100 - percentageFemale) : -1;
        pokemon.abilities.map((ability) => {
            habilidades.push(ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1))
        })
        const eggGroups = pokemon.pokemonSpecies.egg_groups[0].name.charAt(0).toUpperCase() + pokemon.pokemonSpecies.egg_groups[0].name.slice(1);

        return (
            <div className="container-details" isShowing={{ opacity: (isShowing) ? 1 : 0 }}>
                <div className="details-row">
                    <div className="details-description">
                        Espécie
                    </div>
                    <div className="details-value">
                        {specie}
                    </div>
                </div>
                <div className="details-row">
                    <div className="details-description">
                        Altura
                    </div>
                    <div className="details-value">
                        {height} m
                    </div>
                </div>
                <div className="details-row">
                    <div className="details-description">
                        Peso
                    </div>
                    <div className="details-value">
                        {weight} KG
                    </div>
                </div>
                <div className="details-row">
                    <div className="details-description">
                        Habilidades
                    </div>
                    <div className="details-value">
                        {habilidades.join(', ')}
                    </div>
                </div>
                <div className="details-bottom">
                    <h4>Reprodução</h4>
                </div>
                <div className="details-row">
                    <div className="details-description">
                        Gênero
                    </div>
                    <Gender percentageFemale={percentageFemale} percentageMale={percentageMale} />
                </div>
                <div className="details-row">
                    <div className="details-description">
                        Grupos de Ovos
                    </div>
                    <div className="details-value">
                        {eggGroups}
                    </div>
                </div>
                <div className="details-row">
                    <div className="details-description">
                        Ciclo de Ovo
                    </div>
                    <div className="details-value" style={{ textTransform: "capitalize" }}>
                        {pokemon.types[0].type.name}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container-details" style={{ opacity: (isShowing) ? 1 : 0 }}>
            </div>
        )
    }
}


export default About