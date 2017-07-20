import React from 'react';
import Likes from './Likes'

const Photo = (props) => {
  return (
    <div className="col-md-4">
      <div className="imageCard">
        <div className="imgContainer">
          <img className="img-rounded" src={props.photo.url} alt={props.photo.description} />
        </div>
        <h4 className="imageDescription">{props.photo.description}</h4>
        <Likes likes={props.photo.likes} />
      </div>
    </div>
  );
};

export default Photo;