var fidget;
var fidgetSpinners = [];

var spinFrame = 0;
var totalSpins = 0;

function fidgetSpinner() {

	this.spin = function(spinFrame) {

		this.x = mouseX;
		this.y = mouseY;

		if (this.y <= 0) { this.y = 0; }
		if (this.y >= height) { this.y = height; }

		if (this.x <= 0) { this.x = 0; }
		if (this.x >= width) { this.x = width; }

		imageMode(CENTER);
		image(fidgetSpinners[spinFrame], this.x, this.y, 250, 250);

	}

}

function preload() {

	song = loadSound("Sounds/fidgetSpinnerSong.mp3");

	for (var i = 1; i <= 4; i++) {

		fidgetSpinners.push(loadImage("Spinners/fidgetSpin" + i + ".png"));

	}

}

function setup() {

	fidget = new fidgetSpinner();

	createCanvas(1360, 768);
	background(0, 0, 255);

}

function draw() {

	if (!song.isPlaying()) {

		song.play();

	}

	background(0, 0, 255);
	
	textSize(75);
	text("Total Spins: " + totalSpins, 2, 70);
	
	frameRate(20);

	fidget.spin(spinFrame);
	spinFrame++;

	if (spinFrame == fidgetSpinners.length) {

		spinFrame = 0;
		totalSpins++;

	}

}
