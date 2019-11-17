function Mover(id, env)
{
  InitMover(id, env);  
}

Mover.prototype.InitMover = function(id, env)
{
  this.Env = env;
  this.ID=id;

  this.PosX = Math.floor(this.Env.width*Math.random());
  this.PosY = Math.floor(this.Env.height*Math.random());
  this.VelX = 0;
  this.VelY = 0;

  //agent coordination
  this.Env.allMovers.push(this);

  this.Setup();
}

Mover.prototype.Setup = function()
{
}
