function ActionModel()
{
}

ActionModel.prototype.Act = function(mover,interest)
{
  this.Move(mover,interest);
}

ActionModel.prototype.Move = function(mover, interest)
{
  if(interest.x!=0 ||interest.y!=0)
  {
    this.Accelerate(mover, interest.x, interest.y);
  }
  else if(Math.random()<.1)
  {
    var tensions = new Array();
    var props = mover.properties;
    //untasked behavior
    tensions[0]=Math.floor((2*props.accel.val+1)*Math.random()-props.accel.val);
    tensions[1]=Math.floor((2*props.accel.val+1)*Math.random()-props.accel.val);
    this.Accelerate(mover, tensions[0], tensions[1]);
  }
}

//Accelerate takes a desired dv/dt vector to inform v and p.
// * It may scale the desired vector to maximum acceleration
// * It may truncate the velocity vector based on maximum velocity
// * It may truncate the position based on boundary conditions
ActionModel.prototype.Accelerate = function(mover, ddx, ddy) {
  var props = mover.properties;
  var acc = Math.sqrt((ddx*ddx)+(ddy*ddy));
  if(acc>props.accel.val)
  {
    var c = props.accel.val/acc
    ddx *= c;
    ddy *= c;
  }

  mover.VelX += ddx;
  mover.VelY += ddy;
  var vel = Math.sqrt((mover.VelX*mover.VelX)+(mover.VelY*mover.VelY));
  if(vel>props.vel.val)
  {
    var c = props.vel.val/vel;
    mover.VelX *= c;
    mover.VelY *= c;
  }

  mover.PosX += mover.VelX;
  mover.PosY += mover.VelY;

  mover.Env.BoundaryCheck(mover);
}

function AccidentalAction()
{
}

AccidentalAction.prototype.Act = function(mover)
{

}

function SwarmAction()
{

}

SwarmAction.prototype.Act = function(mover)
{
  mover.Move();
  mover.Draw();
}