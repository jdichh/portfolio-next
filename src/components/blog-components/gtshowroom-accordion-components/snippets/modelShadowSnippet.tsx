import React from "react";

export default function ModelShadowSnippet() {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-md text-[0.65rem] sm:text-sm">
      <code>
        {`const loader = new GLTFLoader();

Promise.all([
  new Promise((resolve) => loader.load("/assets/cars/toy_sup_red.glb", resolve)),
]).then(([gltf1]) => {

  car1 = gltf1.scene;
  car1.position.y = -0.75;
  car1.scale.set(1.5, 1.5, 1.5);
  car1.castShadow = true;
  
  car1.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(car1);

  showOnCanvas();
}).catch((error) => {
  console.error("Error loading car model:", error);
});`}
      </code>
    </pre>
  );
}
