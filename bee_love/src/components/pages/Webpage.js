import React from 'react';
import Homepage from '../common/Homepage';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../common/Footer";

const Webpage = () => {
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
            <Homepage title="Bee love apiaries" imgsrc="honey10.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Bee love apiaries" imgsrc="honey9.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Bee love apiaries" imgsrc="honey11.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Bee love apiaries" imgsrc="honey13.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
            <Homepage title="Bee love apiaries" imgsrc="honey12.png" alt="image" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
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
