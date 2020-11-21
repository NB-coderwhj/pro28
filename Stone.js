class Stone{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution:0.2,
            friction:0.5
            //density:1.2
        }
        this.body = Bodies.rectangle(x,y,60,50,options);
        World.add(world,this.body);
        this.image = loadImage("pics/stone.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,50);

    }
}