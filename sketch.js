function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	rectMode(CENTER);
	
	// Assuming PTN is a pattern drawing library object with PTN.checked() function
	let checkedPattern = PTN.checked(20);
	
	// Draw a pattern using rectPattern() function
	rectPattern(width / 2, height / 2, 400, 400, checkedPattern);
  }
  
  function rectPattern(x, y, w, h, pattern) {
	let patternSize = pattern.size;
	for (let i = x - w / 2; i < x + w / 2; i += patternSize) {
	  for (let j = y - h / 2; j < y + h / 2; j += patternSize) {
		pattern.draw(i, j, patternSize, patternSize);
	  }
	}
  }
  