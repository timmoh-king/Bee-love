import React from 'react'

const Cards = ({imgsrc, alt, imgTitle, imgText}) => {
  return (
    <div className="max-w-sm bg-white border border-background-1 rounded-[5px] shadow">
        <img className='rounded-t-[5px] object-cover' src={imgsrc} alt={alt} />
      <div className='p-4 rounded-b-[5px] bg-orange'>
        <p className='mb-2 text-[18px] font-medium tracking-tight text-white'>
            {imgTitle}
        </p>
        <p className='mb-3 text-normal tracking-tight text-white'>
            {imgText}
        </p>
      </div>
    </div>
  )
}

export default Cards
