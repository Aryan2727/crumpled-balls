const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperball = new Paper(80,300,60);

	ground1 = new Ground(400,670,800,40);

	dustbin1 = new Dustbin(500,590,30,120);
	dustbin2 = new Dustbin(680,590,30,120);
	dustbin3 = new Dustbin(590,635,150,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();

  ground1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 drawSprites();

 keypressed();

 fill("white")
  strokeWeight(18)
  text("PRESS SPACE TO MOVE BALL",300,200)


}
function keypressed(){

	if(keyDown("space")){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x : 15, y : -33})
	
	}

}


