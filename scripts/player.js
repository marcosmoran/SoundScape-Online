class Player {
    
    constructor() {
        
        this.shipXPosition = 475;
        this.shipYPosition = 100;
        this.downFlag = 0;
        this.upFlag = 0;
        this.downTarget = 0
        this.upTarget = 0
      //  this.shipImage = loadImage("images/alien1.png");
    }

    
    shipControl(){
         
        if (this.downFlag == 1) {
            if (this.shipYPosition == this.downTarget){
                this.downFlag = 0;
                }
        else {
            this.shipYPosition += 10; }}
        
        if (this.upFlag == 1) {
            if (this.shipYPosition == this.upTarget){
                this.upFlag = 0;
                }
        else {
            this.shipYPosition -= 10; }}
        
        if(keyWentDown('DOWN')) {
            
            if(this.shipYPosition < 300) {
                if ( this.downFlag == 0 && this.upFlag == 0){
                    this.downTarget = this.shipYPosition + 100; // sets Y position location
                    if(this.shipYPosition < this.downTarget){
                        this.downFlag = 1;
                                        }}}}
        
         if(keyWentDown('UP')) {
            
            if(this.shipYPosition !=0) {
                if ( this.downFlag == 0 && this.upFlag == 0){
                    this.upTarget = this.shipYPosition - 100; // sets Y position location
                    if(this.shipYPosition > this.upTarget){
                        this.upFlag = 1;
                                        }}}}
        
        
       }
    
    
    update(){
        
        image(this.shipImage,this.shipXPosition, this.shipYPosition, 75, 50);
        
    }
}