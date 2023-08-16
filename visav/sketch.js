var stars = [];
var speed;
var mic;
var volHistory = [];
var yoff1 = 0.0;

function setup() {
	noCursor();

	mic = new p5.AudioIn("fever.mp3");
	mic.start();

	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 1500; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	var vol = mic.getLevel();
	volHistory.push(vol);
	
	speed = map(vol, 0, 1, 1, 250);
	bg = map(vol, 0, 1, 0, 255)
	diametro = map(vol, 0, 1, 0, windowWidth);
	var m = map(vol, 0, 1, 0, height);

	function blobby(factor,background){
		//Dibujar a Blobby externo
		var radius =  random(m-factor,m+factor);
		noStroke();

		if(background == 1){
			fill(random(255), random(255), random(255));
		}else{
			fill(random(10, 25));
		}
		
		beginShape();
		var xoff1 = 0;
		for(var a1 = 0; a1 < TWO_PI; a1 += 0.01){
		var offset1 = map(noise(xoff1, yoff1), 0, 1, -25, 25);
			var r1 = radius + offset1;
			var x1 = r1 * cos(a1);
			var y1 = r1 * sin(a1);
			vertex(x1, y1);
			xoff1 += 0.05;
		}
		endShape();

		yoff1 += 0.01;
	}

	background(bg);
	stroke(random(155), random(155), random(155));

	noFill();
	translate(windowWidth/2, 0);
	beginShape();
	for(var i = 0; i < volHistory.length; i++){
		var y = map(volHistory[i], 0, 1, height/2, 0);
		vertex(i, y);
	}
	endShape();
	beginShape();
	for(var i = 0; i < volHistory.length; i++){
		var y = map(volHistory[i], 0, 1, height/2, height);
		vertex(i, y);
	}
	endShape();
	if(volHistory.length > width){
		volHistory.splice(0,1);
	}

	noFill();
	translate(0, 0);
	beginShape();
	for(var i = 0; i < volHistory.length; i++){
		var y = map(volHistory[i], 0, 1, height/2, 0);
		vertex(-i, y);
	}
	endShape();
	beginShape();
	for(var i = 0; i < volHistory.length; i++){
		var y = map(volHistory[i], 0, 1, height/2, height);
		vertex(-i, y);
	}
	endShape();
	if(volHistory.length > width/2){
		volHistory.splice(0,1);
	}

	translate(0,windowHeight/2);
	
	for (var i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}

	blobby(random(40,60),1);
	blobby(random(10,30),0);
	blobby(random(0,20),1);
	blobby(-20,-10);
}
