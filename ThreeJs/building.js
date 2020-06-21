function buildAll()
{
  //8ft w x 8.5ft h x 40ft l
  //concrete floor
  scene.add(drawPanel(farLeft,level,back-width,farRight,level+.25,front+width,"foundation"));
  level += .35;

  leftBox();
  rightBox();
  backBox();
  frontBox();

  //next floor
  level += height;

  backTopBox();
  frontTopBox();
  otherParts();
}

function leftBox()
{
  //left wall
  scene.add(drawPanel(farLeft,level,back,farLeft,level+height,front,"ext"));
  for(let i=0;i<5;i++)
  {//interior of same
    scene.add(drawPanel(farLeft+margin,level,back+(i*width),farLeft+margin,level+height,back+((i+1)*width),"int"));
  }

  //interior partitions
  scene.add(drawPanel(farLeft+width,level,back,farLeft+width+(margin*2),level+height,back+width,"int"));
  scene.add(drawPanel(farLeft+width,level,back+(2*width),farLeft+width+(margin*2),level+height,back+width,"int"));
  scene.add(drawPanel(farLeft+width,level,front-width,farLeft+width+(margin*2),level+height,front-(2*width),"int"));
  scene.add(drawPanel(farLeft+width,level,front,farLeft+width+(margin*2),level+height,front-width,"int"));

  //top of box
  scene.add(drawPanel(farLeft,level+height,front,farLeft+width,level+height,back,"top"));
}

function rightBox()
{
  //right wall
  scene.add(drawPanel(farRight,level,back,farRight,level+height,front,"ext"));
  for(let i=0;i<5;i++)
  {//interior of same
    scene.add(drawPanel(farRight-margin,level,back+(i*width),farRight-margin,level+height,back+((i+1)*width),"int"));
  }

  //interior partitions
  scene.add(drawPanel(farRight-width,level,back,farRight-width+(margin*2),level+height,back+width,"int"));
  scene.add(drawPanel(farRight-width,level,back+(2*width),farRight-width+(margin*2),level+height,back+width,"int"));
  scene.add(drawPanel(farRight-width,level,front-width,farRight-width+(margin*2),level+height,front-(2*width),"int"));
  scene.add(drawPanel(farRight-width,level,front,farRight-width+(margin*2),level+height,front-width,"int"));

  //top of box
  scene.add(drawPanel(farRight,level+height,back,farRight-width,level+height,front,"top"));
}

function backBox()
{
  //back panel
  scene.add(drawPanel(farLeft,level,back-width,farRight,level+height,back-width,"ext"));
  for(let i=0;i<5;i++)
  {//interior of the same
    scene.add(drawPanel(farLeft+(i*width),level,back-width+margin,farLeft+((i+1)*width),level+height,back-width+margin,"int"));

    //wood along main floor
    scene.add(drawPanel(farLeft+(i*width),level,front,farLeft+((i+1)*width),level,back,"floor"));
  }

  //floor
  scene.add(drawPanel(farLeft,level,back-width,farRight,level,back,"floorH"));

  //sealed left and right doors
  scene.add(drawPanel(farLeft,level,back-width,farLeft,level+height,back,"doors"));
  scene.add(drawPanel(farRight,level,back-width,farRight,level+height,back,"doors"));
  scene.add(drawPanel(farLeft+margin,level,back-width,farLeft+margin,level+height,back,"int"));
  scene.add(drawPanel(farRight-margin,level,back-width,farRight-margin,level+height,back,"int"));

  //top of box
  scene.add(drawPanel(farLeft,level+height,back-width,farRight,level+height,back,"topH"));

  //remnant of back wall and side of other box
  scene.add(drawPanel(farLeft+width,level,back,farLeft+(3*width/2),level+height,back+(margin*2),"int"));
  scene.add(drawPanel(farRight-width,level,back,farRight-(3*width/2),level+height,back+(margin*2),"int"));
}

function frontBox()
{
  //remains of front wall of
  scene.add(drawPanel(farLeft,level,front,farLeft+width,level+height,front+(margin*2),"int"));
  scene.add(drawPanel(farLeft+width,level,front,farLeft+(3*width/2),level+height,front+(margin*2),"int"));
  scene.add(drawPanel(farRight-width,level,front,farRight-(3*width/2),level+height,front+(margin*2),"int"));
  scene.add(drawPanel(farRight,level,front,farRight-width,level+height,front+(margin*2),"int"));

  //sealed left and right doors
  scene.add(drawPanel(farLeft,level,front+width,farLeft,level+height,front,"doors"));
  scene.add(drawPanel(farRight,level,front+width,farRight,level+height,front,"doors"));
  scene.add(drawPanel(farLeft+margin,level,front+width,farLeft+margin,level+height,front,"int"));
  scene.add(drawPanel(farRight-margin,level,front+width,farRight-margin,level+height,front,"int"));

  //bottom of box in the front
  scene.add(drawPanel(farLeft,level+height,front+width,farRight,level+height,front,"topH"));

  //remains of front box
  scene.add(drawPanel(farLeft,level,front+width,farLeft+width,level+height,front+width,"windSect"));
//  scene.add(drawPanel(farRight,level,front+width,farRight-width,level+height,front+width,"windSect"));
//  scene.add(drawPanel(farLeft,level,front+width-margin,farLeft+width,level+height,front+width-margin,"windInt"));
  scene.add(drawPanel(farRight,level,front+width-margin,farRight-width,level+height,front+width-margin,"windInt"));

  //front doors
  drawWindow(farLeft+width,level,front+width-windowMargin,farLeft+width+windowSize,level+height,front+width+windowMargin);
  drawWindow(farRight-width,level,front+width-windowMargin,farRight-width-windowSize,level+height,front+width+windowMargin);

  //floor
  scene.add(drawPanel(farLeft,level+margin,front,farRight,level+margin,front+width,"floorH"));
}

