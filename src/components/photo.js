import React from 'react';

const Photo = (props) => {
  return (
    <div className="col-md-3 imageCard">
      <div className="imgContainer">
        <img className="img-rounded" src={props.photo.url} alt={props.photo.description} />
      </div>
      <h4 className="imageDescription">{props.photo.description}</h4>
      <span className="glyphicon glyphicon-thumbs-up" ></span>
      <span>  {props.photo.likes} likes</span>
    </div>
  );
};

export default Photo;