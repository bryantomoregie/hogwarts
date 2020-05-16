import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import ListAllPigTiles from './ListAllPigTiles'
import 'bootstrap/dist/css/bootstrap.min.css';

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
