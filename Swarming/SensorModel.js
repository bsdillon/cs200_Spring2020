function Sensor(channel, threshold, range)
{
  this.channel = channel;
  this.threshold = threshold;
  this.range = range;
}

function SensorModel(mover, env)
{
  this.mover = mover;
  this.environ = env;

  this.sensors = new Array();
  this.sensors.push(new Sensor("Size",1,Math.floor(Math.random()*20+10)));
}

SensorModel.prototype.Clear = function()
{
  while(this.sensors.length > 0)
  {
    this.sensors.pop();
  }
}

SensorModel.prototype.Range = function()
{
  var max=0;
  for(let i=0;i<this.sensors.length;i++)
  {
    var sen = this.sensors[i];
    //sensing
    if(sen.range>max)
    {
      max=sen.range;
    }
  }
  return max;
}

SensorModel.prototype.Sense = function()
{
  var interest = new Array();
  interest["x"]=0;
  interest["y"]=0;
  for(let i=0;i<this.sensors.length;i++)
  {
    var sen = this.sensors[i];
    //sensing
    for(let a=0;a<this.environ.allMovers.length;a++)
    {
      var other = this.environ.allMovers[a];
      if(other!=this.mover)
      {
        var calc = this.environ.distanceBetween(this.mover.PosX,this.mover.PosY,other.PosX,other.PosY);

        if(calc.dist<=sen.range && other.properties[sen.channel].val>sen.threshold)
        {
          var scale = other.properties[sen.channel].val/sen.threshold;

          interest.x+=calc.dx*scale;
          interest.y+=calc.dy*scale;
        }
      }
    }
  }

  return interest;
}