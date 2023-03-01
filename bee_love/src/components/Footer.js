import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram} from "react-icons/bs";

const Footer = () => {
    const iconStyle="fill-dark_brown"
  return (
    <div>
      <div className='container h-[26px] p-2 flex flex-row items-center justify-end space-x-3 bg-background-4'>
        <a href='https://twitter.com/home?lang=en'><BsTwitter className={iconStyle}/></a>
        <a href='https://www.facebook.com/beeloveapiarieskenya'><BsFacebook className={iconStyle}/></a>
        <a href='https://www.instagram.com/bee.love.honey/'><BsInstagram className={iconStyle}/></a>
        
      </div>
    </div>
  )
}

export default Footer
