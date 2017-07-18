import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoList from './components/photo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Yeah!
        </p>
        <PhotoList />
      </div>
    );
  }
}

export default App;
