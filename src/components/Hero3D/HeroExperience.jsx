import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import  Mclaren   from "../../../public/models/Mclaren.jsx";
import HeroLight from './HeroLight.jsx';
import { Suspense } from 'react';




const HeroExperience = () => {
    
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress.toFixed(0)} % loaded</Html>
}

  return (
    <Canvas  camera={{ position: [0, 0, 0], fov: 45 }}>
        
        <HeroLight></HeroLight>
        
        <OrbitControls
            autoRotate autoRotateSpeed={3}
            enablePan ={false}
            enableZoom = {!isTablet}
            maxDistance={20 }
            minDistance={3}
            minPolarAngle={Math.PI /3} //top limit
            maxPolarAngle={Math.PI /2} //bottom limit
            />


            <Suspense fallback={<Loader />}>
              <Mclaren scale={isTablet ? 0.25 : 0.5}></Mclaren>
            </Suspense>

    </Canvas>
    
  )
}

export default HeroExperience;
