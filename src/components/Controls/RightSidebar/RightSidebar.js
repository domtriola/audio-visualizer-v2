import React, { Component } from 'react';
import Colors from './Colors';
import ParamSlider from './ParamSlider';

class RightSidebar extends Component {
  constructor(props) {
    super(props);

    this.updateParam = this.updateParam.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  updateParam(parameter) {
    return amt => {
      this.props.updateParam(parameter, amt);
    };
  }

  updateColor(color) {
    return amt => {
      this.props.updateColor(color, amt);
    };
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <h2>Parameters</h2>

          <Colors
            colors={this.props.parameters.get('colors')}
            updateColor={this.updateColor} />

          <ParamSlider
            name="Weight"
            min={0}
            max={10}
            value={this.props.parameters.get('weight')}
            updateParam={this.updateParam('weight')} />

          <ParamSlider
            name="Intensity"
            min={0}
            max={100}
            value={this.props.parameters.get('intensity')}
            updateParam={this.updateParam('intensity')} />
        </div>
      </div>
    );
  }
}

export default RightSidebar;
