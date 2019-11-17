function Rock(id, env)
{
  this.InitMover(id, env);
}

Rock.prototype = Object.create(Mover.prototype);

Rock.prototype.Setup = function()
{
  this.PosX=this.Env.width/2;
  this.PosY=this.Env.height/2;

  //agent sensors
  this.sensors = new SensorModel(this,this.Env);
  this.sensors.Clear();

  //Rock characteristics
  this.properties = new PropertyModel(this.Env);
  this.properties.Red = 255;//Math.floor(Math.random()*128+127);
  this.properties.Blue = 255;//Math.floor(Math.random()*128+127);
  this.properties.Green = 255;//Math.floor(Math.random()*128+127);
  this.properties.Size = Math.floor(Math.random()*10+30);

  //Rock visual aspect
  this.visualModel = new VisualModel(this, this.Env.ctx);

  //heartbeat
  this.properties.SetHeartBeat(this,this.HeartBeat);
}

Rock.prototype.HeartBeat = function(m){
  m.visualModel.Draw();
}