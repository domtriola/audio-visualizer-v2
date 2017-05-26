class Effect {
  constructor(analyser, canvas, ctx, parameters) {
    this.analyser = analyser;
    this.canvas = canvas;
    this.ctx = ctx;
    this.parameters = parameters;

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.rotationState = {
      red: this.parameters.getIn(['colors', 'red']),
      green: this.parameters.getIn(['colors', 'green']),
      blue: this.parameters.getIn(['colors', 'blue']),
      dir: -1,
      index: 0
    };

    this.draw = this.draw.bind(this);
    this.rotateColors = this.rotateColors.bind(this);
  }

  updateData() {
    this.analyser.getByteFrequencyData(this.dataArray);
  }

  totalVol() {
    let volume = 0;
    for (let i = 0; i < this.dataArray.length; i++)
      volume += this.dataArray[i];
    return volume;
  }

  updateRotationState() {
    this.rotationState.dir = this.rotationState.dir === 1 ? -1 : 1;
    this.rotationState.index = (this.rotationState.index + 1) % 3;
  }

  rotateColors() {
    const colorKeys = ['red', 'green', 'blue'];
    const index = this.rotationState.index;
    const curColor = colorKeys[index];
    const dir = this.rotationState.dir;
    const colors = {
      red: this.parameters.getIn(['colors', 'red']),
      green: this.parameters.getIn(['colors', 'green']),
      blue: this.parameters.getIn(['colors', 'blue'])
    };

    let nextVal = this.rotationState[curColor] + 10 * dir;

    if (nextVal <= 0) {
      this.rotationState[curColor] = 0;
      this.updateRotationState();
    } else if (nextVal >= colors[curColor]) {
      this.rotationState[curColor] = colors[curColor];
      this.updateRotationState();
    } else {
      this.rotationState[curColor] = nextVal;
    }
  }
}

export default Effect;
