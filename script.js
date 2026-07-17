// ================================
// Realistic 3D Moon Project
// Chapter 1 - Part 4
// ================================

// Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Camera Position
camera.position.z = 5;

// Create Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

// Renderer Size
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

// Pixel Ratio
renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

// Background Color
renderer.setClearColor(0x000000);

// Add Canvas to Body
document.body.appendChild(
    renderer.domElement
);

// Render Scene
renderer.render(scene, camera);
