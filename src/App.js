import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./components/Home";
//Components
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;

// font-family: 'Caveat', cursive;
// font-family: 'Palette Mosaic', cursive;
// font-family: 'Roboto Mono', monospace;
