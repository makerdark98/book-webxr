import * as THREE from './three.module.js'
main();
function main() {
    // create the context
    const canvas = document.querySelector("#c");
    const gl = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
    });
    // create and set the camera
    const angleOfView = 55;
    const aspectRatio = canvas.clientWidth / canvas.clientHeight;
    const nearPlane = .1;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
        angleOfView,
        aspectRatio,
        nearPlane,
        farPlane,
    );
    camera.position.set(0, 8, 30);
    // create the scene
    const scene = new THREE.Scene();
    // add fog later...
    // GEOMETRY
        // Create the upright plane
        // Create the cube
        const cubeSize = 4;
        const cubeGeometry = new THREE.BoxGeometry(
            cubeSize,
            cubeSize,
            cubeSize,
        );
        // Create the Sphere
    // MATERIALS and TEXTURES
    const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 'pink',
    });
    // LIGHTS
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 30, 30);
    scene.add(light);
    // MESH
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(cubeSize + 1, cubeSize + 1, 0);
    scene.add(cube);
    // DRAW
    function resizeGLToDisplaySize(gl) {
        const canvas = gl.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            gl.setSize(width, height, false);
        }
        return needResize;
    }
    // SET ANIMATION LOOP
    function draw() {
        if (resizeGLToDisplaySize(gl)) {
            const canvas = gl.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        cube.rotation.x += .01;
        cube.rotation.y += .01;
        cube.rotation.z += .01;
        gl.render(scene, camera);
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    // UPDATE RESIZE
}