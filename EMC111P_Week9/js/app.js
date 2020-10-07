let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  
cene = new THREE.Scene();
scene.background = new THREE.Color( "skyblue" );

//terrain
let terraingeometry = new THREE.BoxGeometry(400,1,400);
let terrainmaterial = new THREE.MeshPhongMaterial( {color: "limegreen"} );
let terrain = new THREE.Mesh(terraingeometry, terrainmaterial);
scene.add(terrain);
terrain.position.y = -20
terrain.position.x = -50
terrain.position.z = -10
terrain.rotation.y = 1

//housebody1
let housegeometry = new THREE.BoxGeometry( 12, 13, 20);
let housematerial = new THREE.MeshLambertMaterial( {color: "black"} );
let house = new THREE.Mesh(housegeometry, housematerial);
scene.add(house);

house.position.y = 2
house.position.x = -21
house.position.z = 1

//housedesign1
let housegeometry1 = new THREE.BoxGeometry( 12, 11, 13);
let housematerial1 = new THREE.MeshPhongMaterial( {color: "orange"} );
let house1 = new THREE.Mesh(housegeometry1, housematerial1);
scene.add(house1);

house1.position.y = 3
house1.position.x = -21
house1.position.z = 1


//housebody2
let housegeometry2 = new THREE.BoxGeometry( 20, 12, 12);
let housematerial2 = new THREE.MeshLambertMaterial( {color: "maroon"} );
let house2 = new THREE.Mesh(housegeometry2, housematerial2);
scene.add(house2);

house2.position.y = 9
house2.position.x = -21
house2.position.z = 1

//houseroof
let roofgeometry = new THREE.BoxGeometry( 30, .4, 20);
let roofmaterial1 = new THREE.MeshPhongMaterial( {color: "red"} );
let roof = new THREE.Mesh(roofgeometry, roofmaterial1);
scene.add(roof);

roof.position.y = 9
roof.position.x = -27
roof.position.z = 10

//housebody2design
let housegeometry3 = new THREE.BoxGeometry( 12, 12, 12);
let housematerial3 = new THREE.MeshPhongMaterial( {color: "orange"} );
let house3 = new THREE.Mesh(housegeometry3, housematerial3);
scene.add(house3);

house3.position.y = 9
house3.position.x = -18
house3.position.z = 1

//house garage wall
let housegeometry4 = new THREE.BoxGeometry( 14, 10, .4);
let housematerial4 = new THREE.MeshPhongMaterial( {color: "maroon"} );
let house4 = new THREE.Mesh(housegeometry4, housematerial4);
scene.add(house4);

house4.position.y = 2.1
house4.position.x = -13.5
house4.position.z = 19.8
house4.rotation.x = 0
house4.rotation.y = 0
house4.rotation.z = 0

//houseWindow(black tinted windows)
let windowgeometry = new THREE.BoxGeometry( 2.6, 2.5, 10);
let windowmaterial = new THREE.MeshPhysicalMaterial( {color: "black"} );
let window1 = new THREE.Mesh(windowgeometry, windowmaterial);
scene.add(window1);

window1.position.y = 12.3
window1.position.x = -12
window1.position.z = 1

let windowgeometry1 = new THREE.BoxGeometry( 2.6, 2.5, 10);
let windowmaterial1= new THREE.MeshPhysicalMaterial( {color: "black"} );
let window2 = new THREE.Mesh(windowgeometry1, windowmaterial1);
scene.add(window2);

window2.position.y = 8.7
window2.position.x = -12
window2.position.z = 1

let windowgeometry2 = new THREE.BoxGeometry( 2.6, 2.5, 10);
let windowmaterial2= new THREE.MeshPhysicalMaterial( {color: "black"} );
let window3 = new THREE.Mesh(windowgeometry2, windowmaterial2);
scene.add(window3);

window3.position.y = 5.3
window3.position.x = -12
window3.position.z = 1

//housedoor
let doorgeometry = new THREE.BoxGeometry( .2, 5, 3);
let doormaterial = new THREE.MeshPhongMaterial( {color: "orange"} );
let door = new THREE.Mesh(doorgeometry, doormaterial);
scene.add(door);

door.position.y = -1.2
door.position.x = -10
door.position.z = 2

//house door divider
let doorsplit = new THREE.BoxGeometry( .2, 5, .1);
let doorsplitmaterial = new THREE.MeshBasicMaterial( {color: "black"} );
let doordivider = new THREE.Mesh(doorsplit, doorsplitmaterial);
scene.add(doordivider);

doordivider.position.y = -1.2
doordivider.position.x = -9.8
doordivider.position.z = 2


///Light
let light1 = new THREE.AmbientLight( 0x404040 );
scene.add( light1 );

let light2 = new THREE.PointLight( 0xffff00, 1.2, 300 );
light2.position.set( 12, 13, 20 );
scene.add( light2 );

let sphereSize = 12;
let pointLightHelper = new THREE.PointLightHelper( light2, sphereSize );
scene.add( pointLightHelper );

//camera position
camera.position.z= 20;
camera.position.x= 12;
camera.rotation.y= 1;
renderer.render(scene, camera); 





