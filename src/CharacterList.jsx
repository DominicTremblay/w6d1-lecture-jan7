import React, { Component } from 'react';
import Character from './Character';

class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [
        { name: 'Garfield' },
        { name: 'Snoopy' },
        { name: 'SpongeBob' },
      ],
    };
  }

  render() {
    const charactersList = this.state.characters.map(charObj => (
      <Character key={charObj.name} charName={charObj.name} />
    ));

    return (
      <div>
        <h1 className="title">My Favorites characters</h1>
        <ul>{charactersList}</ul>
      </div>
    );
  }
}
export default CharacterList;
