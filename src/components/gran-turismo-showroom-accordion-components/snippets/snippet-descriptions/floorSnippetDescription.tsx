import React from "react";

export default function FloorSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        I'm defining some file paths to texture images for the floor.
      </li>
      <li className="mb-3">
        I created the <code>TEX_SCALE</code>, <code>PLANE_WIDTH</code> &{" "}
        <code>PLANE_HEIGHT</code> variables to determine the scale and
        dimensions of the floor.
      </li>
      <li className="mb-3">
        The <code>Promise.all([...])</code> block is used to load multiple
        textures asynchronously. It waits for all the textures to be loaded
        before proceeding.
      </li>
      <li className="mb-3">
        Each loaded texture is configured to repeat its pattern across the
        floor, making it look like a tiled surface.
      </li>
      <li className="mb-3">
        I created a geometry for the floor (essentially defining its shape)
        using <code>THREE.PlaneGeometry</code>, and it will have the width and
        height I specified.
      </li>
      <li className="mb-3">
        I defined a material for the floor using{" "}
        <code>THREE.MeshLambertMaterial</code>. This material combines several
        textures: <code>map</code> is the main color texture (floorTexture)
        applied to the floor. <code>displacementMap</code> (dispMap) gives the
        floor a bumpy appearance. <code>normalMap</code> (normalGL) adds details
        to the surface to simulate lighting effects. and <code>aoMap</code>{" "}
        (amb_occ) represents ambient occlusion, which affects how light
        interacts with the surface.
      </li>
      <li className="mb-3">
        I created a 3D mesh object (the floor) by combining the geometry and
        material.
      </li>
      <li className="mb-3">
        I applied some more additional settings to the floor, such as allowing
        it to receive shadows and adjusting its position and rotation. Because
        the default setting is that the plane is upright, so I used some "quick
        maffs" to make it lie down (Refer to <code>floor.rotation.x</code>).
      </li>
      <li className="mb-3">And then, I added the floor to the scene itself.</li>
    </>
  );
}
