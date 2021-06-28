
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Reneder = Matter.Reneder;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine =Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);

	BOBobject1 = new BOB(250,300);
	BOBobject2 = new BOB(300,300);
	BOBobject3 = new BOB(350,300);
	BOBobject4 = new BOB(400,300);
	BOBobject5 = new BOB(450,300);

	
	rope1 = new Rope(bobobject1.body,roof.body,-100,0);
	World.add(world, rope1);

	rope2 = new Rope(bobobject2.body,roof.body,-50,0);
	World.add(world, rope2);

	rope3 = new Rope(bobobject3.body,roof.body,0,0);
	World.add(world, rope3);

	rope4 = new Rope(bobobject4.body,roof.body,+50,0);
	World.add(world, rope4);

	rope5 = new Rope(bobobject5.body,roof.body,+100,0);
	World.add(world, rope5);




	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  BOBobject1.display();
  BOBobject2.display();
  BOBobject3.display();
  BOBobject4.display();
  BOBobject5.display();

  roof.display();

  rope1.display();
  rope2.dispay();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



