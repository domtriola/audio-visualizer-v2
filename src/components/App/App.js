import React from 'react';
import './App.css';

import VisualizerContainer from '../Visualizer/VisualizerContainer';
import LeftSidebarContainer
  from '../Controls/LeftSidebar/LeftSidebarContainer';
import RightSidebarContainer
  from '../Controls/RightSidebar/RightSidebarContainer';


const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>Audio Visualizer</h1>
    </div>

    <div className="App-main">
      <LeftSidebarContainer />
      <VisualizerContainer />
      <RightSidebarContainer />
    </div>
  </div>
);

export default App;
