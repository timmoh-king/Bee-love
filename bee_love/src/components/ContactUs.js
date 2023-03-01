import React from 'react'
import Button from './Button'
import { BsFillTelephoneFill, BsFillChatDotsFill, BsFillEnvelopeFill, BsFillCursorFill } from "react-icons/bs";

const ContactUs = () => {
    const list = 'flex flex-row items-center space-x-3';
    const icon = 'fill-dark_brown';
    const text = 'text-[12px] md:text-[14px] text-black'
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 flex-col md:flex-row-reverse'>
      <div className='items-center justify-center md:justify-start space-y-2'>
        <input type="text" className='text-center text-black text-[12px] md:text-[15px] w-full h-[95px] md:h-[130px] lg:h-[260px] rounded-md border border:brown focus:ring-yellow' placeholder='write a message' />  
        <Button isButtonSmall={false} buttonText="send" />
      </div>
      <div className='mt-4 mx-2 md:mt-8 lg:mt-20 md:ml-10'>
        <ul className='flex flex-col space-y-2 md:space-y-3 lg:space-y-4'>
            <li className={list}>
                <BsFillChatDotsFill className={icon}/>
                <p className={text}>P.O BOX 30047 - 010</p>
            </li>
            <li className={list}>
                <BsFillTelephoneFill className={icon}/>
                <p className={text}>+254 718543357</p>
            </li>
            <li className={list}>
                <BsFillEnvelopeFill className={icon}/>
                <p className={text}>beeaparies@gmail.com</p>
            </li>
            <li className={list}>
                <BsFillCursorFill className={icon}/>
                <p className={text}>Makueni - Kenya</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactUs
