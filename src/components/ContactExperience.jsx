import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Float, ContactShadows } from '@react-three/drei'
import Airfryer from '../asset/assets/public/models/Airfryer.jsx'

const ContactExperience = () => {
  return (
    <div className="contact-3d-wrapper h-72 md:h-[50vh] rounded-xl overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* Lighting */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.4}>
            <group scale={[0.03, 0.03, 0.03]} position={[0, -1, 0]}>
              <Airfryer />
            </group>
            <group scale={[1, 1, 1]} position={[0, -1, 0]}>   
              <mesh castShadow receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI /2 , 0, 0]}></mesh> 
            </group>    
          </Float>

          
          <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={3} blur={2} />
        </Suspense>

        <OrbitControls 
        
        enableZoom={true} 
        autoRotateSpeed={0.6} 
        minPolarAngle={Math.PI/4}
        maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default ContactExperience