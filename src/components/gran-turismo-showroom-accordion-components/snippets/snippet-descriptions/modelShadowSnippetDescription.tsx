import React from "react";

export default function ModelShadowSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        The code starts by using a <code>Promise.all()</code> function to load a
        3D car model file, specifically a Toyota Supra in GLB format. The{" "}
        <code>loader.load()</code> a new instance of the <code>GLTFLoader</code>{" "}
        class, is used to load the model file, and it waits for the loading to
        finish before moving on. But that's a topic for later.
      </li>
    </>
  );
}
