import React from "react";

export default function CanvasSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        First, we have to import the whole Three.js library to be able to
        use all of its features.
      </li>
      <li className="mb-3">
        I'm selecting the class <code>.webGL</code>, which will act as my
        canvas.
      </li>
      <li className="mb-3">
        The object <code>windowSize</code> stores the width and height of the
        browser window using <code>window.innerWidth</code> and{" "}
        <code>window.innerHeight</code>, and can be used to set the size of the
        renderer's canvas.
      </li>
      <li className="mb-3">
        I'm creating a new instance of the WebGL renderer. It is the renderer
        commonly used in Three.js for rendering 3D scenes using the WebGL
        graphics API. If you know what Vulkan or DirectX is used for, then WebGL
        also exists, and it's for browsers.
      </li>
      <li className="mb-3">
        I'm targeting the <code>canvas</code> HTML element, which the renderer
        will use as its rendering target.
      </li>
      <li className="mb-3">
        The line where <code>getContext</code> is, explicitly specifies the
        WebGL context for the renderer. This is not usually required, as
        Three.js will automatically create a WebGL context when needed. However,
        I explicitly set the context for control reasons, because I'm using a
        GUI to dynamically change any settings such as lighting.
      </li>
      <li className="mb-3">
        And I enabled anti-aliasing, which smooths out jagged edges in rendered
        images, resulting in a better visual quality.
      </li>
    </>
  );
}
