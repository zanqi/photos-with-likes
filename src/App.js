import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PhotoList from './components/photo-list';
import AddPhoto from './components/AddPhoto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="title">Photo Gallery</div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <AddPhoto />
          </div>
          <PhotoList />
        </div>
      </div>
    );
  }
}

export default App;
