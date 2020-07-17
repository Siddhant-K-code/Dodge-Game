class shot {
  constructor( y, speed) {
    this.x = width;
    this.y = y;
    this.speed = speed;
  }
  display() {
    fill(255, 0, 0)
    noStroke()
    ellipse(this.x, this.y, 10, 10);
    this.x -= this.speed;
  }
  collide(other) {
    if(dist(this.x,this.y,other.pos.x,other.pos.y)<10){
      start='false'
      other.a=0
    }
  }
}
