//Much thanks to mrdotb who assisted me with a critical bug which affected several locations in the code.
//http://stackoverflow.com/questions/38809948/javascript-cant-handle-events-for-multiple-instances

var characterSize = 25;
var MaxW = 20;
var MaxH = 12;
var field = null;
var offsetX = -1;
var offsetY = -1;
var soundOn = true;
var Empty = -1;
var sounds = new Array();

/////////// Start GoldField /////////////////
function GoldField(tag, block_size, block_width, block_height, background)
{
   characterSize = block_size;
   MaxW = block_width;
   MaxH = block_height;
   field = this;
   this.tag = tag;
   this.tag.id="OnlyGoldField";
   this.tag.style.width=MaxW*characterSize;
   this.tag.style.height=MaxH*characterSize;
   
   var rect = this.tag.getBoundingClientRect();
   offsetX = rect.left;
   offsetY = rect.top;

   this.spaces = new Array(MaxW);
   for(var x=0;x<MaxW;x++)
   {
     this.spaces[x] = new Array(MaxH);
     for(var y=0;y<MaxH;y++)
     {
       this.spaces[x][y] = Empty;//initiated empty array of locations.
     }
   }
   this.moverCount = 0
   this.movers = new Array();
   this.Hero = null;
   this.Tower = null;

   if(arguments.length==4)
   {
     this.tag.style.backgroundImage="url('https://bsdillon.github.io/cs200_Spring2020/GoldField/grass.jfif')";
   }
   else
   {
     this.tag.style.backgroundImage="url('"+background+"')";
   }
   this.tag.style.backgroundSize="250px 150px";
   this.tag.style.backgroundRepeat="repeat";

   var audioNames = ["coin", "monster", "hero", "win", "lose"];
   var audioURL = ["https://bsdillon.github.io/cs200_Spring2020/GoldField/coinSound.wav","https://bsdillon.github.io/cs200_Spring2020/GoldField/monsterSound.wav","https://bsdillon.github.io/cs200_Spring2020/GoldField/heroSound.wav","https://bsdillon.github.io/cs200_Spring2020/GoldField/winSound.wav","https://bsdillon.github.io/cs200_Spring2020/GoldField/loseSound.mp3"];

   for(var i = 0;i<audioNames.length;i++)
   {
      var audio = document.createElement("audio");
      audio.setAttribute('id', audioNames[i]+"Audio");
      var source = document.createElement("source");
      source.setAttribute("src",audioURL[i]);
      this.tag.appendChild(audio);
      audio.appendChild(source);
      this[audioNames[i]+"Audio"] = audio;
      sounds[audioNames[i]]=audio;
   }

   var audio = document.createElement("img");
   audio.setAttribute('id', name+"Audio");
   this.tag.appendChild(audio);
   this.noneAudio = audio;
   sounds["none"]=audio;

   this.Reset();
}

////////////////////////////////////
//         Event Functions        //
////////////////////////////////////
GoldField.prototype.SetClickListener = function(func)
{
   var wrapper = function(event)
   {
     var newEvent = [Math.floor((event.clientX-offsetX)/characterSize), Math.floor((event.clientY-offsetY)/characterSize)];

     func(newEvent);
   }

   this.tag.addEventListener("click", wrapper, false);
}

GoldField.prototype.SetKeyListener = function(func)
{
   var wrapper = function(event)
   {
     var newEvent = [event.keyCode, event.key];

     func(newEvent);
   }

   document.body.addEventListener("keyup", wrapper, false);
}
////////////////////////////////////
//         Event Functions        //
////////////////////////////////////


////////////////////////////////////
//  Membership control Functions  //
////////////////////////////////////
GoldField.prototype.Reset = function()
{
   for(var x=0;x<MaxW;x++)
   {
     for(var y=0;y<MaxH;y++)
     {
       this.spaces[x][y] = Empty;//initiated empty array of locations.
     }
   }

   this.Hero = null;
   this.Tower = null;

   var myField = this;
   var deleteAll = function(item, id)
   {
     myField.DeleteMover(id);
   }

   this.movers.forEach(deleteAll);

   this.moverCount = 0
   this.movers = new Array();
}

