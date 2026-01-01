import { MatcapTexture, useGLTF } from '@react-three/drei'
import * as THREE from "three";

export function Benchpress(props) {
  const { nodes, materials } = useGLTF("/portfoliosite/src/components/Hero3D/bench-press.glb");



  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert2SG} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/portfoliosite/src/components/Hero3D/bench-press.glb');
