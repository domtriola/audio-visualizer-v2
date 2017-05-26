import Ripples from './effects/Ripples/Ripples';

const effects = {
  ripples: Ripples
};

class Animator {
  constructor(analyser, canvas, ctx, effect, params) {
    this.analyser = analyser;
    this.canvas = canvas;
    this.ctx = ctx;
    this.params = params;

    const Effect = effects[effect.get('name')];
    this.effect = new Effect(analyser, canvas, ctx, params);

    this.draw();
  }

  draw() {
    this.effect.draw();
    requestAnimationFrame(() => this.draw());
  }

  // udpateEffect(newEffect) {
  //   const Effect = effects[newEffect];
  //   this.effect = new Effect(this.analyser, this.canvas, this.ctx, this.params);
  //
  //   this.draw();
  // }
}

export default Animator;
