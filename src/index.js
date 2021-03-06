import React, { useEffect } from "react";
import BigButton from "src/components/BigButton";

import ReactImageGallery from "react-image-gallery";
//* import css when module is exported
//* multiple css, https://medium.com/trabe/multiple-css-bundles-with-webpack-75f263095f09
//* https://www.sitepoint.com/community/t/how-to-configure-webpack-to-output-multiple-css-files-from-sass/303659/2
//* https://stackoverflow.com/questions/57167818/webpack-bundle-multiple-different-versions-of-css-files
// import "package-name/build/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";


//! read, https://github.com/vercel/next.js/discussions/34380

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

//Cannot export function directly (empty index.bundle.js file)
// solve with output: { library: "library-name", libraryTarget: "umd", ... }
// https://stackoverflow.com/questions/45817227/how-to-export-function-with-webpack
const TestComponent = () => {
  useEffect(() => console.log(123), []);
  return (
    <div className="test-component">
      <div><h1>Hello!</h1></div>
      <BigButton/>
      <ReactImageGallery items={images}/>
    </div>
  )
};

export default TestComponent;

