import React from 'react'

const Title = ({title, sub}) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="hero-badge">
          <p>{sub}</p>
        </div>
        <div className="font-semibold md:text-5xl">
            {title}
        </div>
      </div>
    </div>
  )
}

export default Title
