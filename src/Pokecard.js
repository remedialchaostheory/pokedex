import React, { Component } from 'react';
import './Pokecard.css';

const api = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
const getPokemonImgUrl = (id) => {
  const padZeros = id => {
    const padLength = 3;
    const lengthDiff = padLength - Number(id.toString().length);
    return lengthDiff ? '0'.repeat(lengthDiff) + id : id;
  };
  return `${api}${padZeros(id)}.png`;
};


class Pokecard extends Component {
  render() {
    const imgUrl = getPokemonImgUrl(this.props.id);

    return (
        <div className="Pokecard">
          <p className="Pokecard-name">{this.props.name}</p>
          <img className="Pokecard-img" src={imgUrl} alt={this.props.name} />
          <div className="Pokecard-data">Type: {this.props.type}</div>
          <div className="Pokecard-data">EXP: {this.props.exp}</div>
        </div>
    );
  }
}

export default Pokecard;
