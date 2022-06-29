import React, { useEffect } from 'react';
// import BigButton from './components/BigButton';
import BigButton from 'src/components/BigButton';

//! read, https://github.com/vercel/next.js/discussions/34380

//Cannot export function directly (empty index.bundle.js file)
// solve with output: { library: "library-name", libraryTarget: "umd", ... }
// https://stackoverflow.com/questions/45817227/how-to-export-function-with-webpack
const TestComponent = () => {
  useEffect(() => {console.log(8)}, []);
  return (
    <div className="test-component">
      <div><h1>Hello!</h1></div>
      <div><h1>Bye!</h1></div>
      <div><h1>Hi!</h1></div>
      <BigButton/>
    </div>
  )
};

export default TestComponent;

