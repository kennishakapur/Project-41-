  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops= 100


var drops = []
function preload(){
    
}

function setup(){
   createCanvas(350,600)

   engine = Engine.create();
   world = engine.world;
  
   
   umbrella1 = new Umbrella(70,300,40,40)

  
 


   thunder = new Thunder(70,300,50,50)


   Engine.run(engine);
}

function draw(){
    background("black")

    umbrella1.display()


    if(frameCount % 20 === 0) {
        drops.push(new Drop(random(100, 200 || 300, 400), 10, 5));
      
      }
    

if(frameCount%100==0){
    thunder.display()
}
    
    
    drawSprites()
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
     }
      
 }

