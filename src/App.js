import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div><Link to="/firstname">zhao</Link></div>
        <div><Link to="/lastname">juntong</Link></div>
      </div>
    )
  }
}

export default App;
