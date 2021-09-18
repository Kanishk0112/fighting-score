var player,playeridle,playerkick,playerwalk,playerpunch,blocking,crouch,playergetshit;
var ground,groundimg;
var invisibleground;
var backgroundimg;
var gameState = "serve";
var enemy,enemyidle,enemykick,enemypunch,enemycrouch;
var score;
function preload(){
  playeridle=loadAnimation("IMAGES/walk b (2).png","IMAGES/walk b (3).png")
  playerkick=loadAnimation("IMAGES/Air Kick 1 (2).png","IMAGES/Air Kick 1 (3).png","IMAGES/Air Kick 1 (4).png",
  "IMAGES/Air Kick 1 (5).png","IMAGES/Air Kick 1 (6).png")
 backgroundimg= loadImage("IMAGES/fighting2.jpg");
 playerwalk= loadAnimation("IMAGES/walk b (2).png","IMAGES/walk b (3).png","IMAGES/walk b (4).png",
 "IMAGES/walk b (5).png","IMAGES/walk b (6).png");
 playerpunch=loadAnimation("IMAGES/Ap2 (5).png","IMAGES/Ap3 (2).png","IMAGES/Ap3 (3).png","IMAGES/Ap3 (4).png",
 "IMAGES/Ap3 (5).png","IMAGES/Ap3 (6).png");
 playergetshit=loadAnimation("Images/get hits and fall (12).png","Images/get hits and fall (13).png","Images/get hits and fall (14).png");
 blocking=loadAnimation("IMAGES/blocking.png","IMAGES/blocking (2).png","IMAGES/blocking (3).png","IMAGES/blocking (4).png");
 crouch=loadAnimation("IMAGES/crouch S P (2).png","IMAGES/crouch S P (3).png","IMAGES/crouch S P (4).png",
 "IMAGES/crouch S P (5).png","IMAGES/crouch S P (6).png");
enemyidle= loadAnimation("IMAGES/enemywalk.png","IMAGES/enemyrun.png");
enemykick=loadAnimation("IMAGES/Air Kick 1 (2)1.png","IMAGES/Air Kick 1 (3)2.png","IMAGES/Air Kick 1 (4)3.png",
  "IMAGES/Air Kick 1 (5)4.png","IMAGES/Air Kick 1 (6)5.png");
  enemypunch=loadAnimation("IMAGES/Ap3 (4)4.png")
  enemyblocking=loadAnimation("IMAGES/blocking 0.png","IMAGES/blocking (2)1.png","IMAGES/blocking (3)2.png","IMAGES/blocking (4)3.png");
enemycrouch=loadAnimation("IMAGES/crouch S P (2)1.png","IMAGES/crouch S P (3)2.png","IMAGES/crouch S P (4)3.png","IMAGES/crouch S P (5)4.png","IMAGES/crouch S P (6)5.png")
}
function setup(){
  createCanvas(1400,600);
  player= createSprite(300,570,100,150);
player.addAnimation("player",playeridle);
player.scale=3;
enemy= createSprite(1000,570,100,150);
enemy.addAnimation("enemy",enemyidle);
enemy.scale=3;
ground= createSprite(700,590,1400,30);

invisibleground= createSprite(700,585,1400,20);
invisibleground.visible=false;
enemy.setcollider= true;
score=0;
}

function draw(){
  background(backgroundimg);
  drawSprites();
  player.collide(invisibleground);
 enemy.collide(invisibleground);
 fill("white")
 text( score,758,98);
 if(gameState==="serve"){
    player.addAnimation("player",playeridle);
    enemy.addAnimation("enemy",enemyidle);
  }
  if(player.isTouching(enemy)){
  enemy.addAnimation("enemy",enemyblocking);
  
  }
  
  /*if(enemy.isTouching(player)){
    player.addAnimation("player",blocking);
    }*/
  if(keyDown("space")&& gameState ==="serve"){
gameState ="play"
  }
  if(gameState==="play"){
 if(keyWentDown("w")){
  player.addAnimation("player",playerkick);
 }
 
 if(keyWentUp("w")){
  player.addAnimation("player",playerwalk);
 }
 if(keyWentDown("ENTER")){
  player.addAnimation("player",crouch);
 }
 if(keyWentUp("ENTER")){
  player.addAnimation("player",playerwalk);
 }

 if(keyDown("RIGHT_ARROW")){
  player.addAnimation("player",playerwalk);
  player.x=player.x+40;
 }
 if(keyDown("LEFT_ARROW")){
  player.addAnimation("player",playerwalk);
  player.x=player.x-40;
 }
 
 if(keyWentDown("UP_ARROW")){
  player.addAnimation("player",playerpunch);
  }
  if(keyWentUp("UP_ARROW")){
    player.addAnimation("player",playerwalk);
  }
 if(keyWentDown("DOWN_ARROW")){
  player.addAnimation("player",blocking);
    }
    if(keyWentUp("DOWN_ARROW")){
      player.addAnimation("player",playerwalk);
    }  
}
console.log(mouseX);
console.log(mouseY)
if(player.x>800&&player.y>248){

enemy.addAnimation("enemy",enemypunch)
player.addAnimation("player",playergetshit)
}

}

