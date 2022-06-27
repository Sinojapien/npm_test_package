import React from 'react';
import { useEffect } from "react";
import BigButton from './components/BigButton';

const ImageGallery = () =>{

  useEffect(() => {console.log(123)}, []);

  return (
    <div class="test-component">
      <div><BigButton/></div>
      <div><BigButton/></div>
      <div><BigButton/></div>
    </div>
  )
};

export default ImageGallery;

