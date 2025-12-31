import { Environment, Float, useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
const Techicon = ({model}) => {
    const scene = useGLTF(model.modelPath);
    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === "Object_5") {
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }
    }, [scene])
  return (
    <Canvas>
        <ambientLight intensity={0.3}></ambientLight>
        <directionalLight position={[5, 5, 5]} intensity={1}></directionalLight>
        <Environment preset ="city"></Environment>
        <OrbitControls enableZoom = {false} ></OrbitControls>
        <Float speed={5.5} rotationIntensity={1} floatIntensity={0.9}> {/*allow models to float  */}
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object = {scene.scene}></primitive>
            </group>
        </Float>
    </Canvas>
  )
}

export default Techicon
