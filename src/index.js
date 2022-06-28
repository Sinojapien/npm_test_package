import React from 'react';
import { useEffect } from "react";
import BigButton from './components/BigButton';

// Cannot export function directly (empty index.bundle.js file)
class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // useEffect(() => {console.log(123)}, []);

    return (
      <div>
        <h1>Bye!</h1>
        <div><BigButton/></div>
        <div><BigButton/></div>
        <div><BigButton/></div>
      </div>
    );
  }
};

// https://stackoverflow.com/questions/45817227/how-to-export-function-with-webpack
// const TestComponent = () =>{
//   useEffect(() => {console.log(123)}, []);
//   return (
//     <div class="test-component">
//       <div><BigButton/></div>
//       <div><BigButton/></div>
//       <div><BigButton/></div>
//     </div>
//   )
// };

export default TestComponent;

