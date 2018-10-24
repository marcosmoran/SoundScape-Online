var player;
var enemy;
var backdrop;
var backdropx = 0;
var obstacle;
var obstacleArray = [];
var coinArray = [];
var starArray = [];
var coinRate = 50;
var coinCounter = 0;
var currentCoin = 0;
var powerCounter = 0;
var mid, lowMid, highMid;
var fft, peakDetect;
var scoreGlobal, oldScoreGlobal;
var currentObstacle = 0;
var targetObstacle = 2;
function preload() {
     sound = loadSound("home.mp3");
}
   
    

function setup() {
    //768
    createCanvas(1280, 432);
    
    fft = new p5.FFT();
     player = new Player();
     enemy = new Enemy();
     powerup = new Powerup();
     loadImages();
    for(var i = 0;  i < 12; i++){
        
        obstacleArray[i] = new Obstacle();
    }
    
    for(var i = 0;  i < 10; i++){
        
        coinArray[i] = new Coin();
    }
    
      for(var i = 0;  i < 200; i++){
        
        starArray[i] = new Stars();
    }
    peakDetect = new p5.PeakDetect(4000, 12000,0.2)
    sound.play()
   
}

function draw() {
    

    cycleBG();
    
    analyzeSound();
    coinSpawner()
    starSpawner();
    enemy.fly();
  
    for(var i = 0; i < obstacleArray.length; i++){
         obstacleArray[i].travel();
    }
 
    
    
    player.update();
    powerup.update();
    if(!powerup.active){
         powerCounter++;
    }
    if(powerCounter === 1000) {
        
        powerup.select = true;
         obstacleSpawner();
        powerCounter = 0;
    }
 
   
  var waveform = fft.waveform();
//  
//  noFill();
//  beginShape();
//  stroke(255,255,255, 50); // waveform is red
//  strokeWeight(1);
//  for (var i = 0; i< waveform.length; i++){
//    var x = map(i, 0, waveform.length, 0, width);
//    var y = map( waveform[i], -1, 1, 0, height);
//    vertex(x,y);
//  }
//  endShape();

    



 
}
function loadImages() {
    
    backdrop = loadImage("images/background2.png");

}
function cycleBG(){
    
    image(backdrop, backdropx, 0);
      image(backdrop, backdropx + backdrop.width, 0);
      
      if (backdropx <= -(backdrop.width)) {
        backdropx = 0;
      }
      backdropx = backdropx - 5;
   
    
}
function coinSpawner(){
        coinCounter++;
    if(coinCounter == coinRate) {
        
        if(currentCoin == 10 ){
            currentCoin = 0;
        }
        coinArray[currentCoin].trigger = true;
        coinCounter = 0;
        currentCoin++;
         }
}

function analyzeSound(){
   fft.analyze();
   fft.smooth();
   peakDetect.update(fft);
  
   mid = fft.getEnergy("mid");
   lowMid = fft.getEnergy("lowMid");
   highMid = fft.getEnergy("highMid");
  scoreGlobal = (lowMid * 0.66) + (0.8 * mid) + highMid;
 // console.log(scoreGlobal);
  
    
}

function starSpawner(){
      //white stars
 var size = map(scoreGlobal, 250, 450, 0, 7);   
  for(var i = 0; i < starArray.length; i++) {
      
    starArray[i].show(size);

  }
}

function obstacleSpawner() {
    console.log('spawn');
     if(currentObstacle = 11){
        currentObstacle = 0;
    }
    
    while(currentObstacle < targetObstacle) {
//    
//    if (i > currentObstacle) {
//    obstacleArray[i].obstacleYPosition = obstacleArray[i - 1].obstacleYPosition + 150;
//    }
   
    obstacleArray[currentObstacle].obstacleTrigger = true;
    currentObstacle++;
    }
    targetObstacle = currentObstacle + 2;

    
    
    
    
}
