import Effect from '../Effect';

class Equalizer extends Effect {
  drawBar(x, width, height, colors) {
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'rgb(0, 0, 0)';
    this.ctx.fillStyle = `rgb(${colors.get('red')},
                              ${colors.get('green')},
                              ${colors.get('blue')})`;

    this.ctx.fillRect(x,
      this.canvas.height - height, width, this.canvas.height);

    this.ctx.strokeRect(x,
      this.canvas.height - height, width, this.canvas.height);
  }

  draw() {
    this.updateData();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let barWidth = this.canvas.width / this.dataArray.length *
                   this.parameters.get('weight') + 4;

    for (let i = 1; i < this.dataArray.length; i += barWidth) {
      let height = this.dataArray[Math.floor(i)] *
                   this.parameters.get('intensity') / 100;

      this.drawBar(i, barWidth, height, this.parameters.get('colors'));
    }
  }
}

export default Equalizer;
