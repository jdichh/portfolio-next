import React from "react";

export default function FloorSnippet() {
  return (
    <pre className="whitespace-pre-wrap break-words rounded-sm text-[0.5rem] sm:text-sm outline outline-1 outline-[#111111] p-1">
      <code>
{`const FLOOR_TEX = "./concrete1k/Concrete042A_1K_Color.png";
const DISPLACEMENT_MAP = "./concrete1k/Concrete042A_1K_Displacement.png";
const NORMAL_GL = "./concrete1k/Concrete042A_1K_NormalGL.png";
const AMBIENT_OCCLUSION = "./concrete1k/Concrete042A_1K_AmbientOcclusion.png";
const TEX_SCALE = 15;
const PLANE_WIDTH = 225;
const PLANE_HEIGHT = 225;

Promise.all([
  textureLoader.load(FLOOR_TEX),
  textureLoader.load(DISPLACEMENT_MAP),
  textureLoader.load(AMBIENT_OCCLUSION),
  textureLoader.load(NORMAL_GL),
]).then(([floorTexture, dispMap, amb_occ, normalGL]) => {

  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  const floorTextureScale = TEX_SCALE;
  floorTexture.repeat.set(floorTextureScale, floorTextureScale);

  dispMap.wrapS = dispMap.wrapT = THREE.RepeatWrapping;
  const dispMapScale = TEX_SCALE;
  dispMap.repeat.set(dispMapScale, dispMapScale);

  amb_occ.wrapS = amb_occ.wrapT = THREE.RepeatWrapping;
  const amb_occScale = TEX_SCALE;
  amb_occ.repeat.set(amb_occScale, amb_occScale);

  normalGL.wrapS = normalGL.wrapT = THREE.RepeatWrapping;
  const normalGLScale = TEX_SCALE;
  normalGL.repeat.set(normalGLScale, normalGLScale);

  const geometry = new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_HEIGHT);
  const material = new THREE.MeshLambertMaterial({
    map: floorTexture,
    displacementMap: dispMap,
    displacementScale: 0.1,
    normalMap: normalGL,
    normalMapType: THREE.TangentSpaceNormalMap,
    aoMap: amb_occ,
    aoMapIntensity: 1,
  });

  const floor = new THREE.Mesh(geometry, material);
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.8;
  scene.add(floor);
});`}
      </code>
    </pre>
  );
}
