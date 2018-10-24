class Player {
    
    constructor() {
        
        this.shipXPosition = 1020;
        this.playerDead = false;
        this.playerRespawning;
        this.shipPosition = 4;
        this.shipImage = createSprite();
        this.shipImage.addImage(loadImage("images/alien1.png"));
        this.shipImage.depth = 1;
        this.flickerCounter = 0;
        this.immunity = false;
        this.coinsCollected = 0;
        this.disablePlayerControls = false;
    }

    
    
    update(){
        //220 - 1020
        if (this.playerDead) {
            this.die();
        }
        if(this.playerRespawning){
           
            this.flicker();
            this.respawn();
        }
        if(!this.disablePlayerControls) {
            this.shipImage.position.x = this.shipXPosition;
            this.shipImage.position.y = mouseY;
           }
        
        
        //console.log(this.disablePlayerControls);
        drawSprites();
    }
    die() {
        this.playerDead = false;
        this.shipImage.position.y = -100;
        this.shipImage.position.x = 1020;
        this.shipXPosition = 1020;
        this.shipPosition = 4;
        this.playerRespawning = true; 
      
    }
    respawn(){
       
        if(this.shipImage.position.y < 200) {
            this.shipImage.position.y++;
            }
        
        if(this.shipImage.position.y >= 200) {
             
            this.immunity = false;
            this.playerDead = false;
            this.shipImage.visible = true;
            this.playerRespawning = false;
            this.disablePlayerControls = false;
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