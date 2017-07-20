import React from 'react';

const PhotoAction = (props) => {

  return (
    <div className="PhotoAction">
      <button className="btn btn-primary btn-danger" onClick={props.onDelete}>
        <span className="glyphicon glyphicon-trash"></span> Delete
      </button>
    </div>
  );
};

export default PhotoAction;