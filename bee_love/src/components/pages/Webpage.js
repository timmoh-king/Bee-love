import React from 'react';
import Homepage from '../common/Homepage';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from '../common/Navbar';
import About from "../common/About";
import SliderCards from "../common/SliderCards";
import ContactUs from "../common/ContactUs";
import Footer from "../common/Footer";

const Webpage = () => {
    const headings = 'flex-row text-center py-3 md:py-4 lg:py-6 text-dark_brown font-bold text-xl'
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 604 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 604, min: 0 },
          items: 1
        }
      };
      const landingResponsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 480 },
          items: 1
        }
      };
  return (
    <div>
      <div className='flex flex-col bg-gradient-to-b from-background-1 to-white'>
        <div>
        <Carousel showDots={true} autoPlaySpeed={1000} responsive={landingResponsive}>
            <Homepage title="Lorem Ipsum" imgsrc="honey10.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Lorem Ipsum" imgsrc="honey9.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Lorem Ipsum" imgsrc="honey11.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Lorem Ipsum" imgsrc="honey13.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Lorem Ipsum" imgsrc="honey12.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
        </Carousel>
        </div>
      </div>

      <div className='bg-background-4 mt-4 md:mt-6 lg:mt-8'>
        <Footer />
      </div>
    </div>
  )
}

export default Webpage
