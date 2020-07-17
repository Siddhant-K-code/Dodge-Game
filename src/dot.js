let IsStatic;
let angle;
class dots {
  constructor(x, y, r, g, b) {
    this.pos = createVector(x, y);
    this.col = [r, g, b];
    this.a = 0
    this.A = 0
  }



  move() {
    let mouse = createVector(mouseX, mouseY)
    let attraction = mouse.sub(this.pos)
    let speed;

    fill(this.col[0], this.col[1], this.col[2]);
    noStroke()
    if (!mouseIsPressed) {
      speed = 10
    } else {
      speed = 6;

    }
    angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    this.pos = createVector(this.pos.x + attraction.x / speed, this.pos.y + attraction.y / speed);
    IsStatic = dist(this.pos.x, this.pos.y, mouseX, mouseY) < 10;

    angleMode(DEGREES)
    translate(this.pos.x, this.pos.y)
    rotate(angle)
    rect(-7.5, -7.5, 12 + dist(this.pos.x, this.pos.y, mouseX, mouseY) / 50, 12 - dist(this.pos.x, this.pos.y, mouseX, mouseY) / 65);



  }


}
