function setup(){
  createCanvas(1000, 800, WEBGL);
}

function draw(){
  background(250);
  var mx = mouseX;
  var my = mouseY;

     translate(mouseX-500, mouseY-425, 0);
     rotateX(frameCount * 0.01 * mx);
     rotateY(frameCount * 0.01 * my);
     push();
     sphere(70);
     pop();
   
 }
//
