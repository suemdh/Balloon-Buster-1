var bow , arrow,  background;
var bowImage, arrowImage, greenballoonImage, redballoonImage, pinkballoonImage ,blueballoonImage, backgroundImage;
var score=0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  greenballoonImage=loadImage("green_balloon0.png");
  pinkballoonImage=loadImage("pink_balloon0.png");
  blueballoonImage=loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
 
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  

  text("Score: "+ score, 270,30);
}

function draw() {
 background(0);


 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redballoon();
    }
  else if(select_balloon == 2){
  greenballoon();
  }
  else if(select_balloon == 3){
    blueballoon();
  }
  else{
    pinkballoon();
    }

  

  }
  
 drawSprites();
 text("Score: "+ score, 270,30);

}

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redballoon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueballoon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueballoonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;





}

function greenballoon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenballoonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkballoon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkballoonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 1.4;

}

