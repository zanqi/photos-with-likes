import React from 'react';
import Photo from "./Photo";

class PhotoList extends React.Component {
  render() {
    const photoElementList = this.props.photos.map((photo) => {
      return (
        <Photo 
          key={photo.id}
          photo={photo}
          onLike={this.props.onLike}
          onDelete={this.props.onDelete} />
      );
    });

    return (
      <div>
        {photoElementList}
      </div>
    );
  }
}

export default PhotoList;