import Ripples from './effects/Ripples/Ripples';

const effects = {
  ripples: Ripples
};

class Animator {
  constructor(analyser, canvas, ctx, effect, parameters) {
    this.effectName = effect.get('name');

    const Effect = effects[this.effectName];
    this.Effect = new Effect(analyser, canvas, ctx, parameters);

    this.draw();
  }

  draw() {
    this.Effect.draw();
    requestAnimationFrame(() => this.draw());
  }

  update(field, val) {
    this[field] = val;
    this.Effect.update(field, val);
  }
}

export default Animator;
