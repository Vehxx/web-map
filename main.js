import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( 1500 / - 2, 1500 / 2, 800 / 2, 800 / - 2, 1, 1000 );
scene.add( camera );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 1500, 800 );
document.getElementById("map-box").appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 100, 100, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xaa0000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 100;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();