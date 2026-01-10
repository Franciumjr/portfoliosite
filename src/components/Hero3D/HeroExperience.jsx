import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import  Mclaren   from "../../../public/models/Mclaren.jsx";
import HeroLight from './HeroLight.jsx';





const HeroExperience = () => {
    
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    

  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        
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
            
            
              
            <Mclaren></Mclaren>

    </Canvas>
    
  )
}

export default HeroExperience;
