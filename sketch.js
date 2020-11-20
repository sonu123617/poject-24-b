
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		
	}

	function setup() {
		createCanvas(1200, 400);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.


		Engine.run(engine);
	paper= new Paper(100,200,20)
	ground= new Ground(600,height,1570,20)
	wall1= new dustbin(700,290)
	wall2= new dustbin(900,290)
	wall3= new BD (800,380)
	}


	function draw() {
	rectMode(CENTER);
	background("blue");
	paper.display();
	ground.display();
	wall1.display();
	wall2.display();
	wall3.display();
	drawSprites();
	
	}
	function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:19,y:-19})
		}
	}