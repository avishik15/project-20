

var car, wall;
var speed, weight;
var deformation 
var state = "start"







function setup() {
  createCanvas(1600,400);
  

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor= color("grey");


}

function draw() {
  background("black");  

  if(state==="start"){

    textSize(20);
    fill("white");
    text("press S to start", 600,50);

    if(keyDown("s")) {
      state="running";
    }
  }  

  if(state==="running"){
     weight = Math.round(random(400,2500));
     speed = Math.round(random(55,90));
     car.velocityX = speed;
  

if(wall.x-car.x<wall.width/2+car.width/2) {
  car.velocityX=0;
  deformation = Math.round(0.5*weight*speed*speed/22500);


if(deformation>180)
{
car.shapeColor = color(255,0,0);
rating = "DEADLY";
}

if(deformation<180 && deformation>100)
{
  car.shapeColor = color(230,230,0);
  rating = "AVERAGE";
}

if(deformation<100)
{
   car.shapeColor = color(0,255,0);
   rating = "SAFE";
}

state = "end";
}
}

if (state==="end") {

   if(deformation>= 180){
      fill(255,0,0);

   }
   
  if(deformation<180 && deformation>= 80){
    fill(230,230,0);

  }

  if(deformation<80) {
    fill(0,255,0);
  }


  textSize(20);
  text("Speed: "+speed+"km/h",150,50);
  text("Deformation: "+deformation,350,50);

  textSize(25);
  text("Rating: "+rating,600,50);

  text("press r to reset",900,50);
  if(keyDown("r")) {
    reset();
  }
}



  drawSprites();
}

function reset() {
  state="start";
  car.x=50;
  car.shapeColor=color(127,127,127);

}










