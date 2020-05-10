import React from "react";
import ReactDOM from "react-dom";
import { images } from "./images";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import "./styles.css";

const INITIAL_INDEX = 0;

function App() {
  const [index, setIndex] = React.useState(INITIAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === 4) {
        setIndex(INITIAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
      }}
      index={index}
      onRequestChange={(i) => {
        setIndex(i);
      }}
    >
      {images.map((image) => (
        <GalleryImage src={image} />
      ))}
    </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// https://codesandbox.io/s/tender-hodgkin-uuys3?file=/src/index.js:0-920
