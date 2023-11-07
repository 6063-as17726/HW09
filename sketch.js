//color(178, 203, 245)


function setup() {
	createCanvas(600, 600);
	background(0);
	rectMode(CENTER); 
	const t = width/4;
	
	patternColors([color(0), color(245, 236, 178)]);
	pattern(PTN.checked(150));
	rectPattern(0,0, 6000, 6000);

	patternColors([color(245, 236, 178), color(39, 100, 204)]);
	rectMode(CORNER); 
	pattern(PTN.stripeCircle(t / 4));
	rectPattern(0, 0, t, t);




} 

// function draw() { 

// }