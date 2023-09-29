import React from "react";

export default function RendererSnippet() {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-md text-[0.65rem] sm:text-sm">
      <code>
        {`import * as THREE from "three"; 

const canvas = document.querySelector(".webGL");
const windowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};
        
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  context: canvas.getContext('webgl'),
  antialias: true, 
});`}
      </code>
    </pre>
  );
}
