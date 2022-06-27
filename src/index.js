import React from 'react';
import BigButton from './components/BigButton';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><h1>Hello!</h1><BigButton></BigButton><BigButton></BigButton><BigButton></BigButton></div>
    );
  }
};

export default ImageGallery;

