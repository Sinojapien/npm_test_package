import React from 'react';
import ReactDOM from 'react-dom';

import ImageGallery from '../src';

class App extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <section className='app'>
            <ImageGallery/>
        </section>
      );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
