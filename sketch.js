
function preload(){
  //pre-load images
  pathImg =loadImage("path.png");
boyImg =
loadAnimation("jake1.png" ,"jake2.png","jake3.png" ,"jake4.png","jake5.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  var path=createSprite(200,200,200,200);
  path=addImage("pathImg");
  path.velocityY=4;
  path.scale(1.2);

  boy=createSprite(180,340,30,30);
  boy=addAnimation("jakeRunning",boyImg);

  leftBoundry =createSprite(0,0,100,800) 
leftBoundry.visible=false;

}

function draw() {
  baground(0);
  path.velocityY=4;

  edges=createSprite();
  boy.collide(edges[3]);
  boy.collide(leftBoundry)
  boy.collide(rightBoundry);
  if(path.y>400){
    path.y =height/2;

  }
drawSprite();

}
