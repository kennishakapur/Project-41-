class Umbrella  {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
        restitution:0.3,
       
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("Walking Frame/walking_1.png");
      
      this.width = width*5
      this.height = height*5
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push ()
      image(this.image,pos.x,pos.y, this.width, this.height);
      pop();
    }
  };