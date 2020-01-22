var laneStart = 15;
var margin = 10;
var laneWidth = 90;
var carLength = 170;
var carWidth = laneWidth-(2*margin);
var cars = new Array();
cars[0]= new Image();
cars[0].src= 'carBlue.png';
cars[1]= new Image();
cars[1].src= 'carGreen.png';
cars[2]= new Image();
cars[2].src= 'carGrey.png';
cars[3]= new Image();
cars[3].src= 'carPink.png';
cars[4]= new Image();
cars[4].src= 'carWhite.png';
p1 = new Image();
p1.src = 'police1.png';
p2 = new Image();
p2.src = 'police2.png';

function Car(lane)
{
  this.img = cars[Math.floor(Math.random()*cars.length)];
  this.x=lane;
  this.y=0;
  this.yVel=Math.floor(Math.random()*20+5);
}

Car.prototype.draw = function(modulo)
{
  ctx.drawImage(cars[this.img],this.x+margin,this.y,carWidth,carLength);
}

Car.prototype.move = function()
{
  this.y+=this.yVel;
}

function Police()
{
  Car.call(this);
  this.xVel=0;
}

Police.prototype.draw = function(modulo)
{
  if(modulo%2==0)
  {
    ctx.drawImage(p1,policeX+margin,policeY,carWidth,carLength);
  }
  else
  {
    ctx.drawImage(p2,policeX+margin,policeY,carWidth,carLength);
  }
}

Police.prototype.move = function()
{
  this.x+=this.xVel;
}
