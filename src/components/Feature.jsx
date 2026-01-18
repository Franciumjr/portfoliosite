import React from 'react'
import { abilities } from "../constant_v2/index_v2"


const Feature = () => {
  return (
    <div>
        <div className="w-full padding-x-lg ">
            <div className="mx-auto grid-cols-3 md:flex row gap-3">
                {abilities.map(({imgPath, title, desc}) => (
                    <div key = {title} 
                    className='card-border rounded-2xl p-8 flex flex-col gap-4'>
                        <div className="size-14 flex items-center justify-center rounded-full">
                        <img src={imgPath} alt={title} /> 
                            
                        </div>
                        <h3 className='font-bold text-2xl'>{title}</h3>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Feature
