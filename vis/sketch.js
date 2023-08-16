
// Declaración de variables
var mic;

// Definición de espacio
function setup() {

	// Esconder el cursor
	noCursor();

	// Establecer el espacio
	createCanvas(windowWidth,windowHeight);

	// Cargar audio y abrir micrófono
	mic = new p5.AudioIn();
	mic.start();
}

// Creación de elementos
function draw() {

	// Tomar el nivel de volumen captado por el micrófono en una variable (va de 0 a 1)
	var vol = mic.getLevel();

	// Con la variable de valor del volumen asignar color al fondo
	var bg = map(vol, 0, 1, 0, 255);
	background(bg);

	// Dibujar las lìneas de zoom aleatorizadas
	for(var i = 1; i<25; i++){
		stroke(25);
		line(windowWidth/2,windowHeight/2,random(windowWidth),random(windowHeight));
	}

	// Establecer la variable para el tamaño del círculo proporcional al volumen
	var m = map(vol, 0, 1, 0, height);

	// Círculo interno (hoyo negro)
	noStroke();
	fill(random(0,255),random(0,255),random(0,255));
	ellipse(random(windowWidth/2+5,windowWidth/2-5),random(windowHeight/2+5,windowHeight/2-5),m,m);

	// Círculo exterior (brillo)
	fill(bg);
	ellipse(random(windowWidth/2+10,windowWidth/2-10),random(windowHeight/2+10,windowHeight/2-10),m-10,m-10);
}