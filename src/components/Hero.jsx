import React from 'react'
import { socialImgs } from '../constant_v2/index_v2'
import Button from './Button'
import Counter from './Counter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  const portfolioText = "PORTFOLIO".split("");

  useGSAP(() => {
    // 1. "PORTFOLIO" characters slide up with stagger
    gsap.fromTo(
      '.portfolio-char',
      {
        yPercent: 120,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    // 2. Handwritten script text ("Magnus's")
    gsap.fromTo(
      '.hero-script',
      {
        opacity: 0,
        scale: 0.7,
        y: 25,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: 'back.out(1.6)',
        delay: 0.65,
      }
    );

    // 3. Subtitle ("SOFTWARE DEVELOPER")
    gsap.fromTo(
      '.hero-subtitle',
      {
        opacity: 0,
        y: -5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.75,
      }
    );

    // 4. Portrait image cutout
    gsap.fromTo(
      '.hero-portrait',
      {
        opacity: 0,
        y: 70,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.45,
      }
    );

    // 5. Bottom items (tagline, buttons, social links)
    gsap.fromTo(
      '.hero-footer-item',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.85,
      }
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between pt-36 sm:pt-44 md:pt-52 lg:pt-64 pb-12 overflow-hidden bg-black-100">
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-100/15 blur-[140px]" />
      </div>

      {/* Subtle background grain/texture */}
      <div className="absolute top-0 left-0 z-0 opacity-20 pointer-events-none w-full h-full">
        <img src="/portfoliosite/images/bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Main Center Hero Stage */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 my-auto pt-4 md:pt-8">
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center">

          {/* Top Left: Cursive Script ("Magnus's") */}
          <div className="absolute -top-6 sm:-top-8 md:-top-12 left-2 sm:left-6 md:left-12 lg:left-20 z-30 pointer-events-none">
            <span className="hero-script font-script text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white-50 -rotate-12 inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] select-none">
              Magnus's
            </span>
          </div>

          {/* Top Right: Category Subtitle */}
          <div className="absolute -top-4 sm:-top-6 md:-top-10 right-2 sm:right-6 md:right-12 lg:right-20 z-10 pointer-events-none">
            <span className="hero-subtitle  text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] md:tracking-[0.15em] text-blue-50 uppercase select-none">
              Software Developer
            </span>
          </div>

          {/* Big Bold "PORTFOLIO" Text */}
          <h1 className="portfolio-title flex items-center justify-between w-full text-5xl sm:text-7xl md:text-9xl lg:text-[13.5vw] font-black tracking-tighter uppercase leading-none text-[#2d2e3d] hover:text-[#393b4e] transition-colors duration-500 select-none z-10">
            {portfolioText.map((char, index) => (
              <span key={index} className="inline-block overflow-hidden py-1">
                <span className="portfolio-char inline-block will-change-transform">
                  {char}
                </span>
              </span>
            ))}
          </h1>

          {/* Centered Grayscale Portrait Cutout */}
          <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-end pointer-events-none w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="/portfoliosite/images/profile.png"
              alt="Magnus Chan"
              className="hero-portrait max-h-[32vh] sm:max-h-[38vh] md:max-h-[44vh] lg:max-h-[50vh] w-auto object-contain grayscale contrast-115 brightness-95 drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Hero Details (Tagline, CTA buttons, Socials) */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Left: Tagline & Buttons */}
          <div className="flex flex-col gap-4 max-w-md">
            <p className="hero-footer-item text-white-50/75 text-xs sm:text-sm md:text-base leading-relaxed">
              Authentic digital experiences crafted with code, 3D interaction, and modern design.
            </p>
            <div className="hero-footer-item flex flex-wrap items-center gap-3">
              <Button
                text="See My Work"
                id="work"
                className="w-40 sm:w-48 h-11 md:h-12"
              />
              <a
                href="/portfoliosite/CV/CV- Chan Seng Kuan.pdf"
                download
                className="btn-outline w-40 sm:w-48 h-11 md:h-12 flex items-center justify-center font-medium text-xs md:text-sm rounded-xl border border-white-50/40 text-white-50 hover:bg-white-50 hover:text-black transition-all duration-300"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Stats Counter Section */}
      <Counter />
    </section>
  )
}

export default Hero
