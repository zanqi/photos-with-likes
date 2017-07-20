import React from 'react';

const Likes = (props) => {
  return (
    <div>
        <span className="glyphicon glyphicon-thumbs-up" ></span>
        <span>  {props.likes} likes</span>
    </div>
  );
};

export default Likes;