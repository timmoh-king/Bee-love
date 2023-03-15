import React from 'react'

const Button = ({isButtonSmall, buttonText, onClick, buttonType}) => {
  return (
    <div>
      {isButtonSmall ?
      <button className="block p-2 px-6 pt-1 h-[32px] w-[120px] md:w-[150px] text-white text-xs md:text-sm rounded-[5px] baseline bg-dark_brown hover:bg-brown" type={buttonType} onClick={onClick}>
        {buttonText}
      </button> 
      : 
      <button className='p-3 px-6 pt-1 h-[32px] w-[478px] md:w-[312px] lg:w-[505px] text-white text-sm md:text-base rounded-[5px] baseline bg-dark_brown hover:bg-brown' onClick={onClick}>{buttonText}</button>}
    </div>
  )
}

export default Button