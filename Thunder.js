class Thunder {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
        restitution:0.3,
       
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("thunderbolt/2.png");
      
      this.width = width
      this.height = height
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push ()
      image(this.image,pos.x,pos.y, this.width, this.height);
      pop();
    }
  };