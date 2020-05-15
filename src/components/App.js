import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import ListAllPigTiles from './ListAllPigTiles'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < ListAllPigTiles />
      </div>
    )
  }
}

export default App;
