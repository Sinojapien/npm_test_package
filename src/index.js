import React from 'react';
import { useEffect } from "react";
import BigButton from './components/BigButton';

// class ImageGallery extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Bye!</h1>
//         <div><BigButton/></div>
//         <div><BigButton/></div>
//         <div><BigButton/></div>
//       </div>
//     );
//   }
// };

const ImageGallery = () =>{

  useEffect(() => {console.log(123)}, []);

  return (
    <div>
      <h1>Goof!</h1>
      <div><BigButton/></div>
      <div><BigButton/></div>
      <div><BigButton/></div>
    </div>
  )
};

export default ImageGallery;

