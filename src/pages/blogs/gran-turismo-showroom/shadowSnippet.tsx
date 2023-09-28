import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

export default function ShadowSnippet() {
  const codeSnippet = `const loader = new GLTFLoader();
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
});`;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      customStyle={{ 
        fontSize: "12px", 
        background: "#1F1E26",
        marginTop: "0.5rem",
        borderRadius: "0.375rem",
      }}
    >
      {codeSnippet}
    </SyntaxHighlighter>
  );
}
