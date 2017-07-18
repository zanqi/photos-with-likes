import React from 'react';
import Photo from "./photo";

export default () => {
  const photoArray = [
    {id: 1, description: 'My Cat'},
    {id: 2, description: 'My Dog'},
    {id: 3, description: 'My House'}
  ];

  const photoElementList = photoArray.map((photo) => {
    return <Photo key={ photo.id } description={ photo.description }/>
  });

  return (
    <div>
      { photoElementList }
    </div>
  );
}