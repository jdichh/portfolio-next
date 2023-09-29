import React from 'react'

export default function RendererSettingsSnippet() {
    return (
      <pre className="whitespace-pre-wrap break-words rounded-md text-[0.5rem] sm:text-sm">
        <code>
          {`renderer.setSize(windowSize.width, windowSize.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.shadowMap.enabled = true;
renderer.shadowMap.autoUpdate = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25`}
        </code>
      </pre>
    );
  }