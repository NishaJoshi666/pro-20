var car,car2,car3,wall;

var speed,weight;

function setup() {
  createCanvas(800,800);
  car = createSprite(50,500,50,50);
  car2 = createSprite(50,300,50,50);
  car3 = createSprite(50,100,50,50);

  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(700,300,10,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;

  if(wall.x - car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    car2.velocityX = 0;
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
      car2.shapeColor = color(230,230,0);
      car3.shapeColor = color(0,255,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(255,0,0);
      car2.shapeColor = color(230,230,0);
      car3.shapeColor = color(0,255,0);
    }
    if(deformation<100){
      car.shapeColor = color(255,0,0);
      car2.shapeColor = color(230,230,0);
      car3.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}