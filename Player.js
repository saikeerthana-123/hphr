class Player {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/HARRY POTTER 2.png");
        World.add(world, this.body);
    }

    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}