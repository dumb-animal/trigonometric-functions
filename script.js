const WIDTH = 800;
const HEIGHT = 800;
const HALF_WIDTH = WIDTH / 2;
const HALF_HEIGHT = HEIGHT / 2;
const APPROXIMATION = 0.000001;
const MULTIPLIER = 250;
const SPEED = 0.3;

let angle = 0;
let graph = {
	sinChecked: true,
	cosChecked: true,
	tanChecked: true,
	cotChecked: true
};

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
	if (graph.sinChecked) {
		stroke(0, 0, 255);
		line(cos_, 0, cos_, sin_);
	}

	// draw cos
	if (graph.cosChecked) {
		stroke(255, 0, 0);
		line(0, sin_, cos_, sin_);
	}

	// draw tan
	if (graph.tanChecked) {
		stroke(0, 255, 0);
		line(cos_, sin_, sec_, 0);
	}

	// draw cot
	if (graph.cotChecked) {
		stroke(0, 150, 150);
		line(cos_, sin_, 0, csc_);
	}
}

function setup() {
	createCanvas(WIDTH, HEIGHT);
	textAlign(LEFT);

	let sinCheck = createCheckbox("sin", true);
	sinCheck.position(10, 10).class("btn-wrap");
	sinCheck.changed(() => (graph.sinChecked = !graph.sinChecked));

	let cosCheck = createCheckbox("cos", true);
	cosCheck.position(10, 30).class("btn-wrap");
	cosCheck.changed(() => (graph.cosChecked = !graph.cosChecked));

	let tanCheck = createCheckbox("tan", true);
	tanCheck.position(10, 50).class("btn-wrap");
	tanCheck.changed(() => (graph.tanChecked = !graph.tanChecked));

	let cotCheck = createCheckbox("cot", true);
	cotCheck.position(10, 70).class("btn-wrap");
	cotCheck.changed(() => (graph.cotChecked = !graph.cotChecked));
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
