class Player {
    
    constructor() {
        
        this.shipXPosition = 1020;
        this.playerDead;
        this.playerRespawning;
        this.shipPosition = 4;
        this.shipImage = createSprite();
        this.shipImage.addImage(loadImage("images/alien1.png"));
        this.shipImage.depth = 1;
        this.flickerCounter = 0;
        this.immunity = false;
        this.coinsCollected = 0;
    }

    
    
    update(){
        //220 - 1020
        if(!this.playerDead || !this.playerRespawning || !enemy.eating || this.shipPosition != 0) {
            this.shipImage.position.x = this.shipXPosition;
            this.shipImage.position.y = mouseY;
           }
        
        if(this.playerRespawning){
           
            this.flicker();
            this.respawn();
        }
        
        drawSprites();
    }
    die() {
        this.playerDead = true;
        this.shipImage.position.y = 0;
        this.shipImage.position.x = 1020;
        this.shipXPosition = 1020;
        this.shipPosition = 4;
        this.playerRespawning = true; 
    }
    respawn(){
        
        if(this.shipImage.position.y < 200) {
            this.shipImage.position.y +=2;
            
            console.log("respawning");
        }
        else {
             
            this.immunity = false;
            this.playerDead = false;
            this.shipImage.visible = true;
            this.playerRespawning = false;
        }
        
    }
    
   
    
    flicker(){
        this.flickerCounter++;
        if(this.flickerCounter < 3 ){
        this.shipImage.visible = false;
        }
          if(this.flickerCounter > 3 ){
        this.shipImage.visible = true;
        }
        
        if(this.flickerCounter == 6){
            this.flickerCounter = 0;
        }
    }
    
}