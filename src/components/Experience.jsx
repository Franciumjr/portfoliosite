import ExperienceHeader from "../components/ExperienceHeader"
import { historyCards } from '../constant_v2/index_v2'
import Glowcard from './Glowcard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);


const Experience = () => {
    //animation part w GSAP
            useGSAP(() => {
            gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                },
            })
            })

            gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                gsap.to('.timeline', {
                    scaleY: 1 - self.progress,
                })
                },
            },
            })
            gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                trigger: text,
                start: 'top 60%',
                },
            })
            })
        },
        []
        )


    
  return (
    <section id = "experience" className='w-full mt-20 md:mt-40 section-padding xl:px-0 '>
        <div className="w-full h-full md:px-20 px-5 ">
            <ExperienceHeader title = "Education" sub = "👨‍🎓 Education History Overview"></ExperienceHeader>
        </div>
        <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
                {historyCards.map((card, index) => (
                    <div key={card.title} className="exp-card-wrapper xl:grid-cols-[2fr_1fr_4fr] gap-4 md:mx-20">

                        {/* LEFT: card */}
                        <div className="">
                            <Glowcard card = {card} index = {index}> 
                                <div>
                                    
                                    <p className='italic text-cyan-50'>
                                    Achievements
                                </p>
                                <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                    {card.achievements.map((achievement, index) => (
                                        <li key={index} className='text-lg'>{achievement}</li>
                                    ))}
                                </ul>
                                </div>
                            </Glowcard>
                        </div>
                        {/* MIDDLE: gradient timeline line */}
                        <div className="">
                            <div className="flex justify-center">
                                <div className="timeline-wrapper">
                                    <div className="timeline">
                                        <div className="gradient-line w-1 h-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT: Text*/}
                        <div className=" max-w-3/4 expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 ">
                            <div className="timeline-logo">
                                <img src={card.imgPath} alt="" />
                            </div>
                            <div className="">
                                <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                <p className='my-5 text-white-50'>
                                    📅 {card.date}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience
