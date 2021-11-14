const Engine=Matter.Engine 
const World=Matter.World 
const Bodies=Matter.Bodies 
var ball1
var box1,box2; 
var engine,world; 
function setup(){
 createCanvas(400,400) 
 engine=Engine.create() 
 world=engine.world //rect(200,200,50,50) 
 var option={ 'isStatic': true } 
 var option1={'restitution': 1 }
ground=Bodies.rectangle(200,380,400,20,option) 
ball1=Bodies.circle(200,10,20,option1)
 World.add(world,ground) 
 World.add(world,ball1)
}
 function draw()
{ background(0); 
Engine.update(engine) 
rectMode(CENTER) //rect(200,200,50,50) 
rect(ground.position.x,ground.position.y,400,20); 
circle(ball1.position.x,ball1.position.y,20)
}