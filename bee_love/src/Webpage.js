import React from 'react';
import Homepage from './components/Homepage';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from './components/Navbar';
import About from "./components/About";
import SliderCards from "./components/SliderCards";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

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
          <Navbar />
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
      <div className='mt-8 md:mt-12 lg:mt-18 container'>
      <div className="flex flex-col items-center lg:flex-row">
         <About title="Mission" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
         <About title="Values" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
         <About title="Vision" description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types" />
      </div>
      </div>
      <div className='mt-8 md:mt-12 lg:mt-24 container'>
        <p className={headings}>What we do?</p>
        <div>
        <Carousel className='items-center' responsive={responsive} showDots={true} autoPlaySpeed={1000} removeArrowOnDeviceType={["mobile"]}>
            <SliderCards isProduct={true} imgsrc="honey4.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-yellow`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey6.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-brown`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey6.jpg" alt="image" imgTitle="Honey 4" bgColor={`bg-orange`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey1.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-brown`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey6.jpg" alt="image" imgTitle="Honey 4" bgColor={`bg-yellow`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
        </Carousel>
      </div>
      </div>
      <div className='mt-8 md:mt-12 lg:mt-24 container bg-background-3'>
        <p className={headings}>What do we sell?</p>
        <div>
        <Carousel responsive={responsive} showDots={true} autoPlaySpeed={1000} removeArrowOnDeviceType={["mobile"]}>
            <SliderCards isProduct={true} imgsrc="honey6.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-brown`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey4.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-orange`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey1.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-yellow`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey4.jpg" alt="image" imgTitle="Honey 2" bgColor={`bg-orange`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
            <SliderCards isProduct={true} imgsrc="honey1.jpg" alt="image" imgTitle="Honey 4" bgColor={`bg-brown`} imgDescription="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types"  />
        </Carousel>
      </div>
      </div>
      <div className='mt-8 md:mt-12 lg:mt-24 container'>
        <p className={headings}>What are people saying?</p>
        <div>
        <Carousel responsive={responsive} showDots={true} autoPlaySpeed={1000} removeArrowOnDeviceType={["mobile"]}>
            <SliderCards isProduct={false} bgColor={`bg-orange`} userName="John Doe" branchName="Makindu" countyName="Makueni" testimonial = "To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types" />
            <SliderCards isProduct={false} bgColor={`bg-yellow`} userName="Bush Lincon" branchName="Ololua" countyName="Kajiado" testimonial = "To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types" />
            <SliderCards isProduct={false} bgColor={`bg-brown`} userName="Joel Gitonga" branchName="CBD-Town" countyName="Nairobi" testimonial = "To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types" />
            <SliderCards isProduct={false} bgColor={`bg-orange`} userName="Atieno Otieno" branchName="Mlolongo" countyName="Machakos" testimonial = "To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types" />
            <SliderCards isProduct={false} bgColor={`bg-yellow`} userName="John Akinyi" branchName="Limuru" countyName="Kiambu" testimonial = "To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash shell actually works. There are different types" />
        </Carousel>
        </div>
      </div>
      <div className='mt-14 md:mt-18 lg:mt-24 container items-center bg-background-2'>
      <p className={headings}>Contact us</p>
      <div>
        <ContactUs />
      </div>
      </div>
      <div className='mt-6 bg-background-4'>
        <Footer />
      </div>
    </div>
  )
}

export default Webpage
