var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, bottom, side1, side2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(168, 50, 66);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	bottom = createSprite(width/2,height-50,200,20);
	bottom.shapeColor = "red";

	side1 = createSprite(width/2+100, height-90, 20, 100);
	side2 = createSprite(width/2-100, height-90, 20, 100);

	side1.shapeColor = "red";
	side2.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	bottom = Bodies.rectangle(width/2,640,200,20, {isStatic:true});
	World.add(world, bottom);

	side1 = Bodies.rectangle(width/2+100, 620, 20, 100,  {isStatic:true});
	World.add(world, side1);
	side2 = Bodies.rectangle(width/2-100, 620, 20, 100, {isStatic:true});
	World.add(world, side2);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 

    
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(232, 252, 3);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown ("DOWN_ARROW")) {
	Matter.Body.setStatic(packageBody, false);
    //Matter.Body.setStatic(bottom, false);
    //Matter.Body.setStatic(side1, false);
    //Matter.Body.setStatic(side2, false);
	
	  
   }
}
 

 
