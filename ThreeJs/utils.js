var textures = new Object();
var materialArray = new Object();

function makeMaterial2(filename, repeatX, repeatY)
{
  var m = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( filename ), transparent: true, opacity: 0.9, color: 0xffffff });
  
  return m;
}

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
  textures["windInt"] = makeMaterial("plaster_wind.png",false);
  textures["trees"] = makeMaterial("tree.png",true,false);
  textures["grass"] = makeMaterial("grass.jpg",true,true);
  textures["foundation"] = makeMaterial("concrete.jpg",true);
  textures["metal"] = makeMaterial("metal.jpg",false);
  textures["window"] = makeMaterial("window.png",false);
  textures["int"] = makeMaterial("plaster.jpg",false,false);
  textures["counters"] = makeMaterial("counters.jpg",false,false);
  textures["sink"] = makeMaterial("sink2.png",false,false);
  textures["woodLeg"] = makeMaterial("woodleg.png",false,false);
  textures["woodTable"] = makeMaterial("woodtable.png",false,false);
  textures["shingles"] = makeMaterial("shingles.jpg",true,true);
  textures["siding"] = makeMaterial("siding.png",true,true);
  textures["dWindow"] = makeMaterial("doubleWindow.png",false,false);
  textures["lDoor"] = makeMaterial("doorLeft.png",false,false);
  textures["rDoor"] = makeMaterial("doorRight.png",false,false);
  textures["sWall"] = makeMaterial("studWall.png",false,false);
  textures["cWindow"] = makeMaterial("windowClapboard.png",false,false);
  textures["crDoor"] = makeMaterial("doorRightClapboard.png",false,false);
  textures["cSolid"] = makeMaterial("clapboard.png",false,false);
  materialArray["dWindow"] = makeMaterial2("doubleWindow.png",false,false);
  materialArray["lDoor"] = makeMaterial2("doorLeft.png",false,false);
  materialArray["rDoor"] = makeMaterial2("doorRight.png",false,false);
  materialArray["sWall"] = makeMaterial2("studWall.png",false,false);
  materialArray["cWindow"] = makeMaterial2("windowClapboard.png",false,false);
  materialArray["crDoor"] = makeMaterial2("doorRightClapboard.png",false,false);
  materialArray["cSolid"] = makeMaterial2("clapboard.png",false,false);
}

function createBar(x1,y1,z1,x2,y2,z2,textureName)
{
  var cubegeometry = new THREE.BoxGeometry(Math.abs(x1-x2)+.1,.1,Math.abs(z1-z2)+.1);
  var cube = new THREE.Mesh(cubegeometry, textures[textureName]);
  cube.position.set((x1+x2)/2,y1,(z1+z2)/2);
  return cube;
}

