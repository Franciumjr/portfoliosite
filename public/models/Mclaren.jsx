

import React from 'react'
import { useGLTF } from '@react-three/drei'



export default function Model(props) {
  const { nodes, materials } = useGLTF('/portfoliosite/models/mclaren-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ecrou001.geometry} material={materials['Material.001']} position={[3.818, 1.59, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Front_Left_Slick_Tyre002.geometry} material={materials['Tyre-sides_-_Right_-_Ext.001']} position={[-4.923, 0.822, 1.772]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Front_Left_Slick_Tyre002_1.geometry} material={materials['Rubber_-_PBR.001']} position={[-4.923, 0.822, 1.772]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Front_Left_Slick_Tyre002_2.geometry} material={materials['Tyre-sides_Left_-_Ext.001']} position={[-4.923, 0.822, 1.772]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Ecrou.geometry} material={materials['Ecrou.001']} position={[3.904, 0.826, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cockpit.geometry} material={materials['Carbon_Fiber_-_MAT_-_PBR.001']} position={[-0.1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['��cope_freins'].geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[3.904, 0.826, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.leds.geometry} material={materials.PaletteMaterial001} position={[-5.616, 0.971, 0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.022} />
      <mesh geometry={nodes.leds001.geometry} material={materials.PaletteMaterial002} position={[-5.616, 0.971, 0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.022} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR.002']} position={[-4.121, 1.28, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['harnais-metal']} position={[3.818, 1.571, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.Chrome_chassis} position={[-0.101, 1.421, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.T_Cam004.geometry} material={materials.PaletteMaterial003} position={[-1.752, 0.221, 0]} scale={0.288} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Chassis_MP4_27.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane006_1.geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Harnais_Left001.geometry} material={materials.Harnais} position={[-0.441, 0.883, -0.319]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.118} />
      <mesh geometry={nodes.Harnais_Left001_1.geometry} material={materials.etiquette} position={[-0.441, 0.883, -0.319]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.118} />
      <mesh geometry={nodes.Harnais_Mousse_Left001.geometry} material={materials['Harnais-mousse']} position={[-0.441, 0.883, -0.319]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.118} />
      <mesh geometry={nodes.Sabelt_Left001.geometry} material={materials['Sabelt-couture']} position={[0.164, 1.249, -0.31]} rotation={[0, Math.PI / 2, 0]} scale={0.05} />
      <mesh geometry={nodes.Sabelt_Left001_1.geometry} material={materials['Sabelt-marque']} position={[0.164, 1.249, -0.31]} rotation={[0, Math.PI / 2, 0]} scale={0.05} />
      <mesh geometry={nodes.Antenne_Ponton_Chrome002.geometry} material={materials.Plastic_antenna} position={[4.012, 1.516, 0.001]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane012.geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane013.geometry} material={materials.Rear_wing_sides_MP4_27} position={[-5.382, 1.508, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Circle003.geometry} material={materials.Rear_wing_MP4_27} position={[-0.587, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.19} />
      <mesh geometry={nodes.Front_Wing_deflector.geometry} material={materials['Carbon-matte']} position={[5.595, 0.491, -0.015]} rotation={[-Math.PI / 2, 0, 0]} scale={0.473} />
      <mesh geometry={nodes.Plane018.geometry} material={materials.PaletteMaterial006} position={[-5.636, 0.833, 0.001]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.178, 0.11, 0.178]} />
      <mesh geometry={nodes.Plane019.geometry} material={materials.ground_shadow} position={[0.238, -0.01, 0.042]} rotation={[-Math.PI / 2, 0, 0]} scale={[8.782, 5.285, 7.613]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.Jante} position={[-4.922, 0.826, -1.769]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane009.geometry} material={materials.Nose_MP4_27} position={[5.595, 0.491, -0.015]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/portfoliosite/models/mclaren-transformed.glb')
