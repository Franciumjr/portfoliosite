import { useRef } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ExperienceHeader from "./ExperienceHeader";

gsap.registerPlugin(ScrollTrigger)
const Showcase = () => {
    const sectionRef = useRef(null);
    const project1ref = useRef(null);
    const project2ref = useRef(null);
    const project3ref = useRef(null);
   
    useGSAP(() => {
        const projects = [project1ref.current, project2ref.current, project3ref.current];
        
        projects.forEach((project, index) => {
        gsap.fromTo(
            project, 
            {
                y:50, 
                opacity:0
            },
            {
                y: 0, 
                opacity:1,
                duration: .5,
                delay: 0.3 *(index + 1),
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom-=100',
                }
            }
        )
    })
    }, []) 


  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        
      <div className="w-full">
        <ExperienceHeader sub ="👷 Working on these right now" title="Current Projects"></ExperienceHeader>
        <div className="showcaselayout">
            
            {/*LEFT*/}
            <div ref={project1ref} className="first-project-wrapper">
                <div className="image-wrapper">
                    <img src="/portfoliosite/images/food-atlas.png" alt="Taste Atlas" />
                </div>
                <div className="text-content">
                    <h2>Browse, share, and discover recipes from all over the world with Taste Atlas</h2>
                    <p className='text-white-50 md:text-xl'>Built with Next.JS, tailwind CSS and deployed via Vercel</p>
                </div>
            </div>
            {/*RIGHT*/}
            <div className="project-list-wrapper overflow-hidden">
                <div ref={project2ref} className="project ">
                    <div className="image-wrapper object-cover">
                        <img src="/portfoliosite/images/stock-market.png" alt="Brade - Trading Platform" />
                        
                    </div>
                    <h2>brade - Trading Platform</h2>
                </div>
                
               <div ref={project3ref} className="project ">
                    <div className="image-wrapper overflow-hidden rounded-xl !p-0">
                        <video 
                            src="/portfoliosite/images/Experience/donut.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-xl"
                        ></video>
                    </div>
                    <h2>Blender Donut!!</h2>
                </div>
            </div>
            
                
            
        </div>
      </div>
    </section>
  )
}

export default Showcase