function backTopBox()
{
  //back top panel
  scene.add(drawPanel(farLeft,level,back-width,farRight,level+height,back-width,"ext"));
  for(let i=0;i<5;i++)
  {//interior of the same
    scene.add(drawPanel(farLeft+(i*width),level,back-width+margin,farLeft+((i+1)*width),level+height,back-width+margin,"int"));
    if(i>0&&i<4)
    {
      scene.add(drawPanel(farLeft+(i*width),level,back+margin,farLeft+((i+1)*width),level+height,back,"int"));
    }
  }

  //floor
  scene.add(drawPanel(farLeft,level+margin,back-width,farRight,level+margin,back,"floorH"));

  //sealed left/right doors
  scene.add(drawPanel(farLeft,level,back-width,farLeft,level+height,back,"doors"));
  scene.add(drawPanel(farRight,level,back-width,farRight,level+height,back,"doors"));
  scene.add(drawPanel(farLeft+margin,level,back-width,farLeft+margin,level+height,back,"int"));
  scene.add(drawPanel(farRight-margin,level,back-width,farRight-margin,level+height,back,"int"));

  //top of panel
  scene.add(drawPanel(farLeft,level+height,back-width,farRight,level+height,back,"topH"));
}

function frontTopPanel()
{
  //front top panel
  scene.add(drawPanel(farLeft,level,front,farRight,level+height,front,"ext"));
  for(let i=0;i<5;i++)
  {//interior of the same and front wall
    scene.add(drawPanel(farLeft+(i*width),level,front-margin,farLeft+((i+1)*width),level+height,front-margin,"int"));
    if(i>0&&i<4)
    {
      scene.add(drawPanel(farLeft+(i*width),level,front-width-margin,farLeft+((i+1)*width),level+height,front-width-margin,"int"));
    }
  }

  //floor
  scene.add(drawPanel(farLeft,level+margin,front,farRight,level+margin,front+width,"floorH"));

  //sealed left/right doors
  scene.add(drawPanel(farLeft,level,front,farLeft,level+height,front+width,"doors"));
  scene.add(drawPanel(farRight,level,front,farRight,level+height,front+width,"doors"));
  scene.add(drawPanel(farLeft+margin,level,front,farLeft+margin,level+height,front+width,"int"));
  scene.add(drawPanel(farRight-margin,level,front,farRight-margin,level+height,front+width,"int"));

  //box top
  scene.add(drawPanel(farLeft,level+height,front,farRight,level+height,front+width,"topH"));
}

