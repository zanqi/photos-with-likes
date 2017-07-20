import React from 'react';
import Likes from './Likes'
import PhotoAction from './PhotoAction'

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const photo = this.props.photo;
    return (
      <div className="col-md-4">
        <div className="imageCard">
          <PhotoAction onDelete={this.props.onDelete}/>
          <div className="imgContainer">
            <img className="img-rounded" src={photo.url} alt={photo.description} />
          </div>
          <h4 className="imageDescription">{photo.description}</h4>
          <Likes likes={photo.likes} />
        </div>
      </div>
    );
  }
}

export default Photo;