function setup() {
	noCursor();
	noStroke();
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(15);

	noStroke();
	fill(12);
	rect(0,mouseY/2,windowWidth,windowHeight);

	// El ojo de Sauron
	noFill();
	for(var i=1; i<100; i++){
		var factor = i*0.01025;
		stroke(random(i,i*1.7),0,0);
		bezier(0, windowHeight/2, windowWidth/2, mouseY*factor, windowWidth/2, mouseY*factor, windowWidth, windowHeight/2);
	}

	// Elipse Randómica
	noStroke();
	fill(random(255),random(255),random(255));
	ellipse(random((windowWidth/2)-10,(windowWidth/2)+10), random((windowHeight/2)-10,(windowHeight/2)+10), mouseX*0.55, mouseY*0.55);

	fill(15);
	ellipse(random((windowWidth/2)-10,(windowWidth/2)+10), random((windowHeight/2)-10,(windowHeight/2)+10), mouseX*0.555, mouseY*0.55);
}