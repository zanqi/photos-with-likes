import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PhotoList from './components/Photo-list';
import AddPhoto from './components/AddPhoto';
import AlbumStore from './services/AlbumStore';

class App extends Component {
  getPhotos() {
    const albumStore = new AlbumStore();
    const testPhotos = [
      { id: 1, description: 'My Cat', likes: 100, url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg' },
      { id: 2, description: 'My Dog', likes: 10, url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi' },
      { id: 3, description: 'My House', likes: 4, url: 'http://tinyhousetalk.com/wp-content/uploads/1020sf-small-house-with-garage-newport-lane-house-by-lanefab-001-600x397.jpg' },
      { id: 4, description: 'My Cat', likes: 100, url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg' }
    ];
    testPhotos.forEach(p => {
      albumStore.add(p);
    })

    return albumStore.find('');
  }

  render() {
    const photos = this.getPhotos();

    return (
      <div className="App">
        <div className="App-header">
          <div className="title">Photo Gallery</div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <AddPhoto />
          </div>
          <PhotoList photos={photos} />
        </div>
      </div>
    );
  }
}

export default App;
