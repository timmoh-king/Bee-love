import React from 'react'

const Navbar = ({to}) => {
    const navlinks = "text-centertext-dark_brown text-normal font-[450] hover:text-orange hover:text-[18px] hover:font-[500]"
  return (
    <div>
      <nav className='relative container p-4'>
        <div className='flex items-center justify-between'>
            <div className='h-[40px]'>
                <img className='h-[65%] md:max-w-[100%] md:h-[75%] lg:h-[100%]' src='honeylogo.png' alt='logo'/>
            </div>
            <div className='hidden pt-1 space-x-6 lg:flex xl:space-x-8'>
                <a href={to} className={navlinks}>Home</a>
                <a href={to} className={navlinks}>About</a>
                <a href={to} className={navlinks}>Products</a>
                <a href={to} className={navlinks}>Services</a>
                <a href={to} className={navlinks}>Testimonials</a>
                <a href={to} className={navlinks}>Contact us</a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
