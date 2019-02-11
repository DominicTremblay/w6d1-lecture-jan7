import React, { Component } from 'react';

class Character extends Component {
  render() {
    return <li>{this.props.charName}</li>;
  }
}

export default Character;
