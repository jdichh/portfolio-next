import React from "react";

export default function DirectionalLightSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        Of course, we have to import the whole Three.js library to be able to
        use all of its features.
      </li>
      <li className="mb-3">
        I set a constant value of 0.075 for the <code>DL_INTENSITY</code>.
      </li>
      <li className="mb-3">
        I created an instance of <code>THREE.Scene</code>, which initializes the
        3D scene. It's the canvas, where we can add things that we like; models,
        lighting, postprocessing effects, etc.
      </li>
      <li className="mb-3">
        A new instance of <code>THREE.DirectionalLight</code> is created, and
        set to have a white color defined by the hex code <code>0xffffff</code>,
        and a directional light intensity value of what{" "}
        <code>DL_INTENSITY</code> has.
      </li>
      <li className="mb-3">
        I set the positioning of the directional light to{" "}
        <code>(0, 36, 0)</code>. It is the x, y & z coordinates, respectively.
      </li>
      <li className="mb-3">
        The directional light is added to the scene. This means it will
        illuminate everything in the 3D scene.
      </li>
      <li className="mb-3">
        I enabled shadows by setting <code>castShadow</code> to true.
      </li>
      <li className="mb-3">
        And I configured the <code>directionalLight</code>'s shadow camera. They
        basically determine how shadows are calculated and displayed. For
        example, near and far define the range within which shadows are
        rendered, and mapSize sets the resolution of the shadow map.
      </li>
    </>
  );
}
