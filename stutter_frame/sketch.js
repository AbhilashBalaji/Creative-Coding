let img, by, xMinStep;

function preload() {
	img = loadImage("kodomo.jpeg");
}

function setup() {
	createCanvas(img.width, img.height);
}

function draw() {
	// background(img);
	let xStep;
	by = random(1,img.height);
	xMinStep = random(1,img.width / 15);

	drawingContext.shadowColor = color(1, 0, 0);
	drawingContext.shadowBlur = 20;

	for (let x = 0; x < width; x += xStep) {
		xStep = random(1, xMinStep);
		let img_trim = img.get(x, 0, xStep, img.height);
		let y = by + random(img.height / 20);
		image(img_trim, x, y);
		image(img_trim, x, y - img.height);
	}
	// noLoop();
	frameRate(0.5);
}