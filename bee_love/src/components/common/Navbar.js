import React from 'react'
import "../../index.css"
import { Link, NavLink } from "react-router-dom";
import { BsToggles } from 'react-icons/bs';

const Navbar = ({to}) => {
    const navlinks = "text-center text-dark_brown text-normal font-[450] hover:text-orange hover:text-[18px] hover:font-[500]"
    const menulinks = "text-center text-dark_brown text-[16px] font-[400] hover:text-orange hover:text-[18px] hover:font-[450]"
  return (
    <div className='bg-background-1'>
      <nav className='relative container p-4 bg-background-1'>
        <div className='flex items-center justify-between'>
            <div className='h-[40px]'>
                <img className='h-[65%] md:max-w-[100%] md:h-[75%] lg:h-[100%]' src='honeylogo.png' alt='logo'/>
            </div>
            <div className='hidden pt-1 space-x-8 lg:flex xl:space-x-12'>
                <NavLink to="/" className={navlinks}>Home</NavLink>
                <NavLink to="about" className={navlinks}>About</NavLink>
                <NavLink to="products" className={navlinks}>Products</NavLink>
                <NavLink to="services" className={navlinks}>Services</NavLink>
                <NavLink to="testimonials" className={navlinks}>Testimonials</NavLink>
                <NavLink to="contact" className={navlinks}>Contact us</NavLink>
            </div>
            <button id="menu-btn" className='block hamburger md:hidden focus:outline-none' data-collapse-toggle="menu-btn" aria-controls="open">
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
            </button>
        </div>
        <div className='md:hidden'>
            <div id="menu" className='absolute hidden flex-col items-center self-end py-4 space-y-4 rounded-md sm:w-auto sm:self-center left-6 right-6 drop-shadow-md bg-background-3'>
            <NavLink to="/" className={menulinks}>Home</NavLink>
                <NavLink to="about" className={menulinks}>About</NavLink>
                <NavLink to="products" className={menulinks}>Products</NavLink>
                <NavLink to="services" className={menulinks}>Services</NavLink>
                <NavLink to="testimonials" className={menulinks}>Testimonials</NavLink>
                <NavLink to="contact" className={menulinks}>Contact us</NavLink>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
