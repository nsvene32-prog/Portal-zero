import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js";
import * as CANNON from 'https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -9.82, 0)
});

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 1. Create a clock instance outside the loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    // 2. Get the time elapsed since the last frame (in seconds)
    const delta = clock.getDelta(); 
    
    
    world.step(1 / 60);
    renderer.render(scene, camera);
}

animate();
