var s;
var scl =20;
var food;
function setup() {
  createCanvas(600, 600);
  s= new snake();
  frameRate(10);
  pickLocation();
  
}
function pickLocation(){
    var cols = floor(height/scl);
    var rows = floor(width/scl);
    food=createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}
function draw() {
  background(51);
  if(s.death()){
    s.reset();
  pickLocation();
  }
  s.update();
  s.show();
  if(s.eat(food)){
    pickLocation();
  }
  fill(255,0,100);
  rect(food.x,food.y,scl,scl); 
  
  
}
function keyPressed(){
  
  if((keyCode==UP_ARROW) && (s.chek(0,1))){
    s.dir(0,-1);
  }
  else if ((keyCode==DOWN_ARROW) && (s.chek(0,-1))){
    s.dir(0,1);
  }
   else if ((keyCode==RIGHT_ARROW) && (s.chek(-1,0))){
    s.dir(1,0);
  }
   else if ((keyCode==LEFT_ARROW) && (s.chek(1,0))){
    s.dir(-1,0);
  }
  var k= keyCode;
}

