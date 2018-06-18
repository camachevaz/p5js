function Star() {
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.z = random(width);
	this.pz = this.z;

	this.update = function() {
		this.z = this.z - speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.pz = this.z;
		}
	}

	this.show = function() {
		fill(random(120, 180));
		noStroke();

		var sx = map(this.x / this.z, 0, 1, 0, width);
		var sy = map(this.y / this.z, 0, 1, 0, height);

		var r = map(this.z, 0, width, 16, 0);
		ellipse(sx, sy, r, r);

		this.pz = this.z;
	}
}