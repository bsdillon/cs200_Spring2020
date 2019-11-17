function Property(name, value, pChange, dChange, min, max)
{
  this.name =name;
  this.val = value;
  this.pChange = pChange;
  this.dChange = dChange;
  this.min = min;
  this.max = max;
}

Property.prototype.BoundedChange = function()
{
  var dv = Math.random()<.5?-dChange:dChange;
  this.val = Math.min(this.max,Math.max(this.min, this.val+dv));
}

function PropertyModel(env)
{
  this.environ = env;

  //the agent's properties
  this.properties = ["Size","Red","Blue","Green","accel","vel","dist","rate"];
  this["Size"]=new Property("Size",5,.1,1,env.GMinSize,env.GMaxSize);
  this["Red"]=new Property("Red",128,.1,1,env.GMinRed,env.GMaxRed);
  this["Blue"]=new Property("Blue",128,.1,1,env.GMinBlue,env.GMaxBlue);
  this["Green"]=new Property("Green",128,.1,1,env.GMinGreen,env.GMaxGreen);
  this["accel"]=new Property("accel",5,.1,1,env.GMinAccel,env.GMaxAccel);
  this["vel"]=new Property("vel",10,.1,1,env.GMinVel,env.GMaxVel);
  this["dist"]=new Property("dist",50,.1,1,env.GMinDist,env.GMaxDist);
  this["rate"]=new Property("rate",250,.1,10,env.GMinRate,env.GMaxRate);
}

PropertyModel.prototype.Color = function()
{
  return "rgba("+this.Red.val+","+this.Green.val+","+this.Blue.val+",1)";
}

PropertyModel.prototype.Change = function()
{
  for(let i=0;i<this.properties.length;i++)
  {
    var prop = this[properties[i]];
    if(Math.random()<prop.pChange)
    {
      prop.BoundedChange();
      if(prop.name==="rate")
      {
        //release old interval
        this.interval = setInterval(func,this.rate.val, beater);
      }
    }
  }
}

PropertyModel.prototype.SetHeartBeat = function(beater, func)
{
  this.interval = setInterval(func,this.rate.val, beater);
}