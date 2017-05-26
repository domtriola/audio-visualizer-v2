import React from 'react';

const ParamSlider = ({ name, min, max, value, updateParam }) => (
  <label>{name}
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={e => updateParam(parseInt(e.target.value, 10))} />
  </label>
);

export default ParamSlider;
