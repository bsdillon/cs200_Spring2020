const ELASTIC = 0;
const WRAP = 1;
const CONCRETE = 2;
var boundaryTypes = [ELASTIC, WRAP, CONCRETE];

function Environment(tag, w,h)
{
  this.ctx = tag.getContext("2d");
  this.width = tag.width = w;
  this.height = tag.height = h;
  this.boundary=ELASTIC;

  this.allMovers = new Array();

  //global limits of environment
  this.GMinSize = 1;
  this.GMaxSize = 25;
  this.GMinRed = 0;
  this.GMaxRed = 255;
  this.GMinGreen = 0;
  this.GMaxGreen = 255;
  this.GMinBlue = 0;
  this.GMaxBlue = 255;
  this.GMinAccel = 1;
  this.GMaxAccel = 10;
  this.GMinVel = 0;
  this.GMaxVel = 25;
  this.GMinPercept = 0;
  this.GMaxPercept = 200;
  this.GMinDist = 1;
  this.GMaxDist = 200;
  this.GMinRate = 10;
  this.GMaxRate = 1000;

  setInterval(this.RedrawBackground,250, this);
}

Environment.prototype.RedrawBackground = function(env)
{
  env.ctx.fillStyle = "rgba(0,0,0,.25)";
  env.ctx.fillRect(0,0,env.width,env.height);
}

Environment.prototype.SetBoundaryType = function(val)
{
  if(boundaryTypes.indexOf(val)==-1)
  {
    throw "Unknown Environment boundary type: "+val;
  }
  this.boundary=val;
}

Environment.prototype.BoundaryCheck = function(mover)
{
  if(this.boundary==WRAP)
  {
    this.WrapBoundaryCheck(mover);
  }
  else if(this.boundary==CONCRETE)
  {
    this.ElasticBoundaryCheck(mover,0);
  }
  else if(this.boundary==ELASTIC)
  {
    this.ElasticBoundaryCheck(mover,1);
  }
}

Environment.prototype.WrapBoundaryCheck = function(mover)
{
  if (mover.PosX < 0)
  {
    mover.PosX = this.width+mover.PosX;
  }
  else if (mover.PosX > this.width)
  {
    mover.PosX = mover.PosX-this.width;
  }

  if (mover.PosY < 0)
  {
    mover.PosY = this.height+mover.PosY;
  }
  else if (mover.PosY > this.height)
  {
    mover.PosY = mover.PosY-this.height;
  }
}

Environment.prototype.ElasticBoundaryCheck = function(mover, elasticity)
{
  if (mover.PosX < 0)
  {
    mover.PosX = -mover.PosX;
    mover.VelX = -mover.VelX*elasticity;
  }
  else if (mover.PosX > this.width)
  {
    mover.PosX = this.width-(mover.PosX-this.width);
    mover.VelX = -mover.VelX*elasticity;
  }

  if (mover.PosY < 0)
  {
    mover.PosY = -mover.PosY;
    mover.VelY = -mover.VelY*elasticity;
  }
  else if (mover.PosY > this.height)
  {
    mover.PosY = this.height-(mover.PosY-this.height);
    mover.VelY = -mover.VelY*elasticity;
  }
}

Environment.prototype.distanceBetween = function(x1, y1, x2, y2)
{
   var dx = x2-x1;
   var dy = y2-y1;

   if(this.boundary==WRAP)
   {
     //in a wrap environment, any distance greater than half
     //the environment dimension will be shorter when wrapped around
     if(Math.abs(dx)>this.width/2)
     {
       dx = -dx;
     }

     if(Math.abs(dy)>this.height/2)
     {
       dy = -dy;
     }
   }

   var dist = Math.sqrt((dx*dx)+(dy*dy));

   var answer = {'dx':dx,'dy':dy,'dist':dist};
   return answer;
}