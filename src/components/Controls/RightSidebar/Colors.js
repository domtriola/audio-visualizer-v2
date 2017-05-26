import React from 'react';
import ParamSlider from './ParamSlider';

const Colors = ({ colors, updateColor }) => (
  <div>
    <h3>Colors</h3>
    <ParamSlider
      name="Red"
      min={0}
      max={255}
      value={colors.red}
      updateParam={updateColor('red')} />

    <ParamSlider
        name="Green"
        min={0}
        max={255}
        value={colors.green}
        updateParam={updateColor('green')} />

    <ParamSlider
        name="Blue"
        min={0}
        max={255}
        value={colors.blue}
        updateParam={updateColor('blue')} />
  </div>
);

export default Colors;