GoldField.prototype.RandomFill = function(percent)
{
   if(percent<=0)
   {
     return;
   }

   if(percent>.25)
   {
     alert("Maximum obstacle filler is .25");
     percent=.25;
   }

   var numObstacles = Math.floor(MaxW*MaxH*percent);
   for(var i = 0; i<numObstacles;i++)
   {
     this.AddObstacle();
   }
}

GoldField.prototype.GetMover = function(id)
{
  if(!(id in this.movers))
  {
    return null;
  }

  return this.movers[id];
}

GoldField.prototype.AddHero = function()
{
   if(this.moverCount + 5 > MaxW*MaxH)
   {
     alert("Too many Movers have been created");
     return null;
   }

   if(this.Hero!=null)
   {
     alert("Only one Hero can exist at a time");
     return null;
   }

   var img = document.createElement("img");
   img.setAttribute('id', 'mover' + this.moverCount);
   this.tag.appendChild(img);
   this.Hero = new Hero(this.moverCount);
   this.movers[this.moverCount++]=this.Hero;
   return this.Hero;
}

GoldField.prototype.AddMonster = function()
{
   if(this.moverCount + 5 > MaxW*MaxH)
   {
     alert("Too many Movers have been created");
     return null;
   }

   var img = document.createElement("img");
   img.setAttribute('id', 'mover' + this.moverCount);
   this.tag.appendChild(img);
   var monster = new Monster(this.moverCount);
   this.movers[this.moverCount++]= monster;
   return monster;
}

GoldField.prototype.AddGold = function()
{
   if(this.moverCount + 5 > MaxW*MaxH)
   {
     alert("Too many Movers have been created");
     return null;
   }

   var img = document.createElement("img");
   img.setAttribute('id', 'mover' + this.moverCount);
   this.tag.appendChild(img);
   var gold = new Gold(this.moverCount);
   this.movers[this.moverCount++]= gold;
   return gold;
}

GoldField.prototype.AddTower = function()
{
   if(this.moverCount + 5 > MaxW*MaxH)
   {
     alert("Too many Movers have been created");
     return null;
   }

   if(this.Tower!=null)
   {
     alert("Only one Tower can exist at a time");
     return null;
   }

   var img = document.createElement("img");
   img.setAttribute('id', 'mover' + this.moverCount);
   this.tag.appendChild(img);
   var tower = new Tower(this.moverCount);
   this.movers[this.moverCount++]= tower;
   return tower;
}

GoldField.prototype.AddObstacle = function()
{
   if(this.moverCount + 5 > MaxW*MaxH)
   {
     alert("Too many Movers have been created");
     return null;
   }

   var img = document.createElement("img");
   img.setAttribute('id', 'mover' + this.moverCount);
   this.tag.appendChild(img);
   var obstacle = new Obstacle(this.moverCount);
   this.movers[this.moverCount++]= obstacle;
   return obstacle;
}

GoldField.prototype.AddGenericMover = function(obj)
{
   this.movers[obj.myID]= obj;
}

GoldField.prototype.CreateMoverTag = function()
{
   if(this.moverCount + 5 > MaxW*MaxH)
   {
     alert("Too many Movers have been created");
     return null;
   }

   var img = document.createElement("img");
   img.setAttribute('id', 'mover' + this.moverCount);
   this.tag.appendChild(img);
   return this.moverCount++;
}

GoldField.prototype.DeleteMover = function(id)
{
  var isHero = false;
  if(this.Hero!=null && id==this.Hero.myID)
  {
    this.Hero = null;
    isHero = true;
    
  }
  else if(this.Tower!=null && id==this.Tower.myID)
  {
    this.Tower = null;
  }

  var mover = document.getElementById("mover"+id);
  if(!isHero)
  {
    this.tag.removeChild(mover);
    delete this.movers[id];
  }
}
////////////////////////////////////
//  Membership control Functions  //
////////////////////////////////////

