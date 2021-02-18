function buildAll()
{
  //8ft w x 8.5ft h x 40ft l
  //concrete floor
  scene.add(drawPanel(farLeft,level,back,farRight,level+.25,front,"foundation"));
  level += .35;
  var margin = .1;
  
  scene.add(drawPanel2(-40,level,back,-40,level+height,back+10,"sWall"));
  scene.add(drawPanel2(-40,level,back,-30,level+height,back,"dWindow"));
  scene.add(drawPanel2(-30,level,back,-20,level+height,back,"dWindow"));
  scene.add(drawPanel2(-20,level,back,-10,level+height,back,"dWindow"));
  scene.add(drawPanel2(-10,level,back,0,level+height,back,"rDoor"));
  scene.add(drawPanel2(0,level,back,10,level+height,back,"dWindow"));
  scene.add(drawPanel2(10,level,back,20,level+height,back,"dWindow"));
  scene.add(drawPanel2(20,level,back,30,level+height,back,"dWindow"));
  scene.add(drawPanel2(30,level,back,40,level+height,back,"dWindow"));
  scene.add(drawPanel2(40,level,back,40,level+height,back+10,"rDoor"));

  scene.add(drawPanel(-40-margin,level,back,-40-margin,level+height,back+10,"cSolid"));
  scene.add(drawPanel(-40,level,back-margin,-30,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(-30,level,back-margin,-20,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(-20,level,back-margin,-10,level+height,back-margin,"cWindow"));
  scene.add(drawPanel2(-10,level,back-margin,0,level+height,back-margin,"crDoor"));
  scene.add(drawPanel(0,level,back-margin,10,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(10,level,back-margin,20,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(20,level,back-margin,30,level+height,back-margin,"cWindow"));
  scene.add(drawPanel(30,level,back-margin,40,level+height,back-margin,"cWindow"));
  scene.add(drawPanel2(40+margin,level,back,40+margin,level+height,back+10,"crDoor"));
  
  scene.add(drawPanel2(-40,level,front,-40,level+height,front-10,"sWall"));
  scene.add(drawPanel2(-40,level,front,-30,level+height,front,"sWall"));
  scene.add(drawPanel2(-30,level,front,-20,level+height,front,"dWindow"));
  scene.add(drawPanel2(-20,level,front,-10,level+height,front,"dWindow"));
  scene.add(drawPanel2(-10,level,front,0,level+height,front,"rDoor"));
  scene.add(drawPanel2(0,level,front,10,level+height,front,"dWindow"));
  scene.add(drawPanel2(10,level,front,20,level+height,front,"dWindow"));
  scene.add(drawPanel2(20,level,front,30,level+height,front,"dWindow"));
  scene.add(drawPanel2(30,level,front,40,level+height,front,"sWall"));
  scene.add(drawPanel2(40,level,front,40,level+height,front-10,"sWall"));

  scene.add(drawPanel(-40-margin,level,front,-40-margin,level+height,front-10,"cSolid"));
  scene.add(drawPanel(-40,level,front+margin,-30,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(-30,level,front+margin,-20,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(-20,level,front+margin,-10,level+height,front+margin,"cWindow"));
  scene.add(drawPanel2(-10,level,front+margin,0,level+height,front+margin,"crDoor"));
  scene.add(drawPanel(0,level,front+margin,10,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(10,level,front+margin,20,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(20,level,front+margin,30,level+height,front+margin,"cWindow"));
  scene.add(drawPanel(30,level,front+margin,40,level+height,front+margin,"cSolid"));
  scene.add(drawPanel(40+margin,level,front,40+margin,level+height,front-10,"cSolid"));

  scene.add(drawPanel2(-30,level,front,-30,level+height,front-10,"lDoor"));
  scene.add(drawPanel2(-30,level,back,-30,level+height,front-10,"rDoor"));
  scene.add(drawPanel2(-10,level,front,-10,level+height,front-10,"sWall"));
  scene.add(drawPanel2(-10,level,back,-10,level+height,front-10,"rDoor"));
  scene.add(drawPanel2(0,level,front,0,level+height,front-10,"sWall"));
  scene.add(drawPanel2(0,level,back,0,level+height,front-10,"rDoor"));
  scene.add(drawPanel2(10,level,front,10,level+height,front-10,"sWall"));
  scene.add(drawPanel2(10,level,back,10,level+height,front-10,"rDoor"));
  scene.add(drawPanel2(20,level,front,20,level+height,front-10,"sWall"));
  scene.add(drawPanel2(20,level,back,20,level+height,front-10,"rDoor"));

  scene.add(drawPanel2(-40,level,front-5,-30,level+height,front-5,"sWall"));
  scene.add(drawPanel2(0,level,back+5,10,level+height,back+5,"rDoor"));
  scene.add(drawPanel2(20,level,back+5,10,level+height,back+5,"lDoor"));


  scene.add(addTexture(-10,level,front+10,0,level+height,front+10,"rDoor"));
  scene.add(addTexture(-10,level,front+10+margin,0,level+height,front+10+margin,"crDoor"));
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
  geom.faces.push( new THREE.Face3( 3, 0, 2));
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(1,1)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(1, 0),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 1)]);
  return new THREE.Mesh( geom, materialArray[str] );
}
