import React, { useRef } from 'react'

const Glowcard = ({card, children, index}) => {

    const cardRef = useRef([]);

    const mousehandler = (index) => (e) => {
        const card = cardRef.current[index]; //find current card based on its index
        if (!card) {
            return;
        }
        //Get the mouse position based on the card
        const rect = card.getBoundingClientRect(); //rect = all coordinates within a card
        const mouseX = e.clientX - rect.left - rect.width /2;
        const mouseY = e.clientY - rect.top - rect.height /2; 

        //Angle calcuation of cursor from centre of card
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        // ensure that the angle are 0 < x < 360 by using modulo function
        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60)
    }


    return (
        <div ref={(el) => {cardRef.current[index] = el}} onMouseMove={mousehandler(index)} 
        className="card card-border timeline-card rounded-xl p-10">
            
            <div className="flex items-center gap-1 mb-5"></div>
            <div className="mb-5">
                <p className='text-lg text-white-50'>{card.title}</p>
            </div>
            {children}
        </div>
    )
}

export default Glowcard
