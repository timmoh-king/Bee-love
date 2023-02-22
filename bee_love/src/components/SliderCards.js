import React from "react";
import { BsChatLeftQuoteFill } from "react-icons/bs";

const SliderCards = ({
  isProduct,
  imgsrc,
  alt,
  imgTitle,
  imgDescription,
  bgColor,
  userName,
  testimonial,
  branchName,
  countyName,
}) => {

  return (
    <>
      {isProduct ? (
        <div className="bg-white max-w-sm min-h-[505px] shadow rounded-md overflow-hidden mx-2">
          <img
            className="h-[300px] w-full object-cover"
            src={imgsrc}
            alt={alt}
          />
          <div
            className={`p-6 flex flex-col justify-between min-h-[205px] bg-yellow ${
              bgColor ? bgColor : ""
            }`}
          >
            <p className="font-md text-[14px] md:text-[17px]">{imgTitle}</p>
            <p className="text-gray-700 text-[12px] md:text-[15px]">{imgDescription}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col max-w-sm min-h-[505px] justify-between shadow rounded-md overflow-hidden mx-2 bg-background-5">
          <div className="flex flex-row mt-4 mb-3 mx-3 p-1 items-center h-[26px] justify-end">
            <BsChatLeftQuoteFill className="fill-dark_brown" />
          </div>

          <h2 className="font-md text-center text-[14px] md:text-[17px] mt-2">{userName}</h2>

          <div className="mt-1 text-center">
            <p className="text-gray-700 mx-2 text-[12px] md:text-[15px]">{testimonial}</p>
          </div>

          <div
            className={`flex flex-row justify-between bg-orange min-h-[145px] items-center mt-4 p-4 ${
              bgColor ? bgColor : ""
            }`}
          >
            <div className="">
              <p className="text-white font-medium text-[12px] md:text-[16px] text-start leading-none">
                {branchName}
              </p>
            </div>
            <div className="">
              <p className="text-white font-medium text-[12px] md:text-[16px] text-end leading-none">
                {countyName}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderCards;
