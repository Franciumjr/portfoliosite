import * as THREE from 'three'

const HeroLight = () => {
    const purple = '#A259FF';
    const orange = '#E2852E';
    const cyan = "#ABE0F0";
  return (
    <>
        <spotLight 
        position={[1, 5, 4]} 
        intensity={80} 
        angle={0.20} 
        penumbra={0.3}
        color= {cyan}>
        </spotLight>
        
        <spotLight 
        position={[5, 1, 5]} 
        intensity={60} 
        angle={0.7} 
        penumbra={0.5}
        color = {orange}
        >  
        </spotLight>  

        <spotLight 
        position={[4, 6, 3]} 
        intensity={60} 
        angle={0.7} 
        penumbra={0.2}
        color = "#CCE5CF"
        >  
        
        </spotLight>
        <primitive 
        object={new THREE.RectAreaLight({purple}, 9, 3, 1)}
        position = {[1, 5, 0]}
        intensity = {10}
        rotation = {[-Math.PI / 4, Math.PI / 4, 0]}
        >
        
        </primitive>
    </>
  )
}

export default HeroLight
