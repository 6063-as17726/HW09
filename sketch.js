//color(178, 203, 245)


function setup() {
	createCanvas(600, 600);
	background(0);
	rectMode(CENTER); 
	const t = width/4;

	patternColors([color(0), color(227, 231, 250)]);
	pattern(PTN.checked(150));
	rectPattern(0,0, 6000, 6000);
	rectMode(CORNER); 
	
	//row 1
	patternColors([color(251, 90, 95), color(255, 192, 19)]);
	pattern(PTN.stripeCircle(t / 2));
	ellipsePattern(t/2, t/2, t ,t);

	patternColors([color(251, 90, 95), color(237, 154, 222)]);
	pattern(PTN.stripeCircle(t / 4));
	arcPattern(t, t * 2, t*2 ,t*2 ,TAU * 0.5,  TAU * 0.75);

	patternColors([color(0), color(0)]);
	pattern(PTN.stripeCircle(t));
	arcPattern(t, t * 2, t*2 ,t*2 ,TAU * 0.25, TAU * 0.5);
	
	patternColors([color(251, 90, 95), color(255, 192, 19)]);
	pattern(PTN.wave(100, 10, 20, 10));
	arcPattern(t, t * 4, t*2 ,t*2 ,TAU * 0.5, TAU * 0.75);

	//row 2
	patternColors([color(0), color(237, 154, 222)]);
	pattern(PTN.dot(15, 7));
	rectPattern(t,0, 150, 150);

	patternColors([color(251, 90, 95), color(251, 90, 95)]);
	pattern(PTN.stripeCircle(t));
	arcPattern(t, t * 2, t*2 ,t*2 ,TAU * 0.75,  TAU * 1);
	
	patternColors([color(255, 192, 19), color(0)]);
	pattern(PTN.checked(15));
	arcPattern(t*2, t *3, t*2 ,t*2 ,TAU * 0.5, TAU * 0.75);

	patternColors([color(0), color(227, 231, 250)]);
	pattern(PTN.noise(1));
	ellipsePattern(t*1.5, t * 3.5, t ,t);

	//row 3
	patternColors([color(251, 90, 95)]);
	pattern(PTN.stripeCircle(t));
	arcPattern(t*2.5, t, t ,t ,TAU * 0.5, TAU * 1);
	
	patternColors([color(227, 231, 250)]);
	pattern(PTN.stripeCircle(t));
	arcPattern(t*2.5, t, t ,t ,TAU * 0, TAU * 0.5);

	patternColors([color(237, 154, 222), color(251, 90, 95)]);
	pattern(PTN.cross(20, 5));
	rectPattern(t*2,t*2, 150, 150);

	patternColors([color(255, 192,19), color(227, 231, 250)]);
	pattern(PTN.stripeCircle(t/4));
	arcPattern(t*3, t *4, t*2 ,t*2 ,TAU * 0.5, TAU * 0.75);

	//row 4
	patternColors([color(255, 192, 19), color(237, 154, 222)]);
	pattern(PTN.triangle(50, 50));
	arcPattern(t*4, t, t*2 ,t*2 ,TAU * 0.5, TAU * 0.75);

	patternColors([color(237, 154, 222)]);
	pattern(pattern(PTN.stripeCircle(t)));
	arcPattern(t*4, t, t*2 ,t*2 ,TAU * 0.25, TAU * 0.5);

	patternColors([color(227, 231, 250), color(251, 90, 95)]);
	pattern(PTN.stripeCircle(t / 4));
	ellipsePattern(t*3.5, t*2.5, t ,t);

	patternColors([color(0), color(255, 192, 19)]);
	pattern(PTN.stripeRadial(PI / 4));
	rectPattern(t*3,t*3, 150, 150);	
} 

