function buildAll()
{
  //8ft w x 8.5ft h x 40ft l
  //concrete floor
  scene.add(drawPanel(farLeft,level,back,farRight,level+.25,front,"foundation"));
  level += .35;
  
  
  scene.add(drawPanel(-40,level,back,-40,level+height,back+10,"sWall"));
  scene.add(drawPanel(-40,level,back,-30,level+height,back,"dWindow"));
  scene.add(drawPanel(-30,level,back,-20,level+height,back,"dWindow"));
  scene.add(drawPanel(-20,level,back,-10,level+height,back,"dWindow"));
  scene.add(drawPanel(-10,level,back,0,level+height,back,"rDoor"));
  scene.add(drawPanel(0,level,back,10,level+height,back,"dWindow"));
  scene.add(drawPanel(10,level,back,20,level+height,back,"dWindow"));
  scene.add(drawPanel(20,level,back,30,level+height,back,"dWindow"));
  scene.add(drawPanel(30,level,back,40,level+height,back,"dWindow"));
  scene.add(drawPanel(40,level,back,40,level+height,back+10,"rDoor"));

  scene.add(drawPanel(-41,level,back,-41,level+height,back+10,"cSolid"));
  scene.add(drawPanel(-40,level,back-1,-30,level+height,back-1,"cWindow"));
  scene.add(drawPanel(-30,level,back-1,-20,level+height,back-1,"cWindow"));
  scene.add(drawPanel(-20,level,back-1,-10,level+height,back-1,"cWindow"));
  scene.add(drawPanel(-10,level,back-1,0,level+height,back-1,"crDoor"));
  scene.add(drawPanel(0,level,back-1,10,level+height,back-1,"cWindow"));
  scene.add(drawPanel(10,level,back-1,20,level+height,back-1,"cWindow"));
  scene.add(drawPanel(20,level,back-1,30,level+height,back-1,"cWindow"));
  scene.add(drawPanel(30,level,back-1,40,level+height,back-1,"cWindow"));
  scene.add(drawPanel(41,level,back,41,level+height,back+10,"crDoor"));
  
  scene.add(drawPanel(-40,level,front,-40,level+height,front-10,"sWall"));
  scene.add(drawPanel(-40,level,front,-30,level+height,front,"sWall"));
  scene.add(drawPanel(-30,level,front,-20,level+height,front,"dWindow"));
  scene.add(drawPanel(-20,level,front,-10,level+height,front,"dWindow"));
  scene.add(drawPanel(-10,level,front,0,level+height,front,"rDoor"));
  scene.add(drawPanel(0,level,front,10,level+height,front,"dWindow"));
  scene.add(drawPanel(10,level,front,20,level+height,front,"dWindow"));
  scene.add(drawPanel(20,level,front,30,level+height,front,"dWindow"));
  scene.add(drawPanel(30,level,front,40,level+height,front,"sWall"));
  scene.add(drawPanel(40,level,front,40,level+height,front-10,"sWall"));

  scene.add(drawPanel(-41,level,front,-41,level+height,front-10,"cSolid"));
  scene.add(drawPanel(-40,level,front+1,-30,level+height,front+1,"cSolid"));
  scene.add(drawPanel(-30,level,front+1,-20,level+height,front+1,"cWindow"));
  scene.add(drawPanel(-20,level,front+1,-10,level+height,front+1,"cWindow"));
  scene.add(drawPanel(-10,level,front+1,0,level+height,front+1,"crDoor"));
  scene.add(drawPanel(0,level,front+1,10,level+height,front+1,"cWindow"));
  scene.add(drawPanel(10,level,front+1,20,level+height,front+1,"cWindow"));
  scene.add(drawPanel(20,level,front+1,30,level+height,front+1,"cWindow"));
  scene.add(drawPanel(30,level,front+1,40,level+height,front+1,"cSolid"));
  scene.add(drawPanel(41,level,front,41,level+height,front-10,"cSolid"));

  scene.add(drawPanel(-30,level,front,-30,level+height,front-10,"lDoor"));
  scene.add(drawPanel(-30,level,back,-30,level+height,front-10,"rDoor"));
  scene.add(drawPanel(-10,level,front,-10,level+height,front-10,"sWall"));
  scene.add(drawPanel(-10,level,back,-10,level+height,front-10,"rDoor"));
  scene.add(drawPanel(0,level,front,0,level+height,front-10,"sWall"));
  scene.add(drawPanel(0,level,back,0,level+height,front-10,"rDoor"));
  scene.add(drawPanel(10,level,front,10,level+height,front-10,"sWall"));
  scene.add(drawPanel(10,level,back,10,level+height,front-10,"rDoor"));
  scene.add(drawPanel(20,level,front,20,level+height,front-10,"sWall"));
  scene.add(drawPanel(20,level,back,20,level+height,front-10,"rDoor"));

  scene.add(drawPanel(-40,level,front-5,-30,level+height,front-5,"sWall"));
  scene.add(drawPanel(0,level,back+5,10,level+height,back+5,"rDoor"));
  scene.add(drawPanel(20,level,back+5,10,level+height,back+5,"lDoor"));
}
