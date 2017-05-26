class Ripple {
  constructor(vol, weight, intensity, colors, pos) {
    this.pos = pos;
    this.rgb = 'rgba(' + colors.red + ',' +
                         colors.green + ',' +
                         colors.blue + ', 0.6)';
    this.size = 0;
    this.width = weight;
    this.speed = vol / 1000000 * intensity;
  }
}

export default Ripple;