function createBarV(x1,y1,z1,x2,y2,z2,textureName)
{
  var cubegeometry = new THREE.BoxGeometry(.1,Math.abs(y1-y2)+.1,.1);
  var cube = new THREE.Mesh(cubegeometry, textures[textureName]);
  cube.position.set(x1,(y1+y2)/2,z1);
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

function drawPanel2(x,y,z,x2,y2,z2,str)
{
  var cubegeometry = new THREE.BoxGeometry(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2));
  var cube = new THREE.Mesh(cubegeometry, materialArray[str]);
  cube.position.set((x+x2)/2,(y+y2)/2,(z+z2)/2);
  return cube;
}

      function makeStove(x,y,z)
      {
        texture = makeMaterial("stove2.png",false,false);
        var top = 3;
        var v0 = new THREE.Vector3(x,y+top,z);
        var v1 = new THREE.Vector3(x+3,y+top,z);
        var v2 = new THREE.Vector3(x,y+top,z+3);
        var v3 = new THREE.Vector3(x+3,y+top,z+3);
        var v4 = new THREE.Vector3(x,y,z+3);
        var v5 = new THREE.Vector3(x+3,y,z+3);
        var v6 = new THREE.Vector3(x,y,z);
        var v7 = new THREE.Vector3(x+3,y,z);

        var uv1 = new THREE.Vector3(0,1);
        var uv2 = new THREE.Vector3(308/701.0,1);
        var uv3 = new THREE.Vector3(0,0);
        var uv4 = new THREE.Vector3(308/701.0,0);
        var uvS1 = new THREE.Vector3(308/701.0,104/343.0);
        var uvS2 = new THREE.Vector3(1,104/361.0);
        var uvS3 = new THREE.Vector3(308/701.0,0);
        var uvS4 = new THREE.Vector3(1,0);

        var geom = new THREE.Geometry(); 
        geom.vertices.push(v0);
        geom.vertices.push(v1);
        geom.vertices.push(v2);
        geom.vertices.push(v3);
        geom.vertices.push(v4);
        geom.vertices.push(v5);
        geom.vertices.push(v6);
        geom.vertices.push(v7);
        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geom.faces.push( new THREE.Face3( 1, 2, 3 ) );
        geom.faces.push( new THREE.Face3( 2, 3, 4 ) );
        geom.faces.push( new THREE.Face3( 3, 4, 5 ) );
        geom.faces.push( new THREE.Face3( 0, 2, 6 ) );
        geom.faces.push( new THREE.Face3( 2, 6, 4 ) );
        geom.faces.push( new THREE.Face3( 3, 1, 5 ) );
        geom.faces.push( new THREE.Face3( 1, 5, 7 ) );
        geom.faceVertexUvs[0].push([uvS1,uvS2,uvS3]);
        geom.faceVertexUvs[0].push([uvS2,uvS3,uvS4]);

        geom.faceVertexUvs[0].push([uv1,uv2,uv3]);
        geom.faceVertexUvs[0].push([uv2,uv3,uv4]);

        geom.faceVertexUvs[0].push([uvS1,uvS2,uvS3]);
        geom.faceVertexUvs[0].push([uvS2,uvS3,uvS4]);
        geom.faceVertexUvs[0].push([uvS1,uvS2,uvS3]);
        geom.faceVertexUvs[0].push([uvS2,uvS3,uvS4]);

        var object = new THREE.Mesh( geom, texture );
        return object;
      }

      function makeFridge(x,y,z)
      {
        texture = makeMaterial("fridge.png",false,false);
        var v0 = new THREE.Vector3(x,y+6,z);
        var v1 = new THREE.Vector3(x,y,z);
        var v2 = new THREE.Vector3(x,y+6,z+3);
        var v3 = new THREE.Vector3(x,y,z+3);
        var v4 = new THREE.Vector3(x+4,y+6,z+3);
        var v5 = new THREE.Vector3(x+4,y,z+3);
        var v6 = new THREE.Vector3(x+4,y+6,z);
        var v7 = new THREE.Vector3(x+4,y,z);

        var geom = new THREE.Geometry(); 
        geom.vertices.push(v0);
        geom.vertices.push(v1);
        geom.vertices.push(v2);
        geom.vertices.push(v3);
        geom.vertices.push(v4);
        geom.vertices.push(v5);
        geom.vertices.push(v6);
        geom.vertices.push(v7);
        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geom.faces.push( new THREE.Face3( 1, 2, 3 ) );
        geom.faces.push( new THREE.Face3( 2, 3, 4 ) );
        geom.faces.push( new THREE.Face3( 3, 4, 5 ) );
        geom.faces.push( new THREE.Face3( 4, 5, 6 ) );
        geom.faces.push( new THREE.Face3( 5, 6, 7 ) );
        var corner = 197/800.0;
        var corner2 = 601/800.0;
        geom.faceVertexUvs[0].push([new THREE.Vector2(0, 1),
                                    new THREE.Vector2(0, 0),
                                    new THREE.Vector2(corner, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
                                    new THREE.Vector2(corner, 1),
                                    new THREE.Vector2(corner, 0)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner, 1),
                                    new THREE.Vector2(corner, 0),
                                    new THREE.Vector2(corner2, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner, 0),
                                    new THREE.Vector2(corner2, 1),
                                    new THREE.Vector2(corner2, 0)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner2, 1),
                                    new THREE.Vector2(corner2, 0),
                                    new THREE.Vector2(1, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner2, 0),
                                    new THREE.Vector2(1, 1),
                                    new THREE.Vector2(1, 0)]);
        var object = new THREE.Mesh( geom, texture );
        return object;
      }

      function makeDishwasher(x,y,z)
      {
        texture = makeMaterial("dishwasher.png",false,false);
        var v0 = new THREE.Vector3(x,y+3,z);
        var v1 = new THREE.Vector3(x,y,z);
        var v2 = new THREE.Vector3(x,y+3,z+2.5);
        var v3 = new THREE.Vector3(x,y,z+2.5);
        var v4 = new THREE.Vector3(x+2,y+3,z+2.5);
        var v5 = new THREE.Vector3(x+2,y,z+2.5);
        var v6 = new THREE.Vector3(x+2,y+3,z);
        var v7 = new THREE.Vector3(x+2,y,z);

        var geom = new THREE.Geometry(); 
        geom.vertices.push(v0);
        geom.vertices.push(v1);
        geom.vertices.push(v2);
        geom.vertices.push(v3);
        geom.vertices.push(v4);
        geom.vertices.push(v5);
        geom.vertices.push(v6);
        geom.vertices.push(v7);
        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geom.faces.push( new THREE.Face3( 1, 2, 3 ) );
        geom.faces.push( new THREE.Face3( 2, 3, 4 ) );
        geom.faces.push( new THREE.Face3( 3, 4, 5 ) );
        geom.faces.push( new THREE.Face3( 4, 5, 6 ) );
        geom.faces.push( new THREE.Face3( 5, 6, 7 ) );
        var corner = 197/838.0;
        var corner2 = 641/838.0;
        geom.faceVertexUvs[0].push([new THREE.Vector2(0, 1),
                                    new THREE.Vector2(0, 0),
                                    new THREE.Vector2(corner, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
                                    new THREE.Vector2(corner, 1),
                                    new THREE.Vector2(corner, 0)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner, 1),
                                    new THREE.Vector2(corner, 0),
                                    new THREE.Vector2(corner2, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner, 0),
                                    new THREE.Vector2(corner2, 1),
                                    new THREE.Vector2(corner2, 0)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner2, 1),
                                    new THREE.Vector2(corner2, 0),
                                    new THREE.Vector2(1, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner2, 0),
                                    new THREE.Vector2(1, 1),
                                    new THREE.Vector2(1, 0)]);
        var object = new THREE.Mesh( geom, texture );
        return object;
      }

      function makeCabinet(x,y,z,w,d)
      {
        texture = makeMaterial("cabinet.png",false,false);
        var v0 = new THREE.Vector3(x,y+3,z);
        var v1 = new THREE.Vector3(x,y,z);
        var v2 = new THREE.Vector3(x,y+3,z+d);
        var v3 = new THREE.Vector3(x,y,z+d);
        var v4 = new THREE.Vector3(x+w,y+3,z+d);
        var v5 = new THREE.Vector3(x+w,y,z+d);
        var v6 = new THREE.Vector3(x+w,y+3,z);
        var v7 = new THREE.Vector3(x+w,y,z);

        var geom = new THREE.Geometry(); 
        geom.vertices.push(v0);
        geom.vertices.push(v1);
        geom.vertices.push(v2);
        geom.vertices.push(v3);
        geom.vertices.push(v4);
        geom.vertices.push(v5);
        geom.vertices.push(v6);
        geom.vertices.push(v7);
        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geom.faces.push( new THREE.Face3( 1, 2, 3 ) );
        geom.faces.push( new THREE.Face3( 2, 3, 4 ) );
        geom.faces.push( new THREE.Face3( 3, 4, 5 ) );
        geom.faces.push( new THREE.Face3( 4, 5, 6 ) );
        geom.faces.push( new THREE.Face3( 5, 6, 7 ) );
        var corner = 187/594.0;
        var corner2 = 409/594.0;
        geom.faceVertexUvs[0].push([new THREE.Vector2(0, 1),
                                    new THREE.Vector2(0, 0),
                                    new THREE.Vector2(corner, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
                                    new THREE.Vector2(corner, 1),
                                    new THREE.Vector2(corner, 0)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner, 1),
                                    new THREE.Vector2(corner, 0),
                                    new THREE.Vector2(corner2, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner, 0),
                                    new THREE.Vector2(corner2, 1),
                                    new THREE.Vector2(corner2, 0)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner2, 1),
                                    new THREE.Vector2(corner2, 0),
                                    new THREE.Vector2(1, 1)]);
        geom.faceVertexUvs[0].push([new THREE.Vector2(corner2, 0),
                                    new THREE.Vector2(1, 1),
                                    new THREE.Vector2(1, 0)]);
        var object = new THREE.Mesh( geom, texture );
        return object;
      }

      function drawWindow(x,y,z,x2,y2,z2)
      {
        //top bar
        scene.add(createBar(x,y,z,x2,y,z2,"metal"));

        //bottom bar
        scene.add(createBar(x,y2,z,x2,y2,z2,"metal"));

        //side1
        scene.add(createBarV(x,y,z,x,y2,z,"metal"));

        //side2
        scene.add(createBarV(x2,y,z2,x2,y2,z2,"metal"));

        var texture = new THREE.ImageUtils.loadTexture("window.png");
        var material = new THREE.MeshPhongMaterial({ map:texture, transparent : true, depthWrite: false});

        //window
        cubegeometry = new THREE.BoxGeometry(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2));
        cube = new THREE.Mesh(cubegeometry, material);
        cube.position.set((x+x2)/2,(y+y2)/2,(z+z2)/2);
        scene.add(cube);
      }

      function createBox(x,y,z,dx,dy,dz,yaw,str)
      {
        //depth,height,width
        var cubegeometry;
        if(yaw==0)
        {
          cubegeometry = new THREE.BoxGeometry(dx,dy,dz);
        }
        else
        {
          cubegeometry = new THREE.BoxGeometry(dz,dy,dx);
        }

        var cube = new THREE.Mesh(cubegeometry, textures[str]);
        cube.position.set(x, y, z);
        scene.add(cube);
      }
