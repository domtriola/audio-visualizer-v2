import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Visualizer.css';
import music from '../../music/Tours_-_01_-_Enthusiast.mp3';
import Animator from '../Animator/Animator';

class Visualizer extends Component {
  componentDidMount() {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    const source = audioContext.createMediaElementSource(audioElement);
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

    audioElement.addEventListener('play', () => {
      audioContext.resume().then(() => {
        console.log('Playback resumed successfully');
      });
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.effect !== this.props.effect) {
      this.animator.stop();

      this.animator = new Animator(
        this.analyser,
        this.refs.canvas,
        this.ctx,
        newProps.effect,
        this.props.parameters
      );
    }

    if (!newProps.parameters.equals(this.props.parameters)) {
      this.animator.update('parameters', newProps.parameters);
    }
  }

  render() {
    return (
      <div className="Visualizer">
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
