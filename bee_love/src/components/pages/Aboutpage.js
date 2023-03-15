import React from "react";
import Homepage from "../common/Homepage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import About from "../common/About";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Aboutpage = () => {
  const landingResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 480 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="flex flex-col bg-gradient-to-b from-background-1 to-white">
        <div>
          <Carousel
            showDots={true}
            autoPlaySpeed={1000}
            responsive={landingResponsive}
          >
            <Homepage
              title="Lorem Ipsum"
              imgsrc="honey10.png"
              alt="image"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <Homepage
              title="Lorem Ipsum"
              imgsrc="honey9.png"
              alt="image"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <Homepage
              title="Lorem Ipsum"
              imgsrc="honey11.png"
              alt="image"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <Homepage
              title="Lorem Ipsum"
              imgsrc="honey13.png"
              alt="image"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <Homepage
              title="Lorem Ipsum"
              imgsrc="honey12.png"
              alt="image"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
          </Carousel>
        </div>
      </div>
      <div className="bg-background-2 pt-2 pb-8">
        <div className="mt-8 md:mt-12 lg:mt-18 container">
          <div className="flex flex-col items-center lg:flex-row">
            <About
              title="Mission"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <About
              title="Values"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <About
              title="Vision"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
          </div>
        </div>
      </div>

      <div className="bg-background-2 pt-2 pb-8">
        <div className="mt-8 md:mt-12 lg:mt-18 container">
          <div className="flex flex-col items-center lg:flex-row">
            <About
              title="Mission"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <About
              title="Values"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
            <About
              title="Vision"
              description="To be able to appreciate this functionality of the shell, you have to get a good understanding of how the Bash To be able to appreciate this functionality of the shell, shell actually works. There are different types"
            />
          </div>
        </div>
      </div>

      <div className="bg-background-4 mt-4 md:mt-6 lg:mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Aboutpage;
