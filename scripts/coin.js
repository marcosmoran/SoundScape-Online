class Coin {
    
    
    constructor() {
        this.coinXPosition = 1000;;
        this.coinYPosition = random(400);
        this.coinImage = createSprite(this.coinXPosition, this.coinYPosition);
        this.coinImage.scale = 0.05;
        this.coinImage.depth = 3;
        this.coinImage.addImage(loadImage("images/coin.png"));
        this.trigger;
        
    }
    
    
    update() {
      
       
        
        if( this.trigger == true) {
            this.coinImage.position.x = this.coinXPosition;
            this.coinImage.position.y = this.coinYPosition;
            this.coinXPosition -= 6;
            this.collide();
            
            
        }
        
        if(this.coinImage.position.x < 0) {
          
           this.reInitialize();
            
        }
        drawSprites();
    }
    
    reInitialize(){
        
         this.coinXPosition = width + 20;
           this.coinYPosition = random(20, height - 20);
            this.coinImage.position.x = this.coinXPosition;
            this.coinImage.position.y = this.coinYPosition;
           this.trigger = false;
    }
    
    collide() {
        
        if(this.coinImage.overlap(player.shipImage)){
           
           player.coinsCollected += 1;
           this.reInitialize();
           
    }}
    
}