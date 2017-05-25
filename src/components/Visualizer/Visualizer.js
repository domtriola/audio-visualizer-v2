import React, { Component } from 'react';
import music from '../../music/Tours_-_01_-_Enthusiast.mp3';
import Animator from '../Animator/Animator';

class Visualizer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(this.refs.audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    this.analyser = analyser;
    this.ctx = this.refs.canvas.getContext('2d');


    this.animator = new Animator(
      this.analyser,
      this.refs.canvas,
      this.ctx,
      this.props.effect,
      this.props.parameters
    );
  }

  componentWillReceiveProps(newProps) {
    if (newProps.effect !== this.props.effect)
      this.animator.update('effect', newProps.effect);

    if (!newProps.parameters.equals(this.props.parameters)) {
      this.animator.update('parameters', newProps.parameters);
    }
  }

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width="600"
          height="400" />

        <audio
          ref="audio"
          src={music}
          controls />
      </div>
    );
  }
}

export default Visualizer;
