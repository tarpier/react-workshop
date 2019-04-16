import React, { Component } from 'react';
import { Router } from '@reach/router';

import CharacterPage from '../../pages/CharacterPage';
import Home from '../../pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <CharacterPage path="/characters" />
      </Router>
    );
  }
}

export default App;