////////////////////////////////////
//      Locations Functions       //
////////////////////////////////////
GoldField.prototype.GetDimensions = function()
{
  return [MaxW, MaxH];
}

GoldField.prototype.LookAt = function(x,y)
{
  if(x<0 || y<0 || x>= MaxW || y>= MaxH)
  {
    alert("The position must be within the bounds of the field");
    return null;
  }

  if(this.spaces[x][y]==Empty)
  {
    return [Empty,"empty"];
  }

  var id = this.spaces[x][y];
  return [id, this.movers[id].Description];
}

GoldField.prototype.GetAvailablePosition = function()
{
  var x = 0;
  var y = 0;
  do
  {
    x = Math.floor(Math.random()*MaxW);
    y = Math.floor(Math.random()*MaxH);
  }while(this.spaces[x][y]!=Empty);
  
  return [x, y];
}
////////////////////////////////////
//      Locations Functions       //
////////////////////////////////////

////////////////////////////////////
//        Sound Functions         //
////////////////////////////////////
GoldField.prototype.AddSound = function(soundURL, name)
{
   if(name in sounds)
   {
     alert("It is illegal to overwrite the existing sounds through AddSound. Use ChangeSound.");
     return;
   }

   var audio = document.createElement("audio");
   audio.setAttribute('id', name+"Audio");
   var source = document.createElement("source");
   source.setAttribute("src",soundURL);
   this.tag.appendChild(audio);
   audio.appendChild(source);
   this[name] = audio;
   sounds[name]=this[name];
   return sounds[name];
}

GoldField.prototype.ChangeSound = function(soundURL, name)
{
   if(!(name in sounds))
   {
     alert("It is illegal to create a new sound through ChangeSound. Use AddSound");
     return;
   }

   var audioTag = document.getElementById(name+"Audio");

   var audio = document.createElement("audio");
   audio.setAttribute('id', name+"Audio");
   var source = document.createElement("source");
   source.setAttribute("src",soundURL);
   this.tag.appendChild(audio);
   audio.appendChild(source);
   this[name] = audio;
   sounds[name]=this[name];
}

GoldField.prototype.PlaySound = function(name)
{
   if(!(name in sounds))
   {
     alert("Sound "+name+" does not exist");
     return;
   }

   sounds[name].play();
}

GoldField.prototype.GetSound = function(name)
{
   if(!(name in sounds))
   {
     alert("Sound "+name+" does not exist");
     return;
   }

   return sounds[name];
}

GoldField.prototype.GetSoundList = function()
{
   var output = new Array();

   var copyAll = function(item, id)
   {
     output.push(id);
   }

   this.sounds.forEach(copyAll);

   return output;
}

GoldField.prototype.SetMute = function(newMute)
{
  SoundOn = !newMute;
}

GoldField.prototype.Win = function()
{
   if(soundOn)
   {
     this.winAudio.play();
   }
}

GoldField.prototype.Lose = function()
{
   if(soundOn)
   {
     this.loseAudio.play();
   }
}
////////////////////////////////////
//        Sound Functions         //
////////////////////////////////////
/////////// End GoldField /////////////////

/////////// Start Mover /////////////////
var Mover = function()
{
}

Mover.prototype.InitTag = function(id)
{
   this.myID = id;
   this.HTMLtag = document.getElementById("mover"+id);
   this.HTMLtag.src=this.imageURL;
   this.HTMLtag.style.position="absolute";
   this.HTMLtag.style.width=characterSize;
   this.HTMLtag.style.height=characterSize;

   this.xPos = -1;
   this.yPos = -1;

   var location = field.GetAvailablePosition();
   this.SetPosition(location[0], location[1]);
}

Mover.prototype.myId;
Mover.prototype.xPos;
Mover.prototype.yPos;

