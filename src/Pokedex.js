import React, { Component } from 'react';
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    return (
        <div>
          <p>Pokedex</p>
          <Pokecard />
        </div>
    );
  }
}

export default Pokedex;
