var smileyImgs = ["red.png", "yellow.jpg", "green.png", "purple.png", "cyan.png", "holy.png", "sleepy.png"];

function randomSmiley()
{
  return smileyImgs[Math.floor(Math.random()*smileyImgs.length)];
}

function changeFace(mover)
{
  var index = getSmileState(mover);
  mover.imageURL=smileyImgs[(index+1)%smileyImgs.length];
  mover.HTMLtag.src = mover.imageURL;
}

function getSmileState(mover)
{
  return smileyImgs.indexOf(mover.imageURL);
}

function move(mover)
{
  var state = (getSmileState(mover)%3)+1;

  var dx = 0
  var dy = 0;

  var r = Math.random();
  if(r<.25)
  {
    dx=-state;
  }
  else if(r<.5)
  {
    dx=state;
  }
  else if(r<.75)
  {
    dy=-state;
  }
  else //r>.75
  {
    dy=state;
  }

  var loc = mover.GetPosition();
  loc[0]+=dx;
  if(loc[0]<0)
  {
    loc[0]=0;
  }
  else if(loc[0]>=MaxW)
  {
    loc[0]=MaxW-1;
  }

  loc[1]+=dy;
  if(loc[1]<0)
  {
    loc[1]=0;
  }
  else if(loc[1]>=MaxH)
  {
    loc[1]=MaxH-1;
  }

  if(goldField.LookAt(loc[0],loc[1])[0]==Empty)
  {
    mover.SetPosition(loc[0],loc[1]);
  }
}

var interval;
function StartTimer()
{
  interval=setInterval(UpdateSmileys,500);
}

function UpdateSmileys()
{
  var report = "<table><tr><th>ID</th><th>Type</th><th>Step</th><th>X pos</th><th>Y pos</th></tr>";
  for(let i=0;i<allSmileys.length;i++)
  {
    move(allSmileys[i]);
    var index = getSmileState(allSmileys[i]);
    var color = smileyImgs[index];
    report+="<tr><td>"+allSmileys[i].myID+"</td><td>"+color.substring(0,color.indexOf('.'))+"</td><td>"+((index%3)+1)+"</td><td>"+allSmileys[i].xPos+"</td><td>"+allSmileys[i].yPos+"</td></tr>";
  }
  report+="</table>";
  output.innerHTML=report;
}

var allSmileys = [];
function CreateSmiley()
{
  allSmileys.push(goldField.AddSmiley());
}