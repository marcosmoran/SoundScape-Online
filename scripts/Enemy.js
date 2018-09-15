class Enemy {
    
    constructor(){
        
        this.enemyXPosition = 50;
        this.enemyYPosition = 50;
        this.enemyImage = createSprite(this.enemyXPosition, this.enemyYPosition);
        this.flyAnimation = this.enemyImage.addAnimation('flyAnimation', "images/fly/Fly1.png","images/fly/Fly5.png");
        this.flyAnimation.frameDelay = 7;
        this.eatAnimation = this.enemyImage.addAnimation('eatAnimation',"images/eat/eat1.png", "images/eat/eat3.png");
        this.enemyImage.setCollider('circle', 45, 80, 55);
        this.enemyImage.debug = true;
    }
    
    fly() {
        

        
        if(player.shipPosition == 0) {
            
            this.eat();
        }
        drawSprites();
        
        
    }
    
    eat() {
        this.enemyImage.changeAnimation('eatAnimation');
        this.enemyImage.attractionPoint(5, player.shipXPosition, player.shipYPosition)
        console.log("eat");
        
        if(this.enemyImage.overlapPoint(player.shipXPosition, player.shipYPosition)){
            console.log("eaten");
            player.die();
            
        }
    }
    // when ship is in position 0, monster travels to its Y position, bites and explosion
}