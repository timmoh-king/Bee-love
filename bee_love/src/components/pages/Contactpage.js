import React from 'react'
import ContactUs from "../common/ContactUs";
import Footer from "../common/Footer";

const Contactpage = () => {
  return (
    <div>
      <div>
      </div>  
      <div className='mt-0 md:mt-4 lg:mt-6 pb-4 w-full items-center bg-background-1'>
      <p className="flex-row text-center py-3 md:py-4 lg:py-6 text-dark_brown font-bold text-xl">Contact us</p>
      <div>
        <ContactUs />
      </div>
      </div>
      <div className='bg-background-4'>
        <Footer />
      </div>
    </div>
  )
}

export default Contactpage
