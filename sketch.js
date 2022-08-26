var wall1,wall2,wall3,wall4;
var snake;
var snakeTopImg,snakeBottomImg,snakeLeftImg,snakeRightImg;
var edges;
var coins,coinsImg,coinsG;
var diamond,diamondImg,diamondG;
var box,boxImg,boxG
var score=0;
var gameover,gameoverImg
var bgMusic;
var coinMusic,diamondMusic,boxMusic;


var PLAY=1;
var END=0;
var gameState=1;


function preload(){
  snakeTopImg=loadImage("upsnake.png");
  snakeBottomImg=loadImage("downsnake.png");
  snakeLeftImg=loadImage("leftsnake.png");
  snakeRightImg=loadImage("rightsnake.png");
  coinsImg=loadImage("goldcoin.png");
  diamondImg=loadImage("diamond.png");
  boxImg=loadImage("boximage.png");
  gameoverImg=loadImage("gameover.png");
  bgMusic=loadSound("gameMusic.mp3");
  coinMusic=loadSound("coinMusic.mp3")
  diamondMusic=loadSound("diamondMusic.mp3");
  boxMusic=loadSound("boxMusic.mp3");
}


function setup() {
  createCanvas(800,400);
  wall1=createSprite(400,5,800,10)
  wall2=createSprite(5,20,10,800)
  wall3=createSprite(400,395,890,10)
  wall4=createSprite(795,20,10,800)
  snake=createSprite(80,380,50,100)
  snake.addImage(snakeTopImg);
  snake.scale=0.15
  gameover=createSprite(400,200,20,20)
  gameover.addImage(gameoverImg);

  coinsG=new Group();
  diamondG=new Group();
  boxG=new Group();





}

function draw() {
  background("black");  
  if (gameState===PLAY){
    gameover.visible=false;
  bgMusic.play();
  edges=createEdgeSprites();
  snake.collide(wall1);
  snake.collide(wall2);
  snake.collide(wall3);
  snake.collide(wall4);


    if(keyDown("UP_ARROW")){
      snake.addImage(snakeTopImg);
      snake.changeImage(snakeTopImg);
      snake.y= snake.y-5
      
    }
    if(keyDown("DOWN_ARROW")){
      snake.addImage(snakeBottomImg);
      snake.changeImage(snakeBottomImg);
      snake.y= snake.y+5
      
    }
    if(keyDown("LEFT_ARROW")){
      snake.addImage(snakeLeftImg);
      snake.changeImage(snakeLeftImg);
      snake.x= snake.x-5
      
    }
    
    if(keyDown("RIGHT_ARROW")){
      snake.addImage(snakeRightImg);
      snake.changeImage(snakeRightImg);
      snake.x= snake.x+5
      
    }
    
    if (coinsG.isTouching(snake)) {
      coinsG.destroyEach();
      score=score+20;
      coinMusic.play();
    }
    if (diamondG.isTouching(snake)) {
      diamondG.destroyEach();
      score=score+50;
      diamondMusic.play();
    }
   
    if(boxG.isTouching(snake)) {
      gameState=END;
      boxMusic.play();
    }

      
  goldcoins();
  diamonds();
  boxs();
  }
  else if(gameState===END){
        gameover.visible= true;
        coinsG.destroyEach();
        diamondG.destroyEach();
        boxG.destroyEach();

        coinsG.setVelocityYEach(0);
        diamondG.setVelocityYEach(0);
        boxG.setVelocityYEach(0);







  }
  drawSprites();
  
  textSize(20);
  fill(255);
  text("Score: "+ score,10,30);

 }
 


 function goldcoins(){
  if(World.frameCount%100==0){
    var coins = createSprite(Math.round(random(100, 700),Math.round(random(150,350)), 10, 10));
    coins.addImage(coinsImg);
    coins.scale=0.05
    coins.velocityY=3
    coins.lifetime=150
    coinsG.add(coins)


  }
  

 }

 function diamonds(){
  if(World.frameCount%200==0){
    var diamond = createSprite(Math.round(random(300, 700),Math.round(random(200,350)), 10, 10));
    diamond.addImage(diamondImg);
    diamond.scale=0.10
    diamond.velocityY=6
    diamond.lifetime=150
    diamondG.add(diamond)
}
 }

function boxs(){
  if(World.frameCount%200==0){
    var box = createSprite(Math.round(random(300, 700),Math.round(random(200,350)), 10, 10));
    box.addImage(boxImg);
    box.scale=0.25
    box.velocityY=2
    box.lifetime=150
    boxG.add(box)


}
}




 
























