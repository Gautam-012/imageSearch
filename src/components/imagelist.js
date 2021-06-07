import React from 'react';
import './imagelist.css';
import Imagecard from './imagecard';

const ImageList = props => {
  const imagesData = props.images.map(image => {
    return <Imagecard key={image.id} image={image} />;
  });
  //imagelist refers to imagecard
  return <div className="imagelist">{imagesData}</div>;
};
//map() is used to create new list or array without disturbing the previous values
//example: var array1 = [1, 2, 3, 4];
// array1.map( (array2)=> array1*2 );
//array2
export default ImageList;
//image array ki index ki value hai

//(
//   <img src={image.urls.regular} key={image.id} alt={image.description} />
// );
