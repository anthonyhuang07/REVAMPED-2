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
const material = new THREE.MeshStandardMaterial({
    map: loader.load("/assets/mars.jpg"),
    bumpMap: loader.load("/assets/bump.jpg"),
    bumpScale: 0.04,
});
const star = new THREE.Mesh(geometry, material);
star.rotation.z = -25 * Math.PI / 180;
scene.add(star);

const sunLight = new THREE.DirectionalLight(0xffffff, 4.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

camera.fov = 7.5
camera.position.y = 1

function moveCamera(){
    const t = document.body.getBoundingClientRect().top;
    console.log(t)
    document.getElementById("intro").style.transform = `scale(${1 - (-t/500)})`
    camera.fov = 7.5 + t * -0.05
    camera.position.y = 1 + t * 0.0025
}

document.body.onscroll = moveCamera;

function animate() {
    requestAnimationFrame(animate);
    star.rotation.y += 0.001

    camera.updateProjectionMatrix();
    renderer.render(scene, camera)
}

animate()

function handleWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);