import React from 'react';
import ParamSlider from './ParamSlider';

function backgroudColor(color, value) {
  const colors = {
    red: 0,
    blue: 0,
    green: 0
  };

  colors[color] = value;

  return {
    background: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`
  };
}

const Colors = ({ colors, updateColor }) => (
  <div>
    <h3>Colors</h3>
    <div className="color-slider">
      <div
        className="color-box red"
        style={backgroudColor('red', colors.get('red'))} ></div>
      <ParamSlider
        name="Red"
        min={0}
        max={255}
        value={colors.get('red')}
        updateParam={updateColor('red')} />
    </div>

    <div className="color-slider">
      <div
        className="color-box green"
        style={backgroudColor('green', colors.get('green'))} ></div>
      <ParamSlider
        name="Green"
        min={0}
        max={255}
        value={colors.get('green')}
        updateParam={updateColor('green')} />
    </div>

    <div className="color-slider">
      <div
        className="color-box blue"
        style={backgroudColor('blue', colors.get('blue'))} ></div>
      <ParamSlider
        name="Blue"
        min={0}
        max={255}
        value={colors.get('blue')}
        updateParam={updateColor('blue')} />
    </div>
  </div>
);

export default Colors;
