import React from "react";

export default function RendererSettingsSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        <code>{"renderer.setSize()"}</code> sets the size of the renderer's
        output canvas to match the dimensions specified by
        <code>window.innerWidth</code> and <code>window.innerHeight</code>. This
        typically corresponds to the size of the browser window or a specific
        container where the 3D scene is displayed.
      </li>
      <li className="mb-3">
        <code>{"renderer.setPixelRatio()"}</code> sets the pixel ratio of the
        renderer. The pixel ratio is a factor that determines the relationship
        between CSS pixels and physical device pixels. It affects the rendering
        quality on high-resolution displays (e.g., Retina displays) and can help
        prevent visual artifacts.
      </li>
      <li className="mb-3">
        <code>{"window.devicePixelRatio"}</code> represents the ratio of
        physical pixels to CSS pixels on the user's device. It's typically
        greater than 1 on high-DPI displays.
      </li>
      <li className="mb-3">
        <code>{"Math.min()"}</code> ensures that the
        pixel ratio is capped at a maximum value of 2. This means that even on
        very high-DPI displays, the renderer won't use a pixel ratio greater
        than 2, which can help balance rendering quality and performance.
      </li>
      <li className="mb-3">
        By setting the <code>shadowMap.enabled</code> to true, I enabled shadows
        in the renderer. It means that objects in the 3D scene will cast and
        receive shadows.
      </li>
      <li className="mb-3">
        Also, by setting <code>shadowMap.autoUpdate</code> to true, it allows
        the shadow map to be automatically updated as the scene or objects in it
        change. This ensures that shadows accurately reflect the positions and
        movements of objects.
      </li>
      <li className="mb-3">
        I then set the <code>shadowMap.type</code> to{" "}
        <code>THREE.PCFShadowMap</code>. It means Percentage Closer Filtering,
        which is a technique to improve the quality of shadows by reducing
        aliasing artifacts.
      </li>
      <li className="mb-3">
        The color space for the renderer's output is{" "}
        <code>THREE.SRGBColorSpace</code>, which represents the sRGB color
        space, which is a standard color space used for consistent color
        representation on various devices.
      </li>
      <li className="mb-3">
        I chose <code>THREE.ACESFilmicToneMapping</code> as my tone map for the
        renderer, as it gives me more realistic and pleasing images.
      </li>
      <li className="mb-3">And I adjusted the exposure level to 1.25.</li>
    </>
  );
}
