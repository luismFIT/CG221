function setup(){
  createCanvas(1000, 800, WEBGL);
}

function draw(){
  background(250);
  var mx = mouseX;
  var my = mouseY;
  translate(mx, my, 0);
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01 * mx);
   rotateY(frameCount * 0.01 * my);
   for(var i = 0; i < 10; i++){
     translate((my * 0.001), (mx * 0.001) * mx, i * 0.001);
     rotateZ(frameCount * 0.001);
     push();
     sphere(70);
     pop();
   }
 }
