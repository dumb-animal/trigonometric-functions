const WIDTH = 720;
const HEIGHT = 720;
const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;
const APPROXIMATION = 0.000001;
const MULTIPLIER = 250;
const SPEED = 0.3;
let angle = 0;

function drawBase() {
  noFill();
  stroke(150);
  line(0, -HALF_WIDTH, 0, HALF_WIDTH);
  line(-HALF_HEIGHT, 0, HALF_HEIGHT, 0);
  ellipse(0, 0, 2 * MULTIPLIER);
}

function drawTrigonometricFunctions(rad) {
  let sin_ = sin(rad) * -MULTIPLIER;
  let cos_ = cos(rad) * MULTIPLIER;
  let sec_ = (1 / cos(rad)) * MULTIPLIER;
  let csc_ = (1 / -sin(rad + APPROXIMATION)) * MULTIPLIER;

  // draw sin
  stroke(0, 0, 255);
  line(cos_, 0, cos_, sin_);
  // draw cos
  stroke(255, 0, 0);
  line(0, sin_, cos_, sin_);
  // draw tan
  stroke(0, 255, 0);
  line(cos_, sin_, sec_, 0);
  // draw cot
  stroke(0, 150, 150);
  line(cos_, sin_, 0, csc_);
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  let rad = 0;
  background("#F5F5F5");
  translate(HALF_WIDTH, HALF_HEIGHT);
  drawBase();
  rad = radians(angle);
  drawTrigonometricFunctions(rad);
  angle += SPEED;
}
