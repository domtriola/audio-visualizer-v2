import React from 'react';
import '../Sidebar.css';
import effects from '../../Animator/effects/effects';

const LeftSidebar = ({ updateEffect }) => (
  <div className="sidebar">
    <div className="sidebar-content">
      <h2>Effect</h2>
      <select onChange={e => updateEffect(e.target.value)}>
        {Object.keys(effects).map((effect, index) => (
          <option key={index} value={effect}>{effect}</option>
        ))}
      </select>
    </div>
  </div>
);

export default LeftSidebar;
