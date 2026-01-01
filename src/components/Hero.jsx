import React from 'react'
import {words} from '../constant_v2/index_v2'
import Button from "./Button"
import HeroExperience from './Hero3D/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import Counter from './Counter'



const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1', 
      { y:70,
        opacity: 0
      },
      {y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: 'power5.inOut'
      },
    )
  }) 
  return (
      <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/portfoliosite/src/asset/assets/public/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="relative z-20 flex flex-col justify-center md:px-20 ">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Magnus not Carlsen
            </p>
            
            {/* Buttons: responsive (stack on small, row on md+) */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-4">
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="counter"
              />

              <a
                href="/portfoliosite/src/asset/assets/public/CV/CV- Chan Seng Kuan.pdf"
                download
                className="btn-outline md:w-80 md:h-16 w-60 h-12 flex items-center justify-center font-medium"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
            
            
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="relative h-[50vh] xl:h-full w-full">
            <HeroExperience />
          </div>
        </figure>
      </div>
          <Counter></Counter>
      </section>
    
  )
}

export default Hero;
