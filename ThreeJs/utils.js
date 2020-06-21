var textures = new Object();

function makeMaterial(fileName, repeatX, repeatY)
{
  var texture = new THREE.ImageUtils.loadTexture(fileName);
  if(repeatX)
  {
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x=4;
  }

  if(repeatY)
  {
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.y=4;
  }
  return new THREE.MeshBasicMaterial({ map:texture, side:THREE.DoubleSide});
}

function loadTextures()
{
  textures["grey"] = makeMaterial("greyWall.png",false);
  textures["ext"] = makeMaterial("greyWall2.jpg",false);
  textures["doors"] = makeMaterial("doors.jpg",false);
  textures["floor"] = makeMaterial("floor2.png",false,true);
  textures["floorH"] = makeMaterial("floor2.png",true,false);
  textures["top"] = makeMaterial("top.png",false);
  textures["topH"] = makeMaterial("top2.png",false);
  textures["extSect"] = makeMaterial("greyWall_sect.jpg",false);
  textures["windSect"] = makeMaterial("greyWall_wind.png",false);
  textures["trees"] = makeMaterial("tree.png",true,false);
  textures["grass"] = makeMaterial("grass.jpg",true,true);
  textures["foundation"] = makeMaterial("concrete.jpg",true);
  textures["metal"] = makeMaterial("metal.jpg",false);
  textures["window"] = makeMaterial("window.png",false);
  textures["int"] = makeMaterial("plaster.jpg",false,false);
  textures["shingles"] = makeMaterial("shingles.jpg",true,true);
}

function createBar(x1,y1,z1,x2,y2,z2,textureName)
{
  var cubegeometry = new THREE.BoxGeometry(Math.abs(x1-x2)+.1,.1,Math.abs(z1-z2)+.1);
  var cube = new THREE.Mesh(cubegeometry, textures[textureName]);
  cube.position.set((x1+x2)/2,y1,(z1+z2)/2);
  return cube;
}

function createBackground()
{
  var cubegeometry = new THREE.BoxGeometry(0,100,400);
  var cube = new THREE.Mesh(cubegeometry, textures["trees"]);
  cube.position.set(-200, 0, 0);
  scene.add(cube);

  cubegeometry = new THREE.BoxGeometry(0,100,400);
  cube = new THREE.Mesh(cubegeometry, textures["trees"]);
  cube.position.set(200, 0, 0);
  scene.add(cube);

  cubegeometry = new THREE.BoxGeometry(400,100,0);
  cube = new THREE.Mesh(cubegeometry, textures["trees"]);
  cube.position.set(0, 0, 200);
  scene.add(cube);

  cubegeometry = new THREE.BoxGeometry(400,100,0);
  cube = new THREE.Mesh(cubegeometry, textures["trees"]);
  cube.position.set(0, 0, -200);
  scene.add(cube);

  cubegeometry = new THREE.BoxGeometry(400,0,400);
  cube = new THREE.Mesh(cubegeometry, textures["grass"]);
  cube.position.set(0, -10, 0);
  scene.add(cube);
}

function drawPanel(x,y,z,x2,y2,z2,str)
{
  var cubegeometry = new THREE.BoxGeometry(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2));
  var cube = new THREE.Mesh(cubegeometry, textures[str]);
  cube.position.set((x+x2)/2,(y+y2)/2,(z+z2)/2);
  return cube;
}