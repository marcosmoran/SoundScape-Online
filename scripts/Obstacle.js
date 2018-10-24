class Obstacle {
    
    constructor() {
        
       this.obstacleTrigger;
        this.obstacleImage = createSprite();
        this.obstacleImage.addImage(loadImage("images/asteroid.png"));
        this.obstacleImage.position.x  = width + 20;
        this.obstacleImage.position.y = random(0, 200);
        this.obstacleImage.depth = 3;
        this.obstacleImage.visible = false;
    }
    
    travel() {
        
        
        if  (this.obstacleTrigger === true) {
            this.obstacleImage.visible = true;
            this.obstacleImage.position.x  -= 5;
            this.collide();
           
           
            if(this.obstacleImage.position.x < 0){
               this.reInitialize();
            }
    } 
        drawSprites();
    }
    
     reInitialize() {
         
         this.obstacleImage.position.x  = width + 20;
         this.obstacleImage.position.y = random(0, 200);
         this.obstacleTrigger = false;
         this.obstacleImage.visible = false;
        
    }
    collide(){
         if(this.obstacleImage.overlap(powerup.shieldOnSprite)){
                powerup.shieldOff = true;
            }
        if(!player.immunity){
        if(this.obstacleImage.overlap(player.shipImage)){
        
            player.shipXPosition -= 200;
            player.shipPosition -= 1;
            
        }
           
    }}
    
    die(){}
    
}