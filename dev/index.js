import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from 'src';

class App extends React.Component {
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className='app'>
            <TestComponent/>
        </div>
      );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
