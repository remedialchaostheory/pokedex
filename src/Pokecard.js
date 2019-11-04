import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {

    return (
        <div className="Pokecard">
          <p className="Pokecard-name">{this.props.name}</p>
          <img className="Pokecard-img" src={this.props.img} />
          <p>Type: {this.props.type}<br/>EXP: {this.props.exp}</p>
        </div>
    );
  }
}

export default Pokecard;