Mover.prototype.SetPosition = function(xVal, yVal)
{
   if(xVal<0 || yVal<0 || xVal>MaxW || yVal>MaxH)
   {
     alert("Positions must be within the bounds of the field");
     return;
   }

   if(field.LookAt(xVal,yVal)[0]!=Empty)
   {
     alert("Position is occupied by "+field.movers[field.spaces[xVal][yVal]].Description);
     return;
   }

   //clear the previous position (if there was one)
   if(this.xPos!=-1 && this.yPos!=-1)
   {
     field.spaces[this.xPos][this.yPos]=-1;
   }

   //assert new position
   this.xPos = xVal;
   this.yPos = yVal;
   this.HTMLtag.style.left = xVal * characterSize + offsetX;
   this.HTMLtag.style.top = yVal * characterSize + offsetY;

   //set new position
   field.spaces[this.xPos][this.yPos]=this.myID;
}

Mover.prototype.GetPosition = function()
{
   return [this.xPos, this.yPos];
}

Mover.prototype.Destroy = function()
{
   this.HTMLtag.src=this.destroyURL;
   if(soundOn)
   {
     sounds[this.destroyAudio].play();
   }
   var mID = this.myID;
   var time = this.destroyTime;
   
   this.DestroyBehavior();

   setTimeout(function() {field.DeleteMover(mID)}, time);
}

Mover.prototype.DestroyBehavior = function()
{
  field.spaces[this.xPos][this.yPos]=Empty;
}
/////////// End Mover /////////////////

/////////// Start Monster /////////////////
var Monster = function(id)
{
   this.Description = "Monster";
   this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/monster.png";
   this.destroyURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/explode.gif_c200";
   this.destroyAudio = "monster";
   this.destroyTime = 1000;
   this.InitTag(id);
}

Monster.prototype = Object.create(Mover.prototype);
Monster.prototype.constructor = Monster;
/////////// End Monster /////////////////

/////////// Start Hero /////////////////
var Hero = function(id)
{
   this.Description = "Hero";
   this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/hero.png";
   this.destroyURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/tombe.png";
   this.destroyAudio = "hero";
   this.destroyTime = 1000;
   this.InitTag(id);
}

Hero.prototype = Object.create(Mover.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.DestroyBehavior = function()
{
  this.Description = "Tombstone";
  this.destroyAudio = "none";
  this.destroyTime = 10;
}
/////////// End Hero /////////////////

/////////// Start Gold /////////////////
var Gold = function(id)
{
   this.Description = "Gold";
   this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/gold.png";
   this.destroyURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/money.gif";
   this.destroyAudio = "coin";
   this.destroyTime = 1000;
   this.InitTag(id);
}

Gold.prototype = Object.create(Mover.prototype);
Gold.prototype.constructor = Gold;
/////////// End Gold /////////////////

/////////// Start Obstacle /////////////////
var Obstacle = function(id)
{

   var choice = Math.random();
   if(choice<.33)
   {
     this.Description = "Rock";
     this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/boulder.png";
   }
   else if(choice<.66)
   {
     this.Description = "Water";
     this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/water.png";
   }
   else
   {
     this.Description = "Plant";
     this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/plant.jpg";
   }

   this.destroyURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/Empty.png";
   this.destroyAudio = "none";
   this.destroyTime = 10;
   this.InitTag(id);
}

Obstacle.prototype = Object.create(Mover.prototype);
Obstacle.prototype.constructor = Obstacle;
/////////// End Obstacle /////////////////

/////////// Start Tower /////////////////
var Tower = function(id)
{
   this.Description = "Tower";
   this.imageURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/tower.png";
   this.destroyURL = "https://bsdillon.github.io/cs200_Spring2020/GoldField/Empty.png";
   this.destroyAudio = "none";
   this.destroyTime = 10;
   this.InitTag(id);
}

Tower.prototype = Object.create(Mover.prototype);
Tower.prototype.constructor = Tower;
/////////// End Tower /////////////////
