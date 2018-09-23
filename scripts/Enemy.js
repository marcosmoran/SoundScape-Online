class Enemy {
    
    constructor(){
        
        this.enemyXPosition = 50;
        this.enemyYPosition = 100;
        this.enemyImage = createSprite(this.enemyXPosition, this.enemyYPosition);
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
            
        }
        if (this.eating){
            this.eat();
        }
        if (this.returnToFly){
            this.returnFly();
        }
        drawSprites();
        
        console.log(parseInt(this.enemyImage.position.x),parseInt(this.enemyImage.position.y));
    }
    
    eat() {
        this.enemyImage.changeAnimation('eatAnimation');
      //  this.enemyImage.attractionPoint(1, parseInt(player.shipXPosition), parseInt(player.shipYPosition));
       
         if(parseInt(this.enemyImage.position.x) != parseInt(player.shipXPosition)) {
            this.enemyImage.position.x +=2;
               
               
        }
        
        if(parseInt(this.enemyImage.position.y) != parseInt(player.shipYPosition)) {
            
            if(parseInt(player.shipYPosition) < parseInt(this.enemyImage.position.y)){
            this.enemyImage.position.y -=2;
            }
            
            if(parseInt(player.shipYPosition) > parseInt(this.enemyImage.position.y)){
            this.enemyImage.position.y +=2;
            }
               
        }
        
        if(this.enemyImage.overlapPoint(player.shipXPosition, player.shipYPosition)){
          
           this.eating = false;
            player.die();
            this.returnToFly = true;
            this.enemyImage.changeAnimation('flyAnimation');
           
            
            
        }
    }
    
    returnFly() {
        
       
        if(parseInt(this.enemyImage.position.x) != this.enemyXPosition) {
            this.enemyImage.position.x -=2;
        }
        if(this.enemyImage.position.x == this.enemyXPosition){
            
            this.returnToFly = false;
        }
        
    }
    // when ship is in position 0, monster travels to its Y position, bites and explosion
}