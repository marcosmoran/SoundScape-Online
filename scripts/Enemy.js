class Enemy {
    
    constructor(){
        
        this.enemyXPosition = 50;
        this.enemyYPosition = 150;
        this.enemyImage = createSprite(this.enemyXPosition, this.enemyYPosition);
        this.enemyImage.depth = 0;
        this.flyAnimation = this.enemyImage.addAnimation('flyAnimation', "images/fly/Fly1.png","images/fly/Fly5.png");
        this.flyAnimation.frameDelay = 7;
        this.eatAnimation = this.enemyImage.addAnimation('eatAnimation',"images/eat/eat1.png", "images/eat/eat3.png");
        this.enemyImage.setCollider('circle', 45, 80, 55);
        this.eatAnimation.frameDelay = 10;
        this.enemyImage.debug = true;
        this.enemyImage.maxSpeed = 2;
        this.returnToFly = false;
        this.eating = false;
    }
    
    fly() {
        
        if(player.shipPosition == 0) {
            this.eating = true;
            player.shipYPosition =  player.shipImage.position.y ;
            console.log("enemy",this.enemyImage.position.y, "player",player.shipYPosition);
            
        }
        if (this.eating){
            this.eat();
        }
        if (this.returnToFly){
            this.returnFly();
        }
        drawSprites();
        
       
    }
    
    eat() {
        this.enemyImage.changeAnimation('eatAnimation');
       
         if(parseInt(this.enemyImage.position.x) != parseInt(player.shipXPosition)) {
            this.enemyImage.position.x +=5;
             //  console.log(this.enemyImage.position.y);
           
               
        }
        
        if(parseInt(this.enemyImage.position.y + 20) != parseInt(player.shipYPosition)) {
            
            if(parseInt(this.enemyImage.position.y + 20) < parseInt(player.shipYPosition)){
            this.enemyImage.position.y +=5;
            }
            
            if(parseInt(this.enemyImage.position.y+ 20) > parseInt(player.shipYPosition)){
            this.enemyImage.position.y -=5;
            }
               
        }
        
        if(this.enemyImage.overlapPoint(player.shipXPosition, player.shipYPosition)){
          
           this.eating = false;
            player.die();
            this.returnToFly = true;
            this.enemyImage.changeAnimation('flyAnimation');
           
            
            
        }
        
    player.shipImage.position.y = player.shipYPosition;
    player.shipImage.position.x = player.shipXPosition;
    }
    
    returnFly() {
        
       
        if(parseInt(this.enemyImage.position.x) != this.enemyXPosition) {
            this.enemyImage.position.x -=5;
        }
        if(this.enemyImage.position.x == this.enemyXPosition){
            
            this.returnToFly = false;
        }
        
         if(parseInt(this.enemyImage.position.y) < parseInt(this.enemyYPosition)){
            this.enemyImage.position.y +=5;
            }
            
            if(parseInt(this.enemyImage.position.y) > parseInt(this.enemyYPosition)){
            this.enemyImage.position.y -=5;
            }
        
    }
    // when ship is in position 0, monster travels to its Y position, bites and explosion
}