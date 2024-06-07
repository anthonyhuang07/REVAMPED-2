import * as THREE from 'three';
// import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

// scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: document.querySelector('#san')
});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5);

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

// const controls = new OrbitControls(camera, renderer.domElement );

const loader = new THREE.TextureLoader();

// sphere
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshBasicMaterial({
    map: loader.load("/assets/earth.png"),
    bumpMap: loader.load("/assets/bump.jpg")
    // wireframe: true
});
const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

function animate() {
    requestAnimationFrame(animate);
    earthMesh.rotation.y += 0.01

    camera.fov = 7.5
    camera.position.y = 1
    camera.updateProjectionMatrix();
    renderer.render(scene, camera)
}

animate()