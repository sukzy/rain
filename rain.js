class Rain {
  constructor() {
    this.r = 5;
    this.x = random(0, width);
    this.y = random(-height, 0);

    this.vel = 6;
    this.gravity = 0.3;
  }

  show() {
    noFill();
    strokeWeight(random(1,2));
    stroke(255);
    line(this.x, this.y, this.x, this.y-30);
  }

  update() {
    this.vel += this.gravity;
    this.y += this.vel;
  }

  dropped() {
    if (this.y > height) {
      return true;
    }
  }
}