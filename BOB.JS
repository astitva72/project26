class BOB{
    constructur(x,y){
        var opstions = {
            isStactic: false
            restitution: 1,
            friction:0
            density: 7.8,
          


        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.bodty);

        console.log(this.body);
       

    }

    display(){
        push();
        ellipsemode(RADIUS);
        FileList(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop()
    }
   

}