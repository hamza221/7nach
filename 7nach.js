var s;
var scl =20;
var food;
var blo9;
function setup() {
  createCanvas(600, 600);
  s= new snake();
 
  frameRate(10);
  pickLocation();
  
}
function pickLocation(){
    var cols = floor(height/scl);
    var rows = floor(width/scl);
    
    food=createVector(floor(random(cols-1)),floor(random(rows-1)));
    food.mult(scl);
    while(food.x==0||food.y==0||food.x==580||food.y==580){
      food=createVector(floor(random(cols-1)),floor(random(rows-1)));
      food.mult(scl);
    }
    
}
function draw() {
  
  background(51);
  stroke(color(255, 255, 255));  
  fill(255,255,255);
  textSize(16);
  text(s.total, 20, 20);
  stroke(color(255, 255, 255));  
  strokeWeight(1);
  fill(55);
  rect(20, 20, 560, 560);
  stroke(color(51));  
  if(s.x==0 || s.y==0||s.x==580||s.y==580){
    console.log("zeb");
    s.reset();
    pickLocation();
    
  }
  s.death();
  s.update();
  s.show();
  
  if(s.eat(food)){
    pickLocation();
  }
  stroke(color(51));  
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

