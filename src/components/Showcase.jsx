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
    <section id = "work" ref={sectionRef} className='app-showcase'>
        
      <div className="w-full">
        <div className="showcaselayout">
            <ExperienceHeader sub ="👷 Working on these right now" title="Current Projects"></ExperienceHeader>
            {/*LEFT*/}
            <div ref={project1ref} className="first-project-wrapper">
                <div className="image-wrapper">
                    <img src="/portfoliosite/images/project1.png" alt="" />

                </div>
                <div className="text-content">
                    <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                    <p className='text-white-50 md:text-xl'>An app built with Webflow and React Native</p>
                </div>
            </div>
            {/*RIGHT*/}
            <div className="project-list-wrapper overflow-hidden">
                <div ref={project2ref} className="project ">
                    <div className="image-wrapper bg-amber-50">
                        <img src="/portfoliosite/images/project2.png" alt="Library Management Platform" />
                        
                    </div>
                    <h2>Library management platform</h2>
                </div>
                
               <div ref={project3ref} className="project ">
                    <div className="image-wrapper bg-red-100">
                        <img src="/portfoliosite/images/project3.png" alt="Library Management Platform" />
                        
                    </div>
                    <h2>Library management platform</h2>
                </div>
            </div>
            
                
            
        </div>
      </div>
    </section>
  )
}

export default Showcase
