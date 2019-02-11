// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import CharacterList from './CharacterList.jsx';

ReactDOM.render(<CharacterList />, document.getElementById('react-root'));
