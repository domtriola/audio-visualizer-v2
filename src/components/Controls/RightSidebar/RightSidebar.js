import React, { Component } from 'react';
import Colors from './Colors';

class RightSidebar extends Component {
  constructor(props) {
    super(props);

    this.updateColor = this.updateColor.bind(this);
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
        </div>
      </div>
    );
  }
}

export default RightSidebar;
