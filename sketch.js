
var monkey , monkey_running;
var banana ,bananaImage, banana, obstacleImage, ground, obstcle;
var survival_time=0;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  
}


function draw() {
  background(225);
  
      if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
      if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);

  Banana();
  Obstcle();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  
    stroke("black");
  textSize(20);
  fill("black");
  survival_time=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survival_time, 100,50);
  
  
}


function Banana(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.debug = true;
    banana.y = Math.round(random(50,340));
    banana.velocityX = -7;
    banana.setLifetime=100;
  }
}

function Obstcle(){
  if(World.frameCount%300 === 0){
    obstcle = createSprite(300,315,20,20);
    obstcle.addImage(obstacleImage);
    obstcle.velocityX = -6;
    obstcle.scale = 0.1;
  }
}

