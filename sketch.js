var rains = [100];

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < rains.length; i++) {
		rains[i] = new Rain();
	}
}

function draw() {
	background(0);

	for (let i = 0; i < rains.length; i++) {
		rains[i].update();
		rains[i].show();

		if (rains[i].dropped()) {
			rains.splice(i, 1);
		}
	}

	if (frameCount / 30) {
		rains.push(new Rain());
	}
}