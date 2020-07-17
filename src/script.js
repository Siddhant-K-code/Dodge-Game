let pw;
let start = 'false'
let startButton;
let shots = []
let bonuses = []
let score;
let highscore;
let leaderBoard;
let back;
let leaders = [];
let lead = ['#1 Siddhant=3458!!']
let bonusesPrime = []


function setup() {
  createCanvas(windowWidth, windowHeight);
  dot = new dots(0, 0, 40, 120, 255);
  back = createButton('back')
  back.position(width / 2 - 40, height - 50)
  back.style('visibility', 'hidden')

  for (let i = 0; i < 10; i++) {
    leaders[i] = createP(lead[i])
    leaders[i].style('visibility', 'hidden')
    leaders[i].position(80, 20 + i * height / 12)
    leaders[i].style('color', 'white')
    leaders[i].style('font-size', '25px')
  }


  score = createP(dot.score)
  score.position(width / 2, -60)
  score.style('font-size', '56px')

  highscore = createP('High score:' + dot.A)
  highscore.position(width / 2 - 150, -60)
  highscore.style('font-size', '56px')

  pw = createGraphics(windowWidth, windowHeight);
  startButton = createButton('play')
  startButton.position(width / 2 - 250, height / 2)
  startButton.mousePressed(function () {
    start = 'true'
  })

  back.mousePressed(function () {
    start = 'false'
  })
}

function draw() {

  if (frameCount % 4 == 0) {
    shots.push(new shot(floor(random(height)), floor(random(3, 6))))
  }
  if (frameCount % 120 == 0) {
    bonuses.push(new bonus())
  }
  if (start == 'true') {
    for (let i = 0; i < 10; i++) {
      leaders[i].style('visibility', 'hidden')
    }
    back.style('visibility', 'hidden')
    startButton.style('visibility', 'hidden')
    score.style('visibility', 'visible')
    highscore.style('visibility', 'hidden')

  } else if (start == 'false') {
    for (let i = 0; i < 10; i++) {
      leaders[i].style('visibility', 'hidden')
    }
    let W = width - 100
    back.style('visibility', 'hidden')
    score.style('visibility', 'hidden')
    highscore.style('visibility', 'visible')
    highscore.style('color', 'white')

    startButton.mouseOut(function () {
      startButton.style('background-color', color(0, 200, 255))
      startButton.style('color', color(255))
    })

    startButton.mouseOver(function () {
      startButton.style('background-color', color(255, 255, 255))
      startButton.style('color', color(0, 200, 255))
    })
    startButton.style('width', '500px')
    startButton.style('visibility', 'visible')
    shots = []
    bonuses = []
  } else {
    for (let i = 0; i < 10; i++) {
      leaders[i].style('visibility', 'visible')
    }
    back.style('visibility', 'visible')
    score.style('visibility', 'hidden')
    highscore.style('visibility', 'hidden')
    startButton.style('visibility', 'hidden')
    leaderBoard.style('visibility', 'hidden')

    back.mouseOver(function () {
      back.style('background-color', color(255, 255, 255))
      back.style('color', color(0, 200, 255))
    })


    back.mouseOut(function () {
      back.style('background-color', color(0, 200, 255))
      back.style('color', color(255))
    })

  }
  background(30, 30, 50);
  if (start == 'true') {
    particules(1, 6, 10, 50)
    dot.move();
  }
}

function particules(density, randomness, disFromDot, Alpha) {
  pw.background(200, 200, 200, Alpha);
  pw.noStroke();
  pw.fill(100, 100, 255);
  if (!IsStatic) {
    for (let i = 0; i < density; i++)
      pw.rect(dot.pos.x + random(-randomness, randomness) + cos(angle) * -disFromDot, dot.pos.y + random(-randomness, randomness) + sin(angle) * -disFromDot, 5, 5);
  }
  image(pw, 0, 0);
  bonusesPrime = shots
  for (let i = 0; i < shots.length; i++) {
    shots[i].display()
    shots[i].collide(dot)
  }
  for (let i = 0; i < shots.length; i++) {
    if (shots[i].x < -5) {
      shots.splice(i, 1)
    }
  }

  for (let i = 0; i < bonuses.length; i++) {
    bonuses[i].display()
    if (dist(dot.pos.x, dot.pos.y, bonuses[i].x, bonuses[i].y) < 5 + (bonuses[i].value * 4)) {
      dot.a += bonuses[i].value;
      bonuses.splice(i, 1)
    }

  }


  if (dot.a > dot.A) {
    dot.A = dot.a
  }
  score.html(dot.a)
  highscore.html('High score:' + dot.A)
}
