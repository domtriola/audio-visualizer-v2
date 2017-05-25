import React from 'react';
import './App.css';
import VisualizerContainer from '../Visualizer/VisualizerContainer';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>Audio Visualizer</h1>
      <VisualizerContainer />
    </div>
  </div>
);

export default App;
