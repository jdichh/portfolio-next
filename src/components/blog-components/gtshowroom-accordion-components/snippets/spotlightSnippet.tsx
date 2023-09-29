import React from 'react'

export default function SpotlightSnippet() {
    return (
      <pre className="whitespace-pre-wrap break-words rounded-md text-[0.5rem] sm:text-sm">
        <code>
          {`const spotlight = new THREE.SpotLight(WHITE, 5, 20, Math.PI / 3, 0.2);
const frontSpotlight = new THREE.SpotLight(WHITE, 90, 20, Math.PI * 0.1, 0.25);
const rearSpotlight = new THREE.SpotLight(WHITE, 90, 20, Math.PI * 0.1, 0.25);
const rightSpotlight = new THREE.SpotLight(WHITE, 90, 20, Math.PI * 0.1, 0.25);
const leftSpotlight = new THREE.SpotLight(WHITE, 90, 200, Math.PI * 0.1, 0.25);

////////// SETTING UP SPOTLIGHT POSITIONS //////////
const frontOffset = new THREE.Vector3(0, 0, 18); // Front
const rearOffset = new THREE.Vector3(0, 0, -18); // Rear
const leftOffset = new THREE.Vector3(-18, 0, 0); // Left
const rightOffset = new THREE.Vector3(18, 0, 0); // Right

////////// TOP SPOTLIGHT //////////
spotlight.position.set(0, 9, 0);
spotlight.target = car1;
spotlight.castShadow = true;
spotlight.shadow.bias = -0.001; // Fixes shadow artifacts.
spotlight.shadow.camera.near = 0.1;
spotlight.shadow.camera.far = 30;
spotlight.shadow.mapSize.width = 1024;
spotlight.shadow.mapSize.height = 1024;
scene.add(spotlight);

////////// FRONT SPOTLIGHT //////////
frontSpotlight.position.set(-10, 10, 40);
frontSpotlight.position.copy(car1.position).add(frontOffset);
frontSpotlight.target = car1;
frontSpotlight.castShadow = true;
frontSpotlight.shadow.bias = -0.001;
frontSpotlight.shadow.camera.near = 0.1;
frontSpotlight.shadow.camera.far = 25;
frontSpotlight.shadow.mapSize.width = 512;
frontSpotlight.shadow.mapSize.height = 512;
scene.add(frontSpotlight);

////////// REAR SPOTLIGHT //////////
rearSpotlight.position.set(-5, 10, -11);
rearSpotlight.position.copy(car1.position).add(rearOffset);
// other configs
scene.add(rearSpotlight);

////////// RIGHT SPOTLIGHT //////////
rightSpotlight.position.copy(car1.position).add(rightOffset);
rightSpotlight.target.position.copy(car1.position)
                    .add(rightOffset).sub(leftOffset);
// other configs
scene.add(rightSpotlight);

////////// LEFT SPOTLIGHT //////////
leftSpotlight.position.copy(car1.position).add(leftOffset);
leftSpotlight.target.position.copy(car1.position)
                    .add(leftOffset).sub(rightOffset);
// other configs
scene.add(leftSpotlight);`}
        </code>
      </pre>
    );
  }