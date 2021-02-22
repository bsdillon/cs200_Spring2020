function buildAll()
{
  //8ft w x 8.5ft h x 40ft l
  //concrete floor
  scene.add(createBar(farLeft,level,back,farRight,level+.25,front,"foundation"));
  level += .25;
  var margin = .1;
 
  //exterior walls first floor
  scene.add(drawPanel(-40,level,back,-40,level+height,back+10,"sWall"));
  scene.add(drawPanel(-40,level,back,-30,level+height,back,"dWindow"));
  scene.add(drawPanel(-30,level,back,-20,level+height,back,"dWindow"));
  scene.add(drawPanel(-20,level,back,-10,level+height,back,"dWindow"));
  scene.add(drawPanel(-10,level,back,0,level+height,back,"lDoor"));
  scene.add(drawPanel(0,level,back,10,level+height,back,"dWindow"));
  scene.add(drawPanel(10,level,back,20,level+height,back,"dWindow"));
  scene.add(drawPanel(20,level,back,30,level+height,back,"dWindow"));
  scene.add(drawPanel(30,level,back,40,level+height,back,"dWindow"));
  scene.add(drawPanel(40,level,back,40,level+height,back+10,"lDoor"));
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

  //interior walls
  scene.add(drawPanel(-30,level,front,-30,level+height,front-10,"rDoor"));
  scene.add(drawPanel(-30,level,back,-30,level+height,front-10,"lDoor"));
  scene.add(drawPanel(-10,level,front,-10,level+height,front-10,"sWall"));
  scene.add(drawPanel(-10,level,back,-10,level+height,front-10,"lDoor"));
  scene.add(drawPanel(0,level,front,0,level+height,front-10,"sWall"));
  scene.add(drawPanel(0,level,back,0,level+height,front-10,"lDoor"));
  scene.add(drawPanel(10,level,front,10,level+height,front-10,"sWall"));
  scene.add(drawPanel(10,level,back,10,level+height,front-10,"lDoor"));
  scene.add(drawPanel(20,level,front,20,level+height,front-10,"sWall"));
  scene.add(drawPanel(20,level,back,20,level+height,front-10,"lDoor"));
  scene.add(drawPanel(-40,level,front-5,-30,level+height,front-5,"sWall"));
  scene.add(drawPanel(0,level,back+5,10,level+height,back+5,"lDoor"));
  scene.add(drawPanel(20,level,back+5,10,level+height,back+5,"rDoor"));

  //clapboard
  scene.add(drawPanel(-40-margin,level,back,-40-margin,level+height,back+10,"cSolid"));
  scene.add(drawPanel(-40,level,back-margin,-30,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(-30,level,back-margin,-20,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(-20,level,back-margin,-10,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(-10,level,back-margin,0,level+height,back-margin,"clDoor"));
  scene.add(drawPanel(0,level,back-margin,10,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(10,level,back-margin,20,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(20,level,back-margin,30,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(30,level,back-margin,40,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(40+margin,level,back,40+margin,level+height,back+10,"clDoor"));
  
  scene.add(drawPanel(-40-margin,level,front,-40-margin,level+height,front-10,"cSolid"));
  scene.add(drawPanel(-40,level,front+margin,-30,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(-30,level,front+margin,-20,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(-20,level,front+margin,-10,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(-10,level,front+margin,0,level+height,front+margin,"crDoor"));
  scene.add(drawPanel(0,level,front+margin,10,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(10,level,front+margin,20,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(20,level,front+margin,30,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(30,level,front+margin,40,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(40+margin,level,front,40+margin,level+height,front-10,"cSolid"));


  level+=7.5;
  
  //beam
  scene.add(drawCube(29.75,level,front,30.25,level+.08,back,"beam"));
  scene.add(drawCube(29.75,level+.92,front,30.25,level+1,back,"beam"));
  scene.add(drawCube(29.95,level,front,30.05,level+1,back,"beam"));

  scene.add(drawCube(-19.75,level,front,-20.25,level+.08,back,"beam"));
  scene.add(drawCube(-19.75,level+.92,front,-20.25,level+1,back,"beam"));
  scene.add(drawCube(-19.95,level,front,-20.05,level+1,back,"beam"));

  for(let i=0;i<20-.3;i+=1.5)
  {
    scene.add(drawCube(0,level,front-i,10,level+1,front-i-0.25,"joist"));
    scene.add(drawCube(10,level,front-i,20,level+1,front-i-0.25,"joist"));
    scene.add(drawCube(20,level,front-i,30,level+1,front-i-0.25,"joist"));
    if(i>2.9)
    {
      scene.add(drawCube(30,level,front-i,40,level+1,front-i-0.25,"joist"));
    }
  }

  level+=1;
  for(let i=0;i<17;i+=3)
  {
    scene.add(createBar(0,level,front-i,10,level+.08,front-i-3,"plyboard"));
    scene.add(createBar(10,level,front-i,20,level+.08,front-i-3,"plyboard"));
    scene.add(createBar(20,level,front-i,30,level+.08,front-i-3,"plyboard"));
    if(i>2.9)
    {
      scene.add(createBar(30,level,front-i,40,level+.08,front-i-3,"plyboard"));
    }
  }
  scene.add(createBar(0,level,front-17,10,level+.08,back,"plyboard"));
  scene.add(createBar(10,level,front-17,20,level+.08,back,"plyboard"));
  scene.add(createBar(20,level,front-17,30,level+.08,back,"plyboard"));
  scene.add(createBar(30,level,front-17,40,level+.08,back,"plyboard"));

  level += .08;
  
  scene.add(drawPanel(-margin,level,front,-margin,level+height,front-10,"cSolid"));
  scene.add(drawPanel(0,level,front+margin,10,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(10,level,front+margin,20,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(20,level,front+margin,30,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(30,level,front+margin,40,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(40+margin,level,front,40+margin,level+height,front-10,"cSolid"));

  scene.add(drawPanel(0,level,front,0,level+height,front-10,"sWall"));
  scene.add(drawPanel(0,level,front,10,level+height,front,"sWall"));
  scene.add(drawPanel(10,level,front,20,level+height,front,"sWall"));
  scene.add(drawPanel(20,level,front,30,level+height,front,"sWall"));
  scene.add(drawPanel(30,level,front,40,level+height,front,"sWall"));
  scene.add(drawPanel(40,level,front,40,level+height,front-10,"sWall"));

  scene.add(drawPanel(0,level,back,0,level+height,front-10,"sWall"));
  scene.add(drawPanel(0,level,back,10,level+height,back,"dWindow"));
  scene.add(drawPanel(10,level,back,20,level+height,back,"dWindow"));
  scene.add(drawPanel(20,level,back,30,level+height,back,"dWindow"));
  scene.add(drawPanel(30,level,back,40,level+height,back,"dWindow"));
  scene.add(drawPanel(40,level,back,40,level+height,front-10,"sWall"));

  scene.add(drawPanel(-margin,level,back,-margin,level+height,back+10,"cSolid"));
  scene.add(drawPanel(0,level,back-margin,10,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(10,level,back-margin,20,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(20,level,back-margin,30,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(30,level,back-margin,40,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(40+margin,level,back,40+margin,level+height,back+10,"cSolid"));

  scene.add(drawPanel(10,level,front,10,level+height,front-10,"rDoor"));
  scene.add(drawPanel(10,level,back,10,level+height,front-10,"sWall"));
  scene.add(drawPanel(20,level,front,20,level+height,front-10,"rDoor"));
  scene.add(drawPanel(20,level,back,20,level+height,front-10,"sWall"));
  scene.add(drawPanel(30,level,front,30,level+height,front-10,"rDoor"));
  scene.add(drawPanel(30,level,back,30,level+height,front-10,"sWall"));
  scene.add(drawPanel(10,level,front-5,0,level+height,front-5,"lDoor"));
  scene.add(drawPanel(20,level,front-5,10,level+height,front-5,"rDoor"));
  scene.add(drawPanel(30,level,front-5,20,level+height,front-5,"lDoor"));
  scene.add(drawPanel(40,level,front-5,30,level+height,front-5,"rDoor"));
}

function addTexture(x,yb,z,x2,yt,z2,str)
{
  var v1 = new THREE.Vector3(x,yt,z);
  var v2 = new THREE.Vector3(x,yb,z);
  var v3 = new THREE.Vector3(x2,yt,z2);
  var v4 = new THREE.Vector3(x2,yb,z2);
  
  var geom = new THREE.Geometry(); 
  geom.vertices.push(v1);
  geom.vertices.push(v2);
  geom.vertices.push(v3);
  geom.vertices.push(v4);
  geom.faces.push( new THREE.Face3( 0, 1, 2));
  geom.faces.push( new THREE.Face3( 2, 1, 3));
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 1),
    new THREE.Vector2(0,0),
    new THREE.Vector2(1,1)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(1, 1),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0)]);
  var m = new THREE.Mesh( geom, materialArray[str] );
  m.side = THREE.DoubleSide;
  return m;
}
