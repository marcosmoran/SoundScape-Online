class Powerup {
    
    constructor() {
        this.powerXPosition =1500;
        this.powerYPosition = random(50, 400);
        this.powerSprite = createSprite(this.powerXPosition, this.powerYPosition);
        this.powerSprite.addImage('boost', loadImage("images/powerups/boost.png"));
        this.powerSprite.addImage('luck', loadImage("images/powerups/luck.png"));
        this.powerSprite.addImage('star', loadImage("images/powerups/star.png"));
        this.powerSprite.addImage('shield', loadImage("images/powerups/shield.png"));
        this.powerSprite.depth = 4;
        this.powerSprite.scale = 0.25;
        this.boostFlag = false;
        this.luckFlag = false;
        this.starFlag = false;
        this.shieldFlag = false;
        this.trigger = false;
        this.activated = false;
        this.select = false;
        this.seed;
        this.currentPosition;
    }
    
    update(){
        
        if(this.select === true) {
            this.select = false;
            this.selector();
            this.changeSprite();
            this.trigger = true;
            
        }
        
        if(this.trigger){
            this.travel();
        }
        
        if(this.boostFlag){
            this.boost();
        }
        
        if(this.luckFlag) {
            this.luck();
        }
        
        if(this.starFlag) {
            this.star();
        }
        
        if(this.shieldFlag) {
            this.shield();
        }
        
         drawSprites();
        
    }
    
    travel(){
         this.powerSprite.position.x = this.powerXPosition;
            this.powerSprite.position.y = this.powerYPosition;
            this.powerXPosition -= 3;
            this.collide();
            
        
        if(this.powerSprite.position.x < 0){
            this.reInitialize();
            
        }
       
    }
    
    selector(){
        this.seed = random(0,9);
        this.currentPosition = player.shipPosition;
        switch(this.currentPosition) {
                
            case 1:
                if(this.seed < 6) {
                    this.boostFlag = true;
                    break
                }
                if (this.seed > 6) {
                    this.starFlag = true;
                    break;
                }
                
            
            case 2:
                   if(this.seed < 4) {
                    this.boostFlag = true;
                       break;
                }
                if (this.seed > 4 && this.seed < 8) {
                    this.starFlag = true;
                    break;
                }
                
                if (this.seed > 8) {
                    this.shieldFlag = true;
                    break;
                }
                
                
                
           case 3:
                   if(this.seed < 2) {
                    this.boostFlag = true;
                    break;
                }
                if (this.seed > 2 && this.seed < 7) {
                    this.starFlag = true;
                    break;
                }
                
                if (this.seed > 7) {
                    this.shieldFlag = true;
                    break;
                }
                
                
                
            case 4:
                if(this.seed < 6) {
                    this.shieldFlag = true;
                    break;
                }
                if (this.seed > 6) {
                    this.luckFlag = true;
                    break;
                }
             
                
        }
        
    }
    
    changeSprite() {
        
        if(this.boostFlag) {
            this.powerSprite.changeImage('boost');
            console.log("BOOST");
        }
          if(this.luckFlag) {
            this.powerSprite.changeImage('luck');
               console.log("LUCK");
        }
          if(this.shieldFlag) {
            this.powerSprite.changeImage('shield');
               console.log("SHIELD");
        }
          if(this.starFlag) {
            this.powerSprite.changeImage('star');
               console.log("STAR");
        }
        
        
    }
    collide(){
        
        if(this.powerSprite.overlap(player.shipImage)){
            
            this.activated = true;
            this.reInitialize();
            
             }}
    
    
    
    reInitialize() {
        
        this.powerXPosition = 1500;
        this.powerYPosition = random(50, 400);
        this.powerSprite.position.x = this.powerXPosition;
        this.powerSprite.position.y = this.powerYPosition;
        this.trigger = false;
    }
    
    boost(){
        if (this.activated) {
       
        this.boostFlag = false;
        }
    }
    luck(){
         if (this.activated) {
        
        this.luckFlag = false;
         }
    }
    star(){
         if (this.activated) {
        
        this.starFlag = false;
         }
    }
    shield(){
         if (this.activated) {
       
        this.shieldFlag = false;
         }
    }
    
    
    
}