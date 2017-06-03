import effects from './effects/effects';

class Animator {
  constructor(analyser, canvas, ctx, effect, parameters) {
    this.effectName = effect.get('name');

    const Effect = effects[this.effectName];
    this.Effect = new Effect(analyser, canvas, ctx, parameters);

    this.stopped = false;
    this.draw();
  }

  draw() {
    this.Effect.draw();
    if (!this.stopped)
      requestAnimationFrame(() => this.draw());
  }

  update(field, val) {
    this[field] = val;
    this.Effect.update(field, val);
  }

  stop() {
    this.stopped = true;
  }
}

export default Animator;
