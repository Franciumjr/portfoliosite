import React from 'react'
import { useGLTF } from '@react-three/drei'

  export default function Model(props) {
  const { nodes, materials } = useGLTF('/portfoliosite/models/mclaren.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-4.923, -1.772, 0.822]}>
          <mesh geometry={nodes.Front_Left_Slick_Tyre002_1.geometry} material={materials['Tyre-sides_-_Right_-_Ext.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre002_2.geometry} material={materials['Rubber_-_PBR.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre002_3.geometry} material={materials['Tyre-sides_-_Right_-_Int.001']} />
        </group>
        <group position={[3.904, 1.839, 0.826]}>
          <mesh geometry={nodes.Front_Left_Slick_Tyre003_1.geometry} material={materials['Tyre-sides_Left_-_Ext.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre003_2.geometry} material={materials['Rubber_-_PBR.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre003_3.geometry} material={materials['Tyre-sides_Left_-_Int.001']} />
        </group>
        <group position={[3.904, -1.839, 0.826]}>
          <mesh geometry={nodes.Front_Left_Slick_Tyre001_1.geometry} material={materials['Tyre-sides_-_Right_-_Int.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre001_2.geometry} material={materials['Rubber_-_PBR.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre001_3.geometry} material={materials['Tyre-sides_-_Right_-_Ext.001']} />
        </group>
        <group position={[-4.923, 1.772, 0.822]}>
          <mesh geometry={nodes.Front_Left_Slick_Tyre000_1.geometry} material={materials['Tyre-sides_Left_-_Ext.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre000_2.geometry} material={materials['Rubber_-_PBR.001']} />
          <mesh geometry={nodes.Front_Left_Slick_Tyre000_3.geometry} material={materials['Tyre-sides_Left_-_Int.001']} />
        </group>
        <group position={[3.818, 0, 1.571]}>
          <mesh geometry={nodes.Circle002_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
          <mesh geometry={nodes.Circle002_2.geometry} material={materials['harnais-metal']} />
        </group>
        <group position={[-0.101, 0, 1.421]}>
          <mesh geometry={nodes.Plane005_1.geometry} material={materials.Chrome_chassis} />
          <mesh geometry={nodes.Plane005_2.geometry} material={materials.Chassis_MP4_27} />
          <mesh geometry={nodes.Plane005_3.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
        </group>
        <group position={[-1.752, 0, 0.221]} rotation={[Math.PI / 2, 0, 0]} scale={0.288}>
          <mesh geometry={nodes.T_Cam004_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
          <mesh geometry={nodes.T_Cam004_2.geometry} material={materials.Material} />
        </group>
        <group position={[-0.441, 0.319, 0.883]} rotation={[0, 0, -Math.PI]} scale={0.118}>
          <mesh geometry={nodes.Harnais_Left001_1.geometry} material={materials.Harnais} />
          <mesh geometry={nodes.Harnais_Left001_2.geometry} material={materials.etiquette} />
        </group>
        <group position={[-0.441, -0.333, 0.883]}>
          <mesh geometry={nodes.Harnais_Right001_1.geometry} material={materials.Harnais} />
          <mesh geometry={nodes.Harnais_Right001_2.geometry} material={materials.etiquette} />
        </group>
        <group position={[0.164, 0.31, 1.249]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.05}>
          <mesh geometry={nodes.Sabelt_Left001_1.geometry} material={materials['Sabelt-blanc']} />
          <mesh geometry={nodes.Sabelt_Left001_2.geometry} material={materials['Sabelt-couture']} />
          <mesh geometry={nodes.Sabelt_Left001_3.geometry} material={materials['Sabelt-marque']} />
        </group>
        <group position={[0.164, -0.323, 1.249]}>
          <mesh geometry={nodes.Sabelt_Right001_1.geometry} material={materials['Sabelt-blanc']} />
          <mesh geometry={nodes.Sabelt_Right001_2.geometry} material={materials['Sabelt-couture']} />
          <mesh geometry={nodes.Sabelt_Right001_3.geometry} material={materials['Sabelt-marque']} />
        </group>
        <group position={[-0.079, 0.317, 0.949]} rotation={[0, 1.538, Math.PI / 2]} scale={0.047}>
          <mesh geometry={nodes.Sablet_Mousse_left001_1.geometry} material={materials['Sabelt-blanc']} />
          <mesh geometry={nodes.Sablet_Mousse_left001_2.geometry} material={materials['Sabelt-couture']} />
          <mesh geometry={nodes.Sablet_Mousse_left001_3.geometry} material={materials['Sabelt-marque']} />
        </group>
        <group position={[-0.079, -0.33, 0.949]}>
          <mesh geometry={nodes.Sablet_Mousse_Right001_1.geometry} material={materials['Sabelt-blanc']} />
          <mesh geometry={nodes.Sablet_Mousse_Right001_2.geometry} material={materials['Sabelt-couture']} />
          <mesh geometry={nodes.Sablet_Mousse_Right001_3.geometry} material={materials['Sabelt-marque']} />
        </group>
        <group position={[0, 0, 0.152]} scale={0.428}>
          <mesh geometry={nodes.Fond_plat002_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
          <mesh geometry={nodes.Fond_plat002_2.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR.002']} />
        </group>
        <group position={[5.595, 0.015, 0.491]}>
          <mesh geometry={nodes.Plane009_1.geometry} material={materials.Nose_MP4_27} />
          <mesh geometry={nodes.Plane009_2.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
          <mesh geometry={nodes.Plane009_3.geometry} material={materials.Front_Wing_Metal} />
        </group>
        <group position={[5.671, 0.015, 0.474]} scale={0.473}>
          <mesh geometry={nodes.Plane010_1.geometry} material={materials.Nose_MP4_27} />
          <mesh geometry={nodes.Plane010_2.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
        </group>
        <group position={[-5.382, 0, 1.508]}>
          <mesh geometry={nodes.Plane013_1.geometry} material={materials.Rear_wing_sides_MP4_27} />
          <mesh geometry={nodes.Plane013_2.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
        </group>
        <group position={[5.595, 0.015, 0.491]} scale={0.473}>
          <mesh geometry={nodes.Front_Wing_deflector_1.geometry} material={materials.Nose_MP4_27} />
          <mesh geometry={nodes.Front_Wing_deflector_2.geometry} material={materials['Carbon-matte']} />
        </group>
        <group position={[0, 0, 0.152]} scale={0.428}>
          <mesh geometry={nodes.Fond_plat000_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} />
          <mesh geometry={nodes.Fond_plat000_2.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR.002']} />
        </group>
        <mesh geometry={nodes.Ecrou001_1.geometry} material={materials['Material.001']} position={[3.818, 0, 1.59]} />
        <mesh geometry={nodes.Ecrou_1.geometry} material={materials['Ecrou.001']} position={[3.904, 0, 0.826]} />
        <mesh geometry={nodes.Cockpit_1.geometry} material={materials['Carbon_Fiber_-_MAT_-_PBR.001']} position={[-0.1, 0, 0]} />
        <mesh geometry={nodes.Baquet001_1.geometry} material={materials['Carbon_Fiber_-_MAT_-_PBR.001']} position={[0.591, -0.009, 1.889]} rotation={[0, 0, -Math.PI]} scale={1.3} />
        <mesh geometry={nodes['��cope_freins_1'].geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[3.904, 0, 0.826]} />
        <mesh geometry={nodes.leds_1.geometry} material={materials['Glass.001']} position={[-5.616, -0.003, 0.971]} scale={0.022} />
        <mesh geometry={nodes.leds001_1.geometry} material={materials['Front_Wing_Metal.001']} position={[-5.616, -0.003, 0.971]} scale={0.022} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Carbon_Fiber_-_MAT_-_PBR.001']} position={[-4.927, 1.825, 0.819]} rotation={[Math.PI / 2, 0, 0]} scale={0.122} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR.002']} position={[-4.121, 0, 1.28]} />
        <mesh geometry={nodes.Harnais_Boucle_Left001_1.geometry} material={materials['harnais-metal']} position={[0.073, 0.311, 0.561]} rotation={[0.273, 0.675, 3.032]} scale={[0.075, 0.085, 0.075]} />
        <mesh geometry={nodes.Plane006_1.geometry} material={materials['Chassis_MP4_27.001']} />
        <mesh geometry={nodes.Plane006_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Harnais_Clip_Left001_1.geometry} material={materials['harnais-metal']} position={[0.675, 0.158, 0.465]} rotation={[-0.07, -0.152, 2.715]} scale={0.079} />
        <mesh geometry={nodes.Harnais_Clip_Right001_1.geometry} material={materials['harnais-metal']} position={[0.681, -0.159, 0.466]} />
        <mesh geometry={nodes.Harnais_Mousse_Left001_1.geometry} material={materials['Harnais-mousse']} position={[-0.441, 0.319, 0.883]} rotation={[0, 0, -Math.PI]} scale={0.118} />
        <mesh geometry={nodes.Harnais_Mousse_Right001_1.geometry} material={materials['Harnais-mousse']} position={[-0.441, -0.333, 0.883]} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[-5.636, -0.001, 0.833]} rotation={[0, -Math.PI / 2, 0]} scale={[0.178, 0.11, 0.178]} />
        <mesh geometry={nodes.Plane008_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[-0.613, 0, 0]} scale={[0.191, 0.016, 0.191]} />
        <mesh geometry={nodes.Antenne_Ponton_Chrome002_1.geometry} material={materials.Plastic_antenna} position={[4.012, -0.001, 1.516]} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials.Nose_MP4_27} position={[5.176, 0, 0.909]} />
        <mesh geometry={nodes.Plane012_1.geometry} material={materials.Black_Shadeless} />
        <mesh geometry={nodes.Antenne_Ponton_Chrome003_1.geometry} material={materials.Metal_antenna} position={[3.572, -0.001, 1.564]} />
        <mesh geometry={nodes.Circle003_1.geometry} material={materials.Rear_wing_MP4_27} position={[-0.587, 0, 0.04]} scale={0.19} />
        <mesh geometry={nodes.Plane015_1.geometry} material={materials.Black_Shadeless} />
        <mesh geometry={nodes.Plane016_1.geometry} material={materials['Material.004']} position={[0.017, 0.002, 0]} scale={[0.15, 0.042, 0.15]} />
        <mesh geometry={nodes.Vitre001_1.geometry} material={materials.Glass} position={[0.738, 0, 0.348]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.275} />
        <mesh geometry={nodes.Plane017_1.geometry} material={materials.Deflectors} position={[1.126, 0, 0.715]} scale={0.231} />
        <mesh geometry={nodes.FIA_Cam001_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} scale={0.275} />
        <mesh geometry={nodes.Chassis004_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[0, 0, 0.208]} scale={0.332} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[5.176, 0, 0.909]} />
        <mesh geometry={nodes.Plane014_1.geometry} material={materials.Glass} position={[-5.636, -0.001, 0.833]} rotation={[0, -Math.PI / 2, 0]} scale={[0.178, 0.11, 0.178]} />
        <mesh geometry={nodes.Plane018_1.geometry} material={materials.Black} position={[-5.636, -0.001, 0.833]} rotation={[0, -Math.PI / 2, 0]} scale={[0.178, 0.11, 0.178]} />
        <mesh geometry={nodes.Plane019_1.geometry} material={materials.ground_shadow} position={[0.238, -0.042, -0.01]} scale={[8.782, 5.285, 7.613]} />
        <mesh geometry={nodes.Plane004_1.geometry} material={materials.Jante} position={[-4.922, 1.769, 0.826]} />
        <mesh geometry={nodes.Plane020_1.geometry} material={materials.Jante} position={[-4.922, -1.769, 0.826]} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Jante} position={[3.903, 1.842, 0.826]} />
        <mesh geometry={nodes.Plane021_1.geometry} material={materials.Jante} position={[3.903, -1.842, 0.826]} />
        <mesh geometry={nodes.Ecrou002_1.geometry} material={materials['Ecrou.001']} position={[-4.924, 0, 0.816]} />
        <mesh geometry={nodes.Ecrou003_1.geometry} material={materials['Material.001']} position={[-5.01, 0, 1.58]} />
        <mesh geometry={nodes['��cope_freins001_1'].geometry} material={materials['Carbon_Fiber_-_Laqued_-_PBR']} position={[-4.896, 0, 0.826]} />
        <mesh geometry={nodes.Harnais_Boucle_Left000_1.geometry} material={materials['harnais-metal']} position={[0.079, -0.321, 0.566]} />
      </group>
    </group>
  )
}

useGLTF.preload('/portfoliosite/models/mclaren.glb');
