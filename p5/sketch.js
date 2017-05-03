function setup() {
  createCanvas(2000, 3000);
}

function draw() {
  if (mouseIsPressed) {
    fill(100);
  } else {
    fill(200);
  }
  ellipse(mouseX, mouseY, 30, 30);
}
