
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground;
var m1,m2,m3,m4,m5;
var stone;
var boy
var elastic

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,380);
	ground = new Ground(560,800);

	m1 = new Mango(600,290);
	m2 = new Mango(670,220);
	m3 = new Mango(750,350);
	m4 = new Mango(700,310);
	m5 = new Mango(580,360);

	boy = new Boy(200,500);
	stone = new Stone(160,420);

	elastic = new Elastic(stone.body,{x:160,y:450});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("SKYBLUE");

 /* mouseDragged();
  mouseReleased();*/

  tree.display();
  ground.display();
  
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  stone.display();
  boy.display();

  elastic.display();
 
  keyPressed();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:160,y:450});
		elastic.attatch(stone.body)
	}
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	console.log("hi")
}

function mouseReleased(){
	elastic.fly();
}



