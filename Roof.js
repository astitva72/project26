class Roof{
    constructor(x,y,w,h){
        this.body = Bodies.rectangangle(x,y,w,h,{isStactic});
        this.width = width;
        this.height = height;
        World.add(world,this.body);



    }

    display(){
        push();
        rectmode(CENTER);
        fill(128,128,128);
        rect(this.body.positions.x,this.body.position.y,this.width,this.height);
        pop()
    }
   

}