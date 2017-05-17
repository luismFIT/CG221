function setup() {
	createCanvas(1200, 900);
}

function draw(){
	background(200);
	scale(mouseX/500, mouseY/500);
  fill(mouseX, mouseY, 150);

  if (frameCount % 1 == 0) {
		push();
		translate(mouseX, mouseY);
		ellipse(0, 0, 500, 500);
		pop();

		push();
		translate(mouseX, mouseY);
		rotate(radians(frameCount));
		rect(0, 0, 200, 15);
		pop();

		push();
		translate(mouseX, mouseY);
		rotate(frameCount/6);
		rect(0, 0, 250, 10);
		pop();
	}
}
