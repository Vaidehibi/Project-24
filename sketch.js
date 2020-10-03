
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var dustbinOBJ, paperOBJ, groundOBJ;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Use the classes of ground,paper and dustbin to create the objects
	//use the hint given to you in the PDF of the project
    dustbinOBJ= new dustbin(1200,650);
	paperOBJ= new paper(200,450,30);
	groundOBJ= new ground(width/2, 670,width, 20);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
dustbinOBJ.display();
paperOBJ.display();
groundOBJ.display();
  
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperOBJ.body,paperOBJ.body.position,{x:50,y:-50});
	}
}

