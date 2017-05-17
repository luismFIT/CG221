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
		rotate(radians(frameCount));
		rect(50, 50, 300, 20);
		pop();
	}
}
