class Player {
    
    constructor() {
        
        this.shipXPosition = 1020;
        this.shipYPosition;
        this.downFlag = 0;
        this.upFlag = 0;
        this.downTarget = 0
        this.upTarget = 0
        this.playerDead;
        this.playerRespawning;
        this.shipPosition = 4;
        this.shipImage = createSprite();
        this.shipImage.addImage(loadImage("images/alien1.png"));
        this.shipImage.depth = 1;
        this.flickerCounter = 0;
    }

    
    
    update(){
        //220 - 1020
        if(!this.playerDead || !this.playerRespawning || !enemy.eating) {
            this.shipImage.position.x = this.shipXPosition;
            this.shipImage.position.y = mouseY;
            this.shipImage.visible = true;

        }
        if(this.playerRespawning){
            this.respawn();
            this.flicker();
        }
         drawSprites();
    }
    die() {
        this.playerDead = true;
        this.shipImage.position.x = 1020;
        this.shipXPosition = 1020;
        this.shipImage.position.y = 0;
        this.shipPosition = 4;
        this.playerRespawning = true;
        
    }
    respawn(){
        if (this.shipImage.position.y < 200) {
            this.shipImage.position.y++;
            this.shipImage.position.y++;
            console.log("respawning");
        }
        else {
             this.playerRespawning = false;
        }
        
    }
    
    immunity(){}
    
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