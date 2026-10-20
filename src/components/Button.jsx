import React from 'react'

const Button = ({ text, className, id = 'work' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className={`cta-wrapper ${className ?? ''}`}
      aria-label={text}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <span className="text">{text}</span>
        <div className="arrow-wrapper">
          <img src="/portfoliosite/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </a>
  );
};

export default Button;
