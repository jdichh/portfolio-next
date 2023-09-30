import React from "react";

export default function DirectionalLightSnippet() {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-sm text-[0.5rem] sm:text-sm outline outline-1 outline-[#111111] p-1">
      <code>
        {`const DL_INTENSITY = 0.075;

const scene = new THREE.Scene(); 
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
directionalLight.shadow.mapSize.height = 512;`}
      </code>
    </pre>
  );
}
