import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram} from "react-icons/bs";

const Footer = () => {
    const iconStyle="fill-dark_brown"
  return (
    <div>
      <div className='container h-[26px] p-2 flex flex-row items-center justify-end space-x-3 bg-background-4'>
        <BsTwitter className={iconStyle}/>
        <BsFacebook className={iconStyle}/>
        <BsInstagram className={iconStyle}/>
      </div>
    </div>
  )
}

export default Footer
