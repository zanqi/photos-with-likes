import React from 'react';

const Photo = (props) => {
  return (
    <div>
      <img src={props.photo.url} alt={props.photo.description} />
      <div>{props.photo.description}</div>
    </div>
  );
};

export default Photo;