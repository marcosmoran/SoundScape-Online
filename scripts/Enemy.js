class Enemy {
    
    constructor(){
        
        this.enemyXPosition = 50;
        this.enemyYPosition = 50;
        this.enemyImage;
        this.flyAnimation;
        this.eatAnimation;
    }
    
    fly() {
        
     //image(this.enemyImage, this.enemyXPosition, this.enemyYPosition);
        if (this.enemyImage.animation != 'flyAnimation') {
            
           this.enemyImage.changeAnimation('flyAnimation');
            
        }
        
        drawSprites();
    }
    
    eat() {
        this.enemyImage.changeAnimation('eatAnimation');
        this.enemyImage.attractionPoint(5, player.shipXPosition, player.shipYPosition)
        drawSprites();
        
    }
    // when ship is in position 4, monster travels to its Y position, bites and explosion
}