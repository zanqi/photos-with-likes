import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PhotoList from './components/Photo-list';
import AddPhoto from './components/AddPhoto';
import Header from './components/Header';
import AlbumStore from './services/AlbumStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.albumStore = new AlbumStore();
    this.handleLike = this.handleLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      photos: this.albumStore.find('')
    }
  }

  handleLike(photo){
    photo.likes = photo.likes + 1;
    const edited = this.albumStore.edit(photo);
    console.log('Edited in AlbumStore: ' + edited);

    this.setState(this.state);
  }

  handleDelete(id){
    this.albumStore.remove(id);
    console.log('Removed in AlbumStore');
    this.setState(prev => {
      return { photos: prev.photos.filter(p => p.id !== id) };
    });
  }

  render() {
    const photos = this.state.photos;
    console.log(photos);

    return (
      <div className="App">
        <Header />

        <div className="container">
          <div className="col-md-12">
            <AddPhoto />
          </div>
          <PhotoList photos={photos} onLike = {this.handleLike} onDelete = {this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;
