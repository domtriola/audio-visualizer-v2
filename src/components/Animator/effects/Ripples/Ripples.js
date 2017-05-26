import Effect from '../Effect';
import Ripple from './Ripple';

class Ripples extends Effect {
  constructor(analyser, canvas, ctx, params) {
    super(analyser, canvas, ctx, params);

    this.ripples = [];

    this.drawRipples = this.drawRipples.bind(this);
    this.cleanUpRipples = this.cleanUpRipples.bind(this);
  }

  genRipple(vol, colors) {
    const ripple = new Ripple(
      vol, colors,
      [Math.floor(this.canvas.width / 2), Math.floor(this.canvas.height / 2)]
    );
    this.ripples.push(ripple);
  }

  drawRipples() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ripples.forEach(ripple => {
      this.ctx.strokeStyle = ripple.rgb;
      this.ctx.lineWidth = 6;
      this.ctx.beginPath();
      this.ctx.arc(ripple.pos[0], ripple.pos[1],
                   ripple.size, 0, 2 * Math.PI);
      this.ctx.stroke();

      ripple.size += ripple.speed;
    });
  }

  cleanUpRipples() {
    if (this.ripples.length > 110) {
      this.ripples.shift();
    }
  }

  draw() {
    this.updateData();
    this.rotateColors();

    const vol = this.totalVol();
    const colors = {
      red: this.rotationState.red,
      green: this.rotationState.green,
      blue: this.rotationState.blue
    };

    this.genRipple(vol, colors);

    this.drawRipples();

    this.cleanUpRipples();
  }

}

export default Ripples;
