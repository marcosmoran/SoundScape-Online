
var logo; // image
var planetChoose = 0;
var planety;
var planetSize;
var planetCounter = 0;

var songInput;
var startTime;
var songDuration;
var[] soundArray = new soundArray[300]; // float array
var x = 0; // counter for sound array CAHNGE THE NAME IDIOT
var play = false;
var smallest = 1000; // smallest value of sound array, gonna need tweaking

var counterCounter = 0;


var opacity;
var highest2 = 0;
var countdown = 60;
var dead;





var shipPosition = 3;
var powerupCounter = 0;
var coinRate = 50;
var spriteCount = 0;
var enemyCounter = 0;
var backdrop; // image
var coinsCollected = 0;
var gameState = 0;
var backdropx = 0;
var yspeed;
var downflag = 0;
var upflag = 0;
var upnumber,downnumber;
var coinflag;
var c;
var debriscounter = 0;
var counter = 0;
var coincounter = 0;

var highest;
PImage mainMenuPlanet; //image
PImage tutorial; // image

PImage smallPlanet; // image
var smallPx, smallPy;
PImage[] enemyArray = new PImage[4]; // image
PImage[] backdropArray = new PImage[5]; /// image
PImage[] planetArray = new PImage[3]; // image
 

Coin[] coins = new Coin[50];
Star[] stars = new Star[150];
Debris[] debris = new Debris[6];
Player player1;
Enemy  enemy;
Minim minim;

Sound theme;
Powerup powerup;
AudioPlayer song;
AudioPlayer song2;
BeatDetect beat;
AudioOutput out;
FFT fft;
FFT fft2;

function preload() {
    
}

function setup() {
    
    
}

function draw() {
    
    
}
