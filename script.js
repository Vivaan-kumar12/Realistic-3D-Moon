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
// ================================
// Texture Loader
// ================================

const textureLoader = new THREE.TextureLoader();

const moonColor = textureLoader.load("textures/moon_color.jpg");

const moonNormal = textureLoader.load("textures/moon_normal.jpg");

const moonDisplacement = textureLoader.load("textures/moon_displacement.jpg");

const moonRoughness = textureLoader.load("textures/moon_roughness.jpg");


// ================================
// Moon Geometry
// ================================

const moonGeometry = new THREE.SphereGeometry(
    2,
    256,
    256
);


// ================================
// Moon Material
// ================================

const moonMaterial = new THREE.MeshStandardMaterial({

    map: moonColor,

    normalMap: moonNormal,

    displacementMap: moonDisplacement,

    displacementScale: 0.05,

    roughnessMap: moonRoughness,

    roughness: 1,

    metalness: 0

});


// ================================
// Moon Mesh
// ================================

const moon = new THREE.Mesh(
    moonGeometry,
    moonMaterial
);


// Add Moon to Scene

scene.add(moon);
// Add Canvas to Body
document.body.appendChild(
    renderer.domElement
);

// Render Scene
renderer.render(scene, camera);

// ================================
// Animation Loop
// ================================

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

// Start Animation
animate();


// ================================
// Responsive Screen
// ================================

window.addEventListener("resize", () => {

    // Update Camera Aspect Ratio
    camera.aspect = window.innerWidth / window.innerHeight;

    // Apply Changes
    camera.updateProjectionMatrix();

    // Update Renderer Size
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    // Update Pixel Ratio
    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

});
