import React, { Component } from 'react';

class Pokecard extends Component {
  render() {

    return (
        <div>
          <p>Pokecard</p>
          <div>{this.props.name}</div>
          <div><img src={this.props.img} /></div>
          <div>Type: {this.props.type}</div>
          <div>EXP: {this.props.exp}</div>
        </div>
    );
  }
}

export default Pokecard;
