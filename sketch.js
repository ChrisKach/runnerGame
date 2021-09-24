var path,pathImage;
var runner1,runner1Image;
var edges
function preload(){
pathImage = loadImage("path.png");
runner1Image = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200,400,400);
  path.addImage(pathImage);
  path.velocityY=5;

 edges=createEdgeSprites();
  
  runner1 = createSprite(200,375,50,50);
 // runner1.addAnimation(runner1Image);
  runner1.addAnimation("running",runner1Image);
  runner1.scale=0.05
}

function draw() {
  background(0);
  runner1.x=mouseX;
if(path.y>400){
  (path.y=20)
}
if(runner1.x>400){
  runner1.x=320
}
if(runner1.x<0){
  runner1.x=80;
}
drawSprites();

}
