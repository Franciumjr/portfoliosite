
import { useGLTF } from '@react-three/drei'

export function Gym (props) {
  const { nodes, materials } = useGLTF('/src/components/Hero3D/gym.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.57}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-1160.944, 341.544, -17.354]} rotation={[-Math.PI / 2, 0, 0.455]} scale={55.511}>
            <mesh geometry={nodes['Cube018_04_-_Default_0'].geometry} material={materials['04_-_Default']} />
            <mesh geometry={nodes.Cube018_bg002_0.geometry} material={materials['bg.002']} />
          </group>
          <group position={[-1122.372, 326.925, -38.767]} rotation={[0, 1.556, 0]} scale={67.527}>
            <mesh geometry={nodes.Cylinder025_Metal_0.geometry} material={materials.Metal} />
            <mesh geometry={nodes['Cylinder025_04_-_Default_0'].geometry} material={materials['04_-_Default']} />
          </group>
          <group position={[-1202.34, 327.091, 10.466]} rotation={[Math.PI, 0.217, -Math.PI]} scale={67.527}>
            <mesh geometry={nodes.Cylinder026_Metal_0.geometry} material={materials.Metal} />
            <mesh geometry={nodes['Cylinder026_04_-_Default_0'].geometry} material={materials['04_-_Default']} />
          </group>
          <mesh geometry={nodes.Cube023_bg002_0.geometry} material={materials['bg.002']} position={[-1211.822, 321.32, -44.17]} rotation={[Math.PI / 2, 0, -0.455]} scale={[-3.356, 3.356, 3.356]} />
          <mesh geometry={nodes.Cylinder020_Metal_0.geometry} material={materials.Metal} position={[-1178.735, 367.64, -55.554]} rotation={[Math.PI, 1.116, -Math.PI]} scale={67.527} />
          <mesh geometry={nodes['Cylinder022_04_-_Default_0'].geometry} material={materials['04_-_Default']} position={[-1222.486, 367.632, -34.145]} rotation={[Math.PI, 1.116, -Math.PI]} scale={16.032} />
          <mesh geometry={nodes.Cube021_bg002_0.geometry} material={materials['bg.002']} position={[-1192.628, 307.132, -71.859]} rotation={[-Math.PI / 2, 0, 0.455]} scale={[77.658, 77.658, 54.844]} />
          <mesh geometry={nodes['Cylinder002_04_-_Default_0'].geometry} material={materials['04_-_Default']} position={[-1227.365, 367.632, -31.76]} rotation={[Math.PI, 1.116, -Math.PI]} scale={16.032} />
          <mesh geometry={nodes['Cylinder004_04_-_Default_0'].geometry} material={materials['04_-_Default']} position={[-1138.628, 367.632, -75.138]} rotation={[Math.PI, 1.116, -Math.PI]} scale={16.032} />
          <mesh geometry={nodes['Cylinder005_04_-_Default_0'].geometry} material={materials['04_-_Default']} position={[-1143.506, 367.632, -72.754]} rotation={[Math.PI, 1.116, -Math.PI]} scale={16.032} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/src/components/Hero3D/gym.glb');
