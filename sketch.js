var fixedRect,movingRect;
var boringRect1, boringRect2, boringRect3, boringRect4;
var edge;
var edge2;
var edge3;
var edge4;

function setup() {
  createCanvas(800,400);

  //create the sprites for the fixed and moving rects.
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  boringRect1= createSprite(100, 100, 50, 80);
  boringRect2= createSprite(300, 300, 50, 80);
  boringRect3= createSprite(200, 100, 25, 25);
  boringRect4= createSprite(700, 300, 25, 25);

  edge= createEdgeSprites();
  edge2= createSprite(0, 400, 1, 800);
  edge3= createSprite(400, 0, 800, 1);
  edge4= createSprite(400, 400, 800, 1);

  boringRect1.shapeColor="lightblue";
  boringRect2.shapeColor="lightblue";
  boringRect3.shapeColor="lightblue";
  boringRect4.shapeColor="lightblue";

  fixedRect.shapeColor="lightblue";

  edge2.shapeColor="black";

  boringRect1.velocityX = 6;
  boringRect2.velocityX = -6;
  boringRect3.velocityY = 6;
  boringRect4.velocityY = -6;
}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  boringRect1.bounceOff(edge[1]);
  boringRect2.bounceOff(edge[1]);
  boringRect1.bounceOff(edge2);
  boringRect2.bounceOff(edge2);
  boringRect3.bounceOff(edge3);
  boringRect4.bounceOff(edge3);
  boringRect3.bounceOff(edge4);
  boringRect4.bounceOff(edge4);

if(isTouching(boringRect1, movingRect)){
  movingRect.shapeColor="lightblue";
  boringRect1.shapeColor="lightblue";
}
else {
  movingRect.shapeColor="orange";
  boringRect1.shapeColor="orange";
  }

  drawSprites();
}