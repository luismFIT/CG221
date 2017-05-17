function setup(){
  createCanvas(1000, 800, WEBGL);
  img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSb-ajWmJk9YrBhouxM4DrFeFpLYNsrAzYRiAi3hHPll2ufqgp");
}

function draw(){
  background(250);
  var mx = mouseX;
  var my = mouseY;

     translate(mouseX-500, mouseY-425, 0);
     rotateX(0.01 * my);
     rotateZ(0.01 * mx);
     push();
     texture(img);
     sphere(70);
     pop();
 }
