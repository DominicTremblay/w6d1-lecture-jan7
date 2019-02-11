import React, { Component } from 'react';

class App extends Component {
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
    const charactersList = this.state.characters.map(charObj =>
      React.createElement('li', { key: charObj.name }, charObj.name)
    );

    const reactElement = React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { className: 'title' },
        'My Favorites characters'
      ),
      React.createElement('ul', null, charactersList)
    );

    return reactElement;
  }
}
export default App;
