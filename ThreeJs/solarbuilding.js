function buildAll()
{
  //8ft w x 8.5ft h x 40ft l
  //concrete floor
  scene.add(createBar(farLeft,level,back,farRight,level+.25,front,"foundation"));
  level += .35;
  var margin = .1;
 
  //exterior walls first floor
  scene.add(drawPanel(-40,level,back,-40,level+height,back+10,"sWall"));
  scene.add(drawPanel(-40,level,back,-30,level+height,back,"foundation"));
  scene.add(drawPanel(-30,level,back,-20,level+height,back,"dWindow"));
  scene.add(drawPanel(-20,level,back,-10,level+height,back,"dWindow"));
  scene.add(drawPanel(-10,level,back,0,level+height,back,"rDoor"));
  scene.add(drawPanel(0,level,back,10,level+height,back,"dWindow"));
  scene.add(drawPanel(10,level,back,20,level+height,back,"dWindow"));
  scene.add(drawPanel(20,level,back,30,level+height,back,"dWindow"));
  scene.add(drawPanel(30,level,back,40,level+height,back,"dWindow"));
  scene.add(drawPanel(40,level,back,40,level+height,back+10,"rDoor"));
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
