import React from 'react';
import Photo from "./Photo";

export default (props) => {
  const photoArray = props.photos;

  const photoElementList = photoArray.map((photo) => {
    return <Photo key={photo.id} photo={photo} />
  });

  return (
    <div>
      {photoElementList}
    </div>
  );
}