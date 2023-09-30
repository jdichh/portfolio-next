import React from "react";

export default function CanvasSnippet() {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-sm text-[0.6rem] sm:text-sm outline outline-1 outline-[#111111] p-2">
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
