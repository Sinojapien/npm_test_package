import React from 'react';
import { useEffect } from "react";
import BigButton from './components/BigButton';

//Cannot export function directly (empty index.bundle.js file)
// class TestComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // useEffect(() => {console.log(123)}, []);

//     return (
//       <div>
//         <h1>Bye!</h1>
//         <h1>Bye!</h1>
//         <h1>Bye!</h1>
//       </div>
//     );
//   }
// };

// https://stackoverflow.com/questions/45817227/how-to-export-function-with-webpack
const TestComponent = () => {
  useEffect(() => {console.log(8)}, []);
  return (
    <div className="test-component">
      <div><h1>Hello!</h1></div>
      <div><h1>Bye!</h1></div>
      <div><h1>Hi!</h1></div>
      <div><h1>Hello!</h1></div>
      <div><h1>Hello!</h1></div>
      <div><h1>Hello!</h1></div>
      <div><h1>Hello!</h1></div>
    </div>
  )
};

export default TestComponent;

