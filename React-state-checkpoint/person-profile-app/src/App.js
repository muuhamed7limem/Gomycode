import React, { Component } from 'react';
import PersonProfile from './components/PersonProfile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <PersonProfile />
      </div>
    );
  }
}

export default App;