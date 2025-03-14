import * as THREE from 'three';

const canvas = document.querySelector("#grid");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

camera.position.y = 20;
camera.position.z = 130;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

const geometry = new THREE.PlaneGeometry(100, 100, 10, 10);
geometry.rotateX(-Math.PI / 2);
const material = new THREE.ShaderMaterial({
  vertexShader: document.querySelector("#vertexShader").textContent,
  fragmentShader: document.querySelector("#fragmentShader").textContent
});

const landscape = new THREE.Mesh(geometry, material);
scene.add(landscape);

function animate() {
  landscape.rotation.y += 0.001;
  renderer.render(scene, camera);
}