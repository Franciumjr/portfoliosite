import React from 'react'

const Button = ({text, className, id}) => {
  return (
    
    <a onClick={(e) => {e.preventDefault(); // prevent when the button is clicked, it resorts to the default func
      const target = document.getElementById('counter')
      if (target && id ) {
        const offset = window.innerHeight * 0.15 //offsets the counter area so it perfectly aligns with the viewers screen
        
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({top, behavior: "smooth"})
      }
    }} className = {`${className ?? ''}`} cta-wrapper> {/*Check if the classname exists. If not(&&), render nothing */}
        <div className="cta-button group">
            <div className="bg-circle"></div>
            <div className="text">{text}</div>
            <div className="arrow-wrapper">
                <img src="/portfoliosite/src/asset/assets/public/images/arrow-down.svg" alt="" />
            </div>
        </div>
    </a>
  )
}

export default Button;
