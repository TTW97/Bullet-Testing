//This declares all of the variables
var bullet, wall, thickness;

var speed, weight;


function setup() {
  
  //This creates the Canvas
  createCanvas(1600,400);

  //This creates the bullet and wall and speed and weight adn thickness
  bullet = createSprite(50, 200, 50, 25);
  bullet.shapeColor = "white";
  
  wall = createSprite(1500, 200, thickness, height / 2);
  
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  
  weight = random(30,52);

  //this gives the bullet speed
  bullet.velocityX = speed; 

  thickness = random(22,83);

}

function draw() {
  
  //This colors the background black
  background("black");

  //This runs the function collided and sees if the damage is greater or less and changes the wall color
  if (hasCollided(bullet.wall)) 
  {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {

      wall.shapeColor = color(255,0,0);

    }

    if (damage <= 10) {

      wall.shapeColor = color(0,255,0);

    }

  }

  drawSprites();
}

//This is the funciton Collided that checks when the bullet isTouching the wall
function hasCollided() {

  bulletrightEdge = bullet.x + bullet.width;

  wallleftEdge = wall.x;

  if (bulletrightEdge >= wallleftEdge) 
  {

    return true;

  }

  return false;

}