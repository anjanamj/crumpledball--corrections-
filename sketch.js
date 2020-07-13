var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//var ball
var paper
var ground
var platform,platform2,platform3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	var ground_options ={
        isStatic: true
    }
	//-------   x position of ground should be at the centre of canvas
	ground = Bodies.rectangle(400,690,800,30,ground_options);
    World.add(world,ground);



	platform = new Platform(600,670,200,20);
	platform2 = new Platform(500,630,20,100);
	platform3 = new Platform(700,630,20,100);

	paper = new Paper(200,200);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	fill(255)
 rectMode(CENTER);
 //------- the width & height of rect() should be same as the 'Bodies.rectangle'
 rect(ground.position.x,ground.position.y,800,30);


  platform.display();
  platform2.display();
  platform3.display();

  paper.display();

  
  
  drawSprites();
 
}

// ------ its keyPressed with 'P' uppercase
function keyPressed() {
	if (keyCode === UP_ARROW) {
		//-----try different x and y to adjust the force
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

