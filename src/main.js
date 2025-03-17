import * as THREE from 'three';
import { ArcballControls } from 'three/examples/jsm/Addons.js';

const canvas = document.querySelector("#grid");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  canvas: canvas
 });
const control = new ArcballControls(camera, canvas, scene);

camera.position.y = 1;
camera.position.z = 40;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

const radius = 16.0;
const chunks = 512;

const seaGeometry = new THREE.SphereGeometry(radius, chunks, chunks);
const seaMaterial = new THREE.MeshBasicMaterial({
  color: "cornflowerblue"
});
const sea = new THREE.Mesh(seaGeometry, seaMaterial);
scene.add(sea);

const geometry = new THREE.SphereGeometry(radius, chunks, chunks);
const material = new THREE.ShaderMaterial({
  wireframe: true,
  vertexShader: document.querySelector("#vertexShader").textContent,
  fragmentShader: document.querySelector("#fragmentShader").textContent, 
  glslVersion: THREE.GLSL3
});

const landscape = new THREE.Mesh(geometry, material);
scene.add(landscape);

function animate() {
  landscape.rotation.y += 0.001;
  renderer.render(scene, camera);
}