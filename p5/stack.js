function setup(){
  createCanvas(1000, 800, WEBGL);
}

function draw(){
  background(250);
  orbitControl();
  var mx = mouseX;
  var my = mouseY;
  for(i=0; i<10; i++){
      var x=mouseX;
      var y=mouseY;

      translate(mouseX-500, mouseY-425, 0);
      if(mx!=x){
        rotateX(frameCount * 0.01);
      }
      if(my!=y){
        rotateY(frameCount * 0.01);
      }
    else
      {
        rotateX(0);
        rotateY(0);
      }
    push();
    box(70, 70, 70);
    pop();
    }
  }
