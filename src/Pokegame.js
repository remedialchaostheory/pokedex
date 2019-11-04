import React, { Component} from 'react';
import Pokedex from "./Pokedex";
import './Pokegame.css'

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]
  };

  render() {
    const randPokemonList = shuffle(this.props.pokemon);
    const halfLengthPokemonList = Math.ceil(randPokemonList.length / 2);
    const pokeHand1 = randPokemonList.slice(0, halfLengthPokemonList);
    const pokeHand2 = randPokemonList.slice(halfLengthPokemonList, randPokemonList.length);
    console.log('pokeHand1 ->', pokeHand1);
    console.log('pokeHand2 ->', pokeHand2);

    // const pokedex1 = pokeHand1.map(pokemon => {
    //   return <div>
    //     <Pokedex
    //         id={pokemon.id}
    //         name={pokemon.name}
    //         type={pokemon.type}
    //         exp={pokemon.base_experience}
    //     />
    //   </div>
    // });
    // const pokedex2 = pokeHand2.map(pokemon => {
    //   return <div>
    //     <Pokedex
    //         id={pokemon.id}
    //         name={pokemon.name}
    //         type={pokemon.type}
    //         exp={pokemon.base_experience}
    //     />
    //   </div>
    // });
    // console.log('pokeHand1 ->', pokeHand1);
    // console.log('pokeHand2 ->', pokeHand2);


    return (
        <div className="Pokegame">
          <Pokedex pokemon={pokeHand1} />
          <Pokedex pokemon={pokeHand2} />
        </div>
    );
  }
}

export default Pokegame;
