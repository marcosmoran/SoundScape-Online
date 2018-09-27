//homescreen vars
//var logo; // image
//var planetChoose = 0;
//var planety;
//var planetSize;
//var planetCounter = 0;
//var mainMenuPlanet; //image
//var tutorial; // image
//var smallPlanet; // image
//var smallPx, smallPy;
//
////song vars
//var songInput;
//var startTime;
//var songDuration;
////var[] soundArray = new soundArray[300]; // float array
//var x = 0; // counter for sound array CAHNGE THE NAME IDIOT
//var play = false;
//var smallest = 1000; // smallest value of sound array, gonna need tweaking
//var highest; // highest vaule of sound array
//var highest2 = 0;
//var counterCounter = 0;
//
//
//
//var opacity; // used to map opacity of stars
//
//var countdown = 60;
//
//// ship vars
//var gameState = 0;
//var shipPosition = 3;
//var dead;
//
//
//// collectables vars
//var powerupCounter = 0;
//var coinRate = 50;
//var coinsCollected = 0;
//var coinflag;
//var coincounter = 0;
//
//// game objects vars
//var spriteCount = 0;
//var enemyCounter = 0;
//var backdrop; // image
//var backdropx = 0;
//var yspeed;
//
//var c; // used to map the values
//var debriscounter = 0;
//var counter = 0;
//

//PImage[] enemyArray = new PImage[4]; // image
//PImage[] backdropArray = new PImage[5]; /// image
//PImage[] planetArray = new PImage[3]; // image

//Sound theme;
//Powerup powerup;
//Player 
//Enemy  enemy;
//
//Coin[] coins = new Coin[50];
//Star[] stars = new Star[150];
//Debris[] debris = new Debris[6];


//Minim minim;


//AudioPlayer song;
//AudioPlayer song2;
//BeatDetect beat;
//AudioOutput out;
//FFT fft;
//FFT fft2;
var player;
var enemy;
var backdrop;
var backdropx = 0;
var obstacle;
var obstacleArray = [];
function preload() {
     
     player = new Player();
     enemy = new Enemy();
     loadImages();
    for(var i = 0;  i < 3; i++){
        
        obstacleArray[i] = new Obstacle();
    }
}

function setup() {
    //768
    createCanvas(1280, 432);
   
   
}

function draw() {

    cycleBG();
   
    enemy.fly();
    for(var i = 0;  i < 3; i++) {
    obstacleArray[i].travel();
            obstacleArray[i].obstacleTrigger = true;
    }
    player.update();
   

 
}
function loadImages() {
    
    backdrop = loadImage("images/background1.png")

}
function cycleBG(){
    
    image(backdrop, backdropx, 0);
      image(backdrop, backdropx + backdrop.width, 0);
      
      if (backdropx <= -(backdrop.width)) {
        backdropx = 0;
      }
      backdropx = backdropx - 5;
   
    
}

