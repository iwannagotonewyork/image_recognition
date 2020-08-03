import React from 'react';
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from "./components/Rank/Rank"
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      values: 50,
      density: {
        enalbe: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className="particle" params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecogmition /> */}
    </div>
  );
}

export default App;
