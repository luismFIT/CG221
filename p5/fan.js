function setup(){
  createCanvas(1000, 800, WEBGL);
}


function draw(){
  background(250);
  orbitControl();
  var mx = mouseX;
  var my = mouseY;


  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 20; i++){
      translate((my * 0.001 + j) * 100, (mx * 0.001 + j) * mx, i * 0.1);
      rotateZ(frameCount * 0.001);
      push();
      box(8, 6, 4);
      pop();
    }
    pop();
  }

  }
