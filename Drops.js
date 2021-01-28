class Drop {

    constructor(x, y, r) {

        var options ={
            restitution: 0.8
        }

        
        this.body = Bodies.circle(x, y, r, options);
        this.r = r * 2;
        console.log(this.body.r)
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.positionx, this.body.position.y, this.r);
    }

}