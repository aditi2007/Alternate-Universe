var sun,planet1,planet2;
function setup() {
  createCanvas(800,400);
 sun= createSprite(400, 200, 50, 50);
  
  planet2=createSprite(150,150,20,20);
  planet1=createSprite(100,100,20,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  sun.display();
  planet1.display();
  planet2.display();
  ellipseMode(RADIUS)
  ellipseCentre(sun)
  ellipse(planet1.position.x,planet1.position.y,30,30)
  ellipse(planet2.position.x,planet2.position.y,50,50)
  sun.width=(sun.width*1(World.frame))
  if(sun(isTouching(planet1,planet2))){
    planet1.destroy
    planet2.destroy
  }

}
 function setCollider(){
  sun.collider=4
  planet.collider=2
  planet.collider=2
  debug=true;
}
