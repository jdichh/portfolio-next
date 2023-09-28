import React from "react";

export default function ModelShadowSnippet() {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-md text-[0.65rem] sm:text-sm">
      <code>
        {`const loader = new GLTFLoader();
  Promise.all([
  new Promise((resolve) => loader.load("/assets/cars/toy_sup_red.glb", resolve)),
]).then(([gltf1]) => {

  // Car Model Setup
  car1 = gltf1.scene;

  // Default setting
  car1.position.y = -0.75;

  // Toyota Supra scale
  car1.scale.set(1.5, 1.5, 1.5);

  // Setting up shadow according to the car's meshes.
  car1.castShadow = true;
  car1.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(car1);
  
  loadingSpinner.style.display = 'none';
  canvas.style.display = 'block';

  showOnCanvas();
}).catch((error) => {
  console.error("Error loading car model:", error);
});`}
      </code>
    </pre>
  );
}
