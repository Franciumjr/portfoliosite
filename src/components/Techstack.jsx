import { useGSAP } from "@gsap/react"
import ExperienceHeader from "../components/ExperienceHeader"
import  {techStackIcons, techStackImgs}  from '../constant_v2/index_v2'
import Techicon from "./models/Techicon"
import {gsap} from "gsap"



const Techstack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', 
            {
                y: 50,
                opacity: 0
            },
            {   
                y: 0, 
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        )
    })
  return (
    <div id = "skills" className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <ExperienceHeader 
            title = "My Preferred Tech Stack" 
            sub = "🛠️ Skills I bring to the Table"></ExperienceHeader>

            <div className="tech-grid">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"></div>
                        <div className="tech-card-content">
                            <div className="te  ch-icon-wrapper">
                                <Techicon model = {icon}></Techicon>
                            </div>
                        </div>
                        <div className="padding-x w-full">
                            
                            <p>{icon.name}</p>
                        </div>
                    </div>
                ))}

                
                {techStackImgs.map((img) => (
                    <div key={img.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"></div>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <img width="120px" src={img.imgPath} alt="" />
                            </div>
                        </div>
                        <div className="padding-x w-full">
                            <p>{img.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Techstack
