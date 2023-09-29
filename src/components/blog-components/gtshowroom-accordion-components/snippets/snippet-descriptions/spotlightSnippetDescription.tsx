import React from "react";

export default function SpotlightSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        I created spotlights using the
        <code>THREE.SpotLight</code> class. Each spotlight has various
        parameters that control its properties, including color, intensity,
        distance, angle, and decay. I also created a <code>WHITE</code> variable
        that holds the hex code for the color white, and assigned it to the
        spotlight colors.
      </li>
      <li className="mb-3">
        I set up the offset positions of the spotlights using{" "}
        <code>THREE.Vector3</code>.
      </li>
      <li className="mb-3">
        I configured the spotlights to have their own positioning, target,
        enabling shadow casting, and configuring the shadow camera parameters
        (near, far, map size, bias) to control how shadows are generated and
        displayed.
      </li>
      <li className="mb-3">I then add the spotlights to the scene.</li>
    </>
  );
}
