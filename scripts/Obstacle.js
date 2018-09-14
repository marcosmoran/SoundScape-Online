class Obstacle {
    
    constructor() {
        
        this.obstacleXPosition = 1280;
        this.obstacleYPosition = random(0, 400);
        this.obstacleTrigger;
        this.obstacleImage;
        
        
    }
    
    travel() {
        
        
        if  (this.obstacleTrigger === true) {
            this.obstacleImage.position.x = obstacle.obstacleXPosition;
            this.obstacleImage.position.y = obstacle.obstacleYPosition;
           // image(this.obstacleImage, this.obstacleXPosition, this.obstacleYPosition);
            this.obstacleXPosition -= 1;
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
        
        if(this.obstacleImage.overlap(player.shipImage)){
            
            console.log("hit");
            player.shipXPosition -=200;
        }
    }
    
    die(){}
    
}