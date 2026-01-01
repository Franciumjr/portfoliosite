import React from 'react'
import {navLinks} from "../constant_v2/index_v2" 
import { useState ,useEffect } from 'react';



const Navbar = () => {

    const [scroll, setScroll] = useState(false); //use Usestate to determine scroll status

    useEffect(() => {
        const scrollHandler = () => {
            const isScrolled = window.scrollY > 10;
            setScroll(true);
        }

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []) // depends on what the useEffect listens to 

  return (
    <div>
        <header className= {`navbar ${scroll ? 'scrolled' : 'not-scrolled'}`}> {/*dynamic string(the className can change depends on situation)*/} 
            <div className="inner">
                <a href="#hero" className='logo'>
                    <img width= "100px" src="/portfoliosite/public/images/logos/signature.png" alt="white" />
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key = {link} className='group'>
                                <a  href={link}>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className='contact-btn group'>
                    <div className="inner">
                        <span>Contact</span>
                    </div>
                </a>
            </div>
        </header>
    </div>
  )
}

export default Navbar
