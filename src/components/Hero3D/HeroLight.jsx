import * as THREE from 'three'

const HeroLight = () => {
    const purple = '#A259FF';
    const orange = '#E2852E';
    const cyan = "#ABE0F0";
  return (
    <>
      <ambientLight intensity={0.2} />
        <spotLight 
        position={[1, 2, 4]} 
        intensity={80} 
        angle={0.20} 
        penumbra={0.3}
        color= {cyan}>
        </spotLight>
        
        <spotLight 
        position={[5, 1, 5]} 
        intensity={100} 
        angle={0.7} 
        penumbra={0.7}
        color = {orange}
        >  
        </spotLight>  

        <spotLight 
        position={[4, 6, 3]} 
        intensity={100} 
        angle={0.7} 
        penumbra={0.5}
        color = "#3BC1A8"
        >  
        
        </spotLight>
        <primitive 
        object={new THREE.RectAreaLight({purple}, 9, 3, 1)}
        position = {[1, 5, 0]}
        intensity = {20}
        rotation = {[-Math.PI / 4, Math.PI / 4, 0]}
        >
        
        </primitive>
        
    </>
  )
}

export default HeroLight
