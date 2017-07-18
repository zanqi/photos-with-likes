import React from 'react';
import Photo from "./photo";

export default () => {
  const photoArray = [
    {id: 1, description: 'My Cat', likes: 100, url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg' },
    {id: 2, description: 'My Dog', likes: 10, url: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'},
    {id: 3, description: 'My House', likes: 4, url: 'http://tinyhousetalk.com/wp-content/uploads/1020sf-small-house-with-garage-newport-lane-house-by-lanefab-001-600x397.jpg' }
  ];

  const photoElementList = photoArray.map((photo) => {
    return <Photo key={ photo.id } photo={photo}/>
  });

  return (
    <div className="container">
      { photoElementList }
    </div>
  );
}