import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PhotoList from './components/photo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="title">Photo Gallery</div>
        </div>

        <PhotoList />
      </div>
    );
  }
}

export default App;
