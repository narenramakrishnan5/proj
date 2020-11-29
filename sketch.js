var car,wall
var speed,weight
var Deformation
function preload(){

}
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed
  Deformation=0.5*weight*speed*speed/22500
  if(Deformation<100){
    car.shapeColor=color(0,255,0) 
  }
  if(100<Deformation<180){
    car.shapeColor=color(230,230,0) 
  }
  if(Deformation<180){
    car.shapeColor=color(255,0,0) 
  }
  if(car.isTouching(wall)){
    car.velocityX=0
  }
  drawSprites();
}