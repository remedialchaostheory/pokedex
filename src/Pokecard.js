import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {

    return (
        <div>
          <p>Pokecard</p>
          <p>{this.props.name}</p>
          <img className="Pokecard-img" src={this.props.img} />
          <p>Type: {this.props.type}</p>
          <p>EXP: {this.props.exp}</p>
        </div>
    );
  }
}

export default Pokecard;
