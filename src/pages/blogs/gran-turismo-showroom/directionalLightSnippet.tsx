import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

export default function DirectionalLightSnippet() {
  const codeSnippet = `const DL_INTENSITY = 0.075;
const directionalLight = new THREE.DirectionalLight(0xffffff, DL_INTENSITY);
directionalLight.position.set(0, 36, 0);
scene.add(directionalLight);
  
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = 10;
directionalLight.shadow.camera.far = 100;
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.top = 50;
directionalLight.shadow.camera.bottom = -50;
directionalLight.shadow.mapSize.width = 512;
directionalLight.shadow.mapSize.height = 512;`;
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
