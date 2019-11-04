import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    console.log('this.props ->', this.props);
    const pokeCard = this.props.pokemon.map(pokemon => {
      return <div>
        <Pokecard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
        />
      </div>
    });

    return (
          <div className="Pokedex">
            <h3>Pokehand</h3>
            <div className="Pokedex-cards">
              {pokeCard}
            </div>
          </div>
    );
  }
}

export default Pokedex;
