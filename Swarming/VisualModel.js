function VisualModel(mover, ctx)
{
  this.mover=mover;
  this.ctx=ctx;
}

VisualModel.prototype.Draw = function()
{
  this.DrawMover();
  if(indicatorsOn)
  {
    this.DrawLabels();
  }
}

VisualModel.prototype.DrawMover = function()
{
  //draw the actual point
  this.ctx.fillStyle = this.mover.properties.Color();
  this.ctx.fillRect(this.mover.PosX-(this.mover.properties.Size.val/2), this.mover.PosY-(this.mover.properties.Size.val/2), this.mover.properties.Size.val, this.mover.properties.Size.val);
}

VisualModel.prototype.DrawLabels = function()
{
  //perception
  this.ctx.beginPath();
  this.ctx.strokeStyle = this.mover.properties.Color();
  this.ctx.ellipse(this.mover.PosX, this.mover.PosY, this.mover.sensors.Range(), this.mover.sensors.Range(), 0, 0, 2*Math.PI);
  this.ctx.stroke();
  this.ctx.beginPath();

    //speed
  this.ctx.moveTo(this.mover.PosX,this.mover.PosY);
  var mag = 3;
  this.ctx.lineTo(this.mover.PosX+(mag*this.mover.VelX), this.mover.PosY+(mag*this.mover.VelY));
  this.ctx.stroke();

    //ID
  this.ctx.font = "20px Comic Sans MS";
  this.ctx.fillStyle = "red";
  this.ctx.textAlign = "center";
  this.ctx.fillText(""+this.mover.ID, this.mover.PosX, this.mover.PosY);
}