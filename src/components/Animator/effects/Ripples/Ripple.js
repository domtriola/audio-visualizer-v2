class Ripple {
  constructor(vol, colors, pos) {
    this.vol = vol;
    this.pos = pos;
    this.rgb = 'rgba(' + colors.red + ',' +
                         colors.green + ',' +
                         colors.blue + ', 0.6)';
    this.size = 0;
    this.width = 1;
    this.speed = vol / 40000;
  }
}

export default Ripple;
