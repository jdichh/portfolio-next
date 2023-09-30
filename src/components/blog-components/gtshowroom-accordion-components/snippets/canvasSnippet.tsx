import React from "react";

export default function CanvasSnippet() {
  return (
    <pre className="blog-components-snippets-bigger-text">
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
