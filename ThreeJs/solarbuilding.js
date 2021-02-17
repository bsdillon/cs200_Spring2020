function buildAll()
{
  //8ft w x 8.5ft h x 40ft l
  //concrete floor
  scene.add(drawPanel(farLeft,level,back,farRight,level+.25,front,"foundation"));
  level += .35;
  
  
  scene.add(drawPanel(farLeft,level,back,farLeft+10,level+height,back,"dWindow"));
  scene.add(drawPanel(farLeft+10,level,back,farLeft+20,level+height,back,"dWindow"));
  scene.add(drawPanel(farLeft+20,level,back,farLeft+30,level+height,back,"dWindow"));
  scene.add(drawPanel(0,level,back,farLeft+30,level+height,back,"rDoor"));
  scene.add(drawPanel(0,level,back,10,level+height,back,"dWindow"));
  scene.add(drawPanel(10,level,back,20,level+height,back,"dWindow"));
  scene.add(drawPanel(20,level,back,30,level+height,back,"dWindow"));
  scene.add(drawPanel(30,level,back,40,level+height,back,"dWindow"));

  
  scene.add(drawPanel(farLeft+10,level,front,farLeft+20,level+height,front,"dWindow"));
  scene.add(drawPanel(farLeft+20,level,front,farLeft+30,level+height,front,"dWindow"));
  scene.add(drawPanel(farLeft+30,level,front,0,level+height,front,"rDoor"));
  scene.add(drawPanel(0,level,front,10,level+height,front,"dWindow"));
  scene.add(drawPanel(10,level,front,20,level+height,front,"dWindow"));
  scene.add(drawPanel(20,level,front,30,level+height,front,"dWindow"));
}
