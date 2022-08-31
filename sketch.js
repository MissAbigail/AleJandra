
var backgroundImg;
var backgroundImg2;
var canvas;
var alice,aliceImg;
var lucy,lucyImg;
var player1;
var player2;
var gameState=0;
var playerCount;
var allPlayers;
var database;
var form, player, game;
var gemas;
var gemasGroup;
var diamanate,diamanteImg;
var gema1,gemaImg1;
var gema2,gemaImg2;
var gema3,gemaImg3;
var carbon,carbonImg;
var carbonGroup;
var score=0;
var plays=[];

function preload() {
  backgroundImg = loadImage("./images/fondo1.gif");
  backgroundImg2 = loadImage("./images/fondo2.gif");
  aliceImg= loadImage("./images/Alice.png");
  lucyImg= loadImage("./images/Lucy.png");
  diamanteImg = loadImage("images/diamante.png");
  gemaImg1 =loadImage("images/gema3.png");
  gemaImg2 =loadImage("images/gema2.png");
  gemaImg3 = loadImage("images/gema4.png");
  carbonImg=loadImage("images/carbon.png");

  gemasGroup = new Group();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  
}

function draw() {
background(backgroundImg);
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  clear(); 
  game.play();
}
if (gameState === 2) {
    
  game.end();
}

}
