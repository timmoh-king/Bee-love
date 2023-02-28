import React from 'react'
import Button from './Button'

const Homepage = ({title, description, imgsrc, alt}) => {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 flex-col bg-transparent md:flex-row'>
        <div className='mt-4 mx-2 md:mt-18 lg:mt-28 2xl:mt-32 flex flex-col space-y-4 md:space-y-6 lg:space-y-10'>
            <h2 className='text-xl md:text-2xl font-semibold md:font-bold text-center md:text-start text-dark_brown'>{title}</h2>
            <p className='text-[12px] md:text-[15px] lg:text-[16px] text-center md:text-start text-black'>{description}</p>
            <div className='mt-4 flex justify-center md:justify-start'>
                <Button isButtonSmall={true} buttonText="Learn more" />
            </div>
        </div>
        <div>
            <img className='object-cover w-full h-[30vh] md:h-[50vh] lg:h-[75vh]' src={imgsrc} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default Homepage
