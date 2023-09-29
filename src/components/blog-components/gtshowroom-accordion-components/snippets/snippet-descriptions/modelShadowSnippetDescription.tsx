import React from "react";

export default function ModelShadowSnippetDescription() {
  return (
    <>
      <li className="mb-3">
        I created a new instance of the <code>GLTFLoader</code> class, and
        assigned it to the constant variable <code>loader</code>.
      </li>
      <li className="mb-3">
        Inside the <code>Promise.all()</code> block, which is used to wait for
        the loading process to complete, encapsulates the{" "}
        <code>loader.load()</code>
        method, which is used to load the model.
      </li>
      <li className="mb-3">
        Once the model is loaded successfully, the <code>.then()</code> block
        executes, and it receives an array containing the loaded model{" "}
        <code>[gltf1]</code> as its argument.
      </li>
      <li className="mb-3">
        I then assign <code>gltf1.scene</code> to a variable named{" "}
        <code>car1</code>, and set its scale and positioning. I scaled up the
        car by a factor of 1.5 in all dimensions, and setting the positioning of
        the car by -0.75 in the y-coordinate.{" "}
        <strong>
          I do this because I have a specific configuration, you don't have to
          follow everything I did.
        </strong>
      </li>
      <li className="mb-3">
        I made the model to be able to cast shadows by setting{" "}
        <code>car1.castShadow</code> to <code>true</code>.
      </li>
      <li className="mb-3">
        The whole <code>{"car1.traverse() => {}"}</code> block enables the
        capability to traverse through the car model's child objects (meshes)
        and enable both casting and receiving of shadows for each mesh. This
        ensures that not only the entire car but also its individual parts can
        cast and receive shadows.
      </li>
      <li className="mb-3">
        I then added the car to the scene with <code>{"scene.add(car1)"}</code>.
      </li>
      <li className="mb-3">
        The <code>{"catch() => {}"}</code> block handles any errors that might
        come up during the loading process.
      </li>
    </>
  );
}
