class Tree{
    constructor(x,y){
        var options = {
            isStatic:true,
            
        }
        this.body= Bodies.rectangle(x,y,100,300);
        this.image = loadImage("pics/tree.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,250,400)


    }
}