
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var papperobject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	papperobject=new Papper(130,630,30,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
function keypressed(){
	if (keyCode === UP_ARROW)	{

		Matter.Body.applyForce(papperobject.body,papperobject.body.position,{130:630,30:50});
			}
}

  groundObject.display();
  dustbinObj.display();
  papperobject.display();

}

