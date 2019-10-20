const WIDTH = 720;
const HEIGHT = 720;
const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;
const MULTIPLIER = 100;

function drawBase() {
  noFill();
  stroke(150);
  line(0, -HALF_WIDTH, 0, HALF_WIDTH);
  line(-HALF_HEIGHT, 0, HALF_HEIGHT, 0);
  ellipse(0, 0, 2 * MULTIPLIER);
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  let rad = 0;
  background("#F5F5F5");
  translate(HALF_WIDTH, HALF_HEIGHT);
  drawBase();
  rad = radians(mouseX);
}
