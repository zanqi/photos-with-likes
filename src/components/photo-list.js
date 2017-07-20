import React from 'react';
import Photo from "./Photo";

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.photos
    }
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id, event) {
    this.setState(prev => {
      return { photos: prev.photos.filter(p => p.id !== id) };
    });
  }

  render() {
    const photoElementList = this.state.photos.map((photo) => {
      return <Photo key={photo.id} 
                    photo={photo} 
                    onDelete={this.onDelete.bind(this, photo.id)} />
    });

    return (
      <div>
        {photoElementList}
      </div>
    );
  }
}

export default PhotoList;