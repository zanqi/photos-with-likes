import React from 'react';
import Likes from './Likes'
import PhotoAction from './PhotoAction'

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleDelete(){
    this.props.onDelete(this.props.photo.id);
  }

  handleLike(e) {
    this.props.onLike(this.props.photo);
  }

  render() {
    const photo = this.props.photo;
    return (
      <div className="col-md-4">
        <div className="imageCard">
          <PhotoAction onDelete={this.handleDelete}/>
          <div className="imgContainer">
            <img className="img-rounded" src={photo.url} alt={photo.description} />
          </div>
          <h4 className="imageDescription">{photo.description}</h4>
          <Likes likes={photo.likes} onLike={this.handleLike} />
        </div>
      </div>
    );
  }
}

export default Photo;