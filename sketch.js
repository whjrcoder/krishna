

function preload(){
  krishnnaimg=loadAnimation("images/run1.png","images/run2.png")
}


function setup() {
  createCanvas(800,400);
krishsprite=createSprite(200,200,40,40);
krishsprite.addAnimation("run",  krishnnaimg)
  
}

function draw() {
  background("blue");
  
  drawSprites();
}