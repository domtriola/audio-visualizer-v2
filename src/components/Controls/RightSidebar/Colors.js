import React from 'react';
import ColorSlider from './ColorSlider';

const Colors = ({ colors, updateColor }) => (
  <div>
    <ColorSlider
      color="red"
      value={colors.red}
      update={updateColor('red')} />

    <ColorSlider
      color="green"
      value={colors.green}
      update={updateColor('green')} />

    <ColorSlider
      color="blue"
      value={colors.blue}
      update={updateColor('blue')} />
  </div>
);

export default Colors;
