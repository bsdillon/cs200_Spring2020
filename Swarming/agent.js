function Agent(id, env)
{
  this.InitMover(id, env);
}

Agent.prototype = Object.create(Mover.prototype);

Agent.prototype.Setup = function()
{
  this.HomeX = this.PosX;
  this.HomeY = this.PosY;

  //agent characteristics
  this.properties = new PropertyModel(this.Env);

  //agent sensors
  this.sensors = new SensorModel(this,this.Env);

  //behaviors
  this.actionModel = new ActionModel();

  //agent visual aspect
  this.visualModel = new VisualModel(this, this.Env.ctx);

  //heartbeat
  this.properties.SetHeartBeat(this,this.HeartBeat);
}

Agent.prototype.HeartBeat = function(m){
  var interest = m.sensors.Sense();
  m.actionModel.Act(m,interest);
  m.visualModel.Draw();
}

// Move determines new course change and accelerates the Agent
// based on priorities among tensions.
// * Major priorities (e.g. user-directed actions)
// * Group dynamics
// * Untasked behaviors
Agent.prototype.Move = function()
{
  var tensions = new Array();
  tensions[0]=0;
  tensions[1]=0;

  tensions=this.MajorTension(tensions);

  if(tensions[0]==tensions[1] && tensions[0]==0)//no majorTensions
  {
    this.GroupTension(tensions);
  }

  if(tensions[0]==tensions[1] && tensions[0]==0)//no tension from other agents.
  {
    this.GoHome(tensions);
  }

   this.Accelerate(tensions[0],tensions[1]);
}

Agent.prototype.RandomWalk = function(tensions)
{
  //untasked behavior
  tensions[0]=Math.floor((2*this.accel+1)*Math.random()-this.accel);
  tensions[1]=Math.floor((2*this.accel+1)*Math.random()-this.accel);
  return tensions
}

Agent.prototype.Continue = function(tensions)
{
  //untasked behavior
  return tensions
}

Agent.prototype.GoHome = function(tensions)
{
  //untasked behavior
  var tensor = this.Env.distanceBetween(this.PosX, this.PosY, this.HomeX, this.HomeY);
  tensions[0]=tensor['dx'];
  tensions[1]=tensor['dy'];
  return tensions
}

// Group tensions depend on perception of other agents
// and adjustment of group position
Agent.prototype.GroupTension = function(tensions)
{
  for(let i=0;i<allMovers.length;i++)
  {
    var other=allMovers[i];
    if(other.ID!=this.ID)
    {
      //what is the distance in this environment
      var tensor = this.Env.distanceBetween(this.PosX, this.PosY,other.PosX, other.PosY);
      if(tensor['dist']<this.percept)
      {
        if(tensor['dist']<this.idealDist)
        {
          //move away
          tensions[0]=tensor['dx'];
          tensions[1]=tensor['dy'];
        }
        else if(tensor['dist']<this.idealDist)
        {
          //move away
          tensions[0]=-tensor['dx'];
          tensions[1]=-tensor['dy'];
        }
      }
    }
  }
  return tensions;
}

// Major tensions override all other concerns
Agent.prototype.MajorTension = function(tensions)
{
  if(trackMouse)
  {
    var dx = mouseX-this.PosX;
    if(Math.abs(dx)>this.Env.width/2)
    {
      dx = this.PosX-mouseX;
    }

    var dy = mouseY-this.PosY;
    if(Math.abs(dy)>this.Env.height/2)
    {
      dy = this.PosY-mouseY;
    }

    var dist = Math.sqrt((dx*dx)+(dy*dy));

    if(dist>this.idealDist*.90)
    {
      //move away
      tensions[0]=dx;
      tensions[1]=dy;
    }
    else if(dist>this.idealDist*1.1)
    {
      //move closer
      tensions[0]=-dx;
      tensions[1]=-dy;
    }
  }

  return tensions;
}

//Draw puts the agent on the environment
// * May include perception, speed, and ID indicators
Agent.prototype.Draw = function ()
{
}

var indicatorsOn=true;
function indicatorSwitch()
{
  indicatorsOn=!indicatorsOn;
}

function getRGB()
{
  return Math.floor(Math.random()*256);
}

var trackMouse=false;
var mouseX=0;
var mouseY=0;
function mouseUpdate(evnt)
{
  trackMouse=true;
  mouseX=evnt.clientX;
  mouseY=evnt.clientY;
}

function stopMouseTracking()
{
  trackMouse=false;
}
