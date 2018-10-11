class Obstacle {
    
    constructor() {
        
        this.obstacleXPosition = 1280;
        this.obstacleYPosition = random(0, 200);
        this.obstacleTrigger;
        this.obstacleImage = createSprite();
        this.obstacleImage.addImage(loadImage("images/asteroid.png"));
        this.obstacleImage.depth = 3;
        
    }
    
    travel() {
        
        
        if  (this.obstacleTrigger === true) {
            this.obstacleImage.position.x = this.obstacleXPosition;
            this.obstacleImage.position.y = this.obstacleYPosition;
            this.obstacleXPosition -= 5;
            this.collide();
           
           
            if(this.obstacleXPosition < 0){
                this.obstacleTrigger = false;
                 this.obstacleXPosition = 1280;
        this.obstacleYPosition =  432;
            }
    } else {
        
        this.obstacleXPosition = 1280;
        this.obstacleYPosition = random(0, 400);
    
        
    }
    
    
    
    
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