function otherParts()
{
  //windows on both sides
  for(let i=0;i<4;i++)
  {
    drawWindow(farLeft,level,front-width-(i*windowSize), farLeft+windowMargin,level+height,front-width-((i+1)*windowSize));
    drawWindow(farLeft+width,level,front-width-(i*windowSize), farLeft+width+windowMargin,level+4,front-width-((i+1)*windowSize));
    if(i<3)
    {
      drawWindow(farRight-width,level,front-width-(i*windowSize), farRight-width+windowMargin,level+4,front-width-((i+1)*windowSize));
    }
    drawWindow(farRight,level,front-width-(i*windowSize), farRight+windowMargin,level+height,front-width-((i+1)*windowSize));
  }
  drawWindow(farRight-width,level,back+(windowSize/2), farRight-width+windowMargin,level+4,back+width+windowSize);

  //floors on walkways
  scene.add(drawPanel(farLeft,level+margin,back,farLeft+width,level+margin,front,"floor"));
  scene.add(drawPanel(farRight,level+margin,back,farRight-width,level+margin,front,"floor"));

  //wall against stairs
  //half panel over door
  scene.add(drawPanel(farRight-width-4,level,back+windowSize/2,farRight-width-4,level-2,back,"int"));
  //half panel
  scene.add(drawPanel(farRight-width-4,level,back+windowSize/2,farRight-width-4,level-height,back+windowSize),"int"));
  //full panel
  scene.add(drawPanel(farRight-width-4,level,back+(2*windowSize),farRight-width-4,level-height,back+windowSize),"int"));
  //windows
  drawWindow(farRight-width-4,level,back,farRight-width-4,level+4,back+windowSize));
  drawWindow(farRight-width-4,level,back+windowSize,farRight-width-4,level+4,back+(2*windowSize));

  //roof
  var v1 = new THREE.Vector3(farRight,level+height,back);
  var v2 = new THREE.Vector3(farRight,level+height,front);
  var v3 = new THREE.Vector3((farRight+farLeft)/2,level+(3*height/2),front-(3*width/2));
  var v4 = new THREE.Vector3((farRight+farLeft)/2,level+(3*height/2),back+(3*width/2));

  var geom = new THREE.Geometry(); 
  geom.vertices.push(v1);
  geom.vertices.push(v2);
  geom.vertices.push(v3);
  geom.vertices.push(v4);
  geom.faces.push( new THREE.Face3( 0, 1, 2));
  geom.faces.push( new THREE.Face3( 3, 0, 2));
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(.7, 1)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(.3, 1),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(1, 1)]);
  var object = new THREE.Mesh( geom, textures["shingles"] );
  scene.add(object);

  var v3 = new THREE.Vector3((farRight+farLeft)/2,level+(3*height/2),front-(3*width/2));
  var v4 = new THREE.Vector3((farRight+farLeft)/2,level+(3*height/2),back+(3*width/2));
  var v5 = new THREE.Vector3(farLeft,level+height,back);
  var v6 = new THREE.Vector3(farLeft,level+height,front);
  geom = new THREE.Geometry(); 
  geom.vertices.push(v3);
  geom.vertices.push(v4);
  geom.vertices.push(v5);
  geom.vertices.push(v6);
  geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
  geom.faces.push( new THREE.Face3( 3, 0, 2 ) );
  geom.faceVertexUvs[0].push([new THREE.Vector2(.3, 1),
    new THREE.Vector2(.7, 1),
    new THREE.Vector2(1, 0)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
    new THREE.Vector2(.3, 1),
    new THREE.Vector2(1, 0)]);
  object = new THREE.Mesh( geom, textures["shingles"] );
  scene.add(object);

  var v1 = new THREE.Vector3(farRight,level+height,back);
  var v4 = new THREE.Vector3((farRight+farLeft)/2,level+(3*height/2),back+(3*width/2));
  var v5 = new THREE.Vector3(farLeft,level+height,back);
  geom = new THREE.Geometry(); 
  geom.vertices.push(v1);
  geom.vertices.push(v4);
  geom.vertices.push(v5);
  geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
    new THREE.Vector2(.5, 1),
    new THREE.Vector2(1, 0)]);
  object = new THREE.Mesh( geom, textures["shingles"] );
  scene.add(object);

  var v2 = new THREE.Vector3(farRight,level+height,front);
  var v3 = new THREE.Vector3((farRight+farLeft)/2,level+(3*height/2),front-(3*width/2));
  var v6 = new THREE.Vector3(farLeft,level+height,front);
  geom = new THREE.Geometry(); 
  geom.vertices.push(v2);
  geom.vertices.push(v3);
  geom.vertices.push(v6);
  geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
    new THREE.Vector2(.5, 1),
    new THREE.Vector2(1, 0)]);
  object = new THREE.Mesh( geom, textures["shingles"] );
  scene.add(object);

  //stair ramp
  var v1 = new THREE.Vector3(farRight-width,level,back);
  var v2 = new THREE.Vector3(farRight-width-4,level,back);
  var v3 = new THREE.Vector3(farRight-width,level,back+windowSize/2);
  var v4 = new THREE.Vector3(farRight-width-4,level,back+windowSize/2);
  var v5 = new THREE.Vector3(farRight-width,level-height,back+(2*windowSize));
  var v6 = new THREE.Vector3(farRight-width-4,level-height,back+(2*windowSize));

  var geom = new THREE.Geometry(); 
  geom.vertices.push(v1);
  geom.vertices.push(v2);
  geom.vertices.push(v3);
  geom.vertices.push(v4);
  geom.vertices.push(v5);
  geom.vertices.push(v6);
  geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
  geom.faces.push( new THREE.Face3( 1, 2, 3 ) );
  geom.faces.push( new THREE.Face3( 2, 3, 4 ) );
  geom.faces.push( new THREE.Face3( 3, 4, 5 ) );
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, 0),
    new THREE.Vector2(.3, 0),
    new THREE.Vector2(0, .2)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(.3, 0),
    new THREE.Vector2(0, .2),
    new THREE.Vector2(.3, .2)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(0, .2),
    new THREE.Vector2(.3, .2),
    new THREE.Vector2(0, 1)]);
  geom.faceVertexUvs[0].push([new THREE.Vector2(.3, .2),
    new THREE.Vector2(0, 1),
    new THREE.Vector2(.3, 1)]);
  var object = new THREE.Mesh( geom, textures["floor"] );
  scene.add(object);

  scene.add(makeStove(-4,-10,back-width));
  scene.add(makeFridge(-8,-10,back-width));
  //scene.add(makeSink(0,-6,front+20));
}