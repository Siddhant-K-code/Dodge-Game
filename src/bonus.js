class bonus {
  constructor() {
    this.x = random(width / 2, width)
    this.y = random(height)
    this.value = floor(random(6))
  }
  display() {
    fill(0, 255, 0)
    ellipse(this.x, this.y, this.value * 4)
  }

}
