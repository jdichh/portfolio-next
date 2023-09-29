import React from 'react'

export default function SpotlightSnippet() {
    return (
      <pre className="whitespace-pre-wrap break-words rounded-md text-[0.65rem] sm:text-sm">
        <code>
          {`const spotlight = new THREE.SpotLight(WHITE, 5, 20, Math.PI / 3, 0.2);
const frontSpotlight = new THREE.SpotLight(WHITE, 90, 20, Math.PI * 0.1, 0.25);
const rearSpotlight = new THREE.SpotLight(WHITE, 90, 20, Math.PI * 0.1, 0.25);
const rightSpotlight = new THREE.SpotLight(WHITE, 90, 20, Math.PI * 0.1, 0.25);
const leftSpotlight = new THREE.SpotLight(WHITE, 90, 200, Math.PI * 0.1, 0.25);

const frontOffset = new THREE.Vector3(0, 0, 18); // Front
const rearOffset = new THREE.Vector3(0, 0, -18); // Rear
const leftOffset = new THREE.Vector3(-18, 0, 0); // Left
const rightOffset = new THREE.Vector3(18, 0, 0); // Right

////////// TOP SPOTLIGHT //////////
spotlight.position.set(0, 9, 0);
spotlight.target = car1;
spotlight.castShadow = true;
spotlight.shadow.bias = -0.001;
spotlight.shadow.camera.near = 0.1;
spotlight.shadow.camera.far = 30;
spotlight.shadow.mapSize.width = 1024;
spotlight.shadow.mapSize.height = 1024;
scene.add(spotlight);

////////// FRONT SPOTLIGHT //////////
// front spotlight config
scene.add(frontSpotlight);

////////// REAR SPOTLIGHT //////////
// rear spotlight config
scene.add(rearSpotlight);

////////// RIGHT SPOTLIGHT //////////
// right spotlight config
scene.add(rightSpotlight);

////////// LEFT SPOTLIGHT //////////
// left spotlight config
scene.add(leftSpotlight);`}
        </code>
      </pre>
    );
  }