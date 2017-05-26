import React from 'react';

const ColorSlider = ({ color, value, update }) => (
  <div>
    <label>{color}
      <input
        type="range"
        min="0"
        max="255"
        onChange={e => update(parseInt(e.target.value, 10))}
        value={value} />
    </label>
  </div>
);

export default ColorSlider;
