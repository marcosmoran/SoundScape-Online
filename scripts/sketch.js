var player;
var enemy;
var backdrop;
var backdropx = 0;
var obstacle;
var obstacleArray = [];
var coinArray = [];
var coinRate = 50;
var coinCounter = 0;
var currentCoin = 0;
function preload() {
     
     player = new Player();
     enemy = new Enemy();
     loadImages();
    for(var i = 0;  i < 3; i++){
        
        obstacleArray[i] = new Obstacle();
    }
    
    for(var i = 0;  i < 10; i++){
        
        coinArray[i] = new Coin();
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
    if (i != 0){
    obstacleArray[i].obstacleYPosition =  obstacleArray[i - 1].obstacleYPosition + 150;
    }
    obstacleArray[i].travel();
    obstacleArray[i].obstacleTrigger = true;
    }
    player.update();
    
    
    //coins
    coinCounter++;
    if(coinCounter == coinRate) {
        
        if(currentCoin == 10 ){
            currentCoin = 0;
        }
        coinArray[currentCoin].trigger = true;
        coinCounter = 0;
        currentCoin++;
         }
    
    for(var i = 0; i < coinArray.length; i++) { 
        
        coinArray[i].update();
        
    }
    
   

 
}
function loadImages() {
    
    backdrop = loadImage("images/background1.png");

}
function cycleBG(){
    
    image(backdrop, backdropx, 0);
      image(backdrop, backdropx + backdrop.width, 0);
      
      if (backdropx <= -(backdrop.width)) {
        backdropx = 0;
      }
      backdropx = backdropx - 5;
   
    
}

