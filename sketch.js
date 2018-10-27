var rains = [100];

function setup() {
	createCanvas(900, 700);
	
	for (let i = 0; i < 100; i++) {
		rains[i] = new Rain();
	}
}

function draw() {
	background(0, 90);

	for (let i = 0; i < rains.length; i++) {
		rains[i].update();
		rains[i].show();
		rains[i].dropped();
	}
}