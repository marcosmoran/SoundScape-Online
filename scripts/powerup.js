class Powerup {
    
    constructor() {
        this.powerXPosition =1500;
        this.powerYPosition = random(50, 400);
        this.powerSprite = createSprite(this.powerXPosition, this.powerYPosition);
        this.powerSprite.addImage('boost', loadImage("images/powerups/boost.png"));
        this.powerSprite.addImage('luck', loadImage("images/powerups/luck.png"));
        this.powerSprite.addImage('star', loadImage("images/powerups/star.png"));
        this.powerSprite.addImage('shield', loadImage("images/powerups/shield.png"));
        this.boostFlag = false;
        this.luckFlag = false;
        this.starFlag = false;
        this.shieldFlag = false;
        this.trigger = false;
        this.activated = false;
        this.select = false;
        this.seed;
    }
    
    update(){
        
        if(this.select === true){
            console.log("select");
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
        
        
        
    }
    
    travel(){
         this.powerSprite.position.x = this.powerXPosition;
            this.powerSprite.position.y = this.powerYPosition;
            this.powerXPosition -= 3;
            this.collide();
            drawSprites();
        
    }
    
    selector(){
        this.seed = random(0,9);
        switch (player.shipPosition) {
                
            
            case 1:
                if(this.seed < 6) {
                    this.boostFlag = true;
                }
                if (this.seed > 6) {
                    this.starFlag = true;
                }
                break;
            
            case 2:
                   if(this.seed < 4) {
                    this.boostFlag = true;
                }
                if (this.seed > 4 || this.seed < 8) {
                    this.starFlag = true;
                }
                
                if (this.seed > 8) {
                    this.shieldFlag = true;
                }
                break;
                
                
           case 3:
                   if(this.seed < 2) {
                    this.boostFlag = true;
                }
                if (this.seed > 2 || this.seed < 7) {
                    this.starFlag = true;
                }
                
                if (this.seed > 7) {
                    this.shieldFlag = true;
                }
                break;
                
                
            case 4:
                     if(this.seed < 6) {
                    this.shieldFlag = true;
                }
                if (this.seed > 6) {
                    this.luckFlag = true;
                }
                break;
                
        }
        this.select = false;
    }
    
    changeSprite() {
        
        if(this.boostFlag) {
            this.powerSprite.changeImage('boost');
        }
          if(this.luckFlag) {
            this.powerSprite.changeImage('luck');
        }
          if(this.shieldFlag) {
            this.powerSprite.changeImage('shield');
        }
          if(this.boostFlag) {
            this.powerSprite.changeImage('star');
        }
        
        
    }
    collide(){
        
        if(this.powerSprite.overlap(player.shipImage)){
         
            this.activated = true;
            this.reInitialize();
            
            
        
    }}
    
    
    
    reInitialize() {
        
        this.powerXPosition = width + 20;
        this.powerYPosition = random(50, 400);
        this.trigger = false;
    }
    
    boost(){
        console.log("boost");
    }
    luck(){
        console.log("luck");
    }
    star(){
        console.log("star");
    }
    shield(){
        console.log("shield");
    }
    
    
    
}