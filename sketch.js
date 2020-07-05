const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player, backgroundimg1;
var backgroundSprite;
var objs;
var rand, randome, randomee;

function preload(){
  backgroundimg1 = loadImage("images/floor1.png");
  objs = loadImage("images/obstacle1.png");
  }

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  rand = Math.round(random(1,4));
  randome = Math.round(random(200,800));

  backgroundSprite = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  backgroundSprite.addImage(backgroundimg1);
  backgroundSprite.scale = 2;
  backgroundSprite.velocityY = 6;
  backgroundSprite.x = backgroundSprite.height/2;
  player = new Player(windowWidth/2 - 300,windowHeight/2,300,300);
 }

function draw() {
  background("white");  
  if (backgroundSprite.y > windowHeight) {
    backgroundSprite.y = backgroundSprite.height/2;
  }
  //console.log(backgroundSprite.y);
  if(frameCount % 100 === 0){
     var obs = createSprite(randome,windowHeight/3,300,300);
     obs.addImage(objs);
     obs.velocityY = 6;
    
  }
 
  drawSprites();
  player.display();
}