class Rain {
  constructor() {
    this.r = 5;
    this.x = random(0, width);
    this.y = random(-height, 0);

    this.vel = 12;
    this.gravity = 0.2;
  }

  reset() {
    // this.vel = 0;
    this.x = random(0, width);
    this.y = random(-height, 0);
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  update() {
    // this.vel += this.gravity;
    this.y += this.vel;
  }

  dropped() {
    if (this.y > height) {
      this.reset();
    }
  }
}