import React from 'react';

const ParamSlider = ({ min, max, value, updateParam }) => (
  <input
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={e => updateParam(parseInt(e.target.value, 10))} />
);

export default ParamSlider;
