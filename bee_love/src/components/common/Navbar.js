import React from 'react'

const Navbar = ({home, about, products, services, testimonial, contact}) => {
    const navlinks = "text-center text-dark_brown text-normal font-[450] hover:text-orange hover:text-[18px] hover:font-[500]"
    const menulinks = "text-center text-dark_brown text-[16px] font-[400] hover:text-orange hover:text-[18px] hover:font-[450]"
  return (
    <div>
      <nav className='relative container p-4 bg-transparent'>
        <div className='flex items-center justify-between'>
            <div className='h-[40px]'>
                <img className='h-[65%] md:max-w-[100%] md:h-[75%] lg:h-[100%]' src='honeylogo.png' alt='logo'/>
            </div>
            <div className='hidden pt-1 space-x-8 lg:flex xl:space-x-12'>
                <a href={home} className={navlinks}>Home</a>
                <a href={about} className={navlinks}>About</a>
                <a href={products} className={navlinks}>Products</a>
                <a href={services} className={navlinks}>Services</a>
                <a href={testimonial} className={navlinks}>Testimonials</a>
                <a href={contact} className={navlinks}>Contact us</a>
            </div>
            <button id="menu-btn" className='block hamburger md:hidden focus:outline-none' data-collapse-toggle="menu-btn" aria-controls="open">
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
            </button>
        </div>
        <div className='md:hidden'>
            <div id="menu" className='absolute hidden flex-col items-center self-end py-4 space-y-4 rounded-md sm:w-auto sm:self-center left-6 right-6 drop-shadow-md bg-background-3'>
            <a href={home} className={menulinks}>Home</a>
                <a href={about} className={menulinks}>About</a>
                <a href={products} className={menulinks}>Products</a>
                <a href={services} className={menulinks}>Services</a>
                <a href={testimonial} className={menulinks}>Testimonials</a>
                <a href={contact} className={menulinks}>Contact us</a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
