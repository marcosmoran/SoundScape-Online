class Obstacle {
    
    constructor() {
        
        this.obstacleXPosition = 1280;
        this.obstacleYPosition = random(0, 400);
        this.obstacleTrigger;
        this.obstacleImage;
        
        
    }
    
    travel() {
        
        
        if (this.obstacleTrigger === true) {
            
           // image(this.obstacleImage, this.obstacleXPosition, this.obstacleYPosition);
            this.obstacleXPosition -= 1;
            //collide();
            console.log(this.obstacleYPosition);
           
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
        
        
    }
    
    die(){}
    
}