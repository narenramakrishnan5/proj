var bullet,wall
var speed,weight
var thickness
var Damage
function preload(){

}
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 50, 50, 50);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed
  Damage=0.5*weight*speed*speed/thickness*thickness*thickness
  if(Damage<10){
    car.shapeColor=color(0,255,0) 
  }
 
  if(Damage>10){
    car.shapeColor=color(255,0,0) 
  }
  if(car.isTouching(wall)){
    car.velocityX=0
  }
  drawSprites();
}