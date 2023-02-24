import React from "react";

const About = ({title, description}) => {
  return (
    <div className="max-w-sm md:max-w-lg max-h-lg shadow-lg rounded-md overflow-hidden mx-2 border-solid border-2 border-yellow">
      <p className="text-center text-black p-2 md:p-4 text-[12px] md:text-[14px] lg:text-[15px]">
        {description}
      </p>
      <div className="flex flex-row justify-center py-3">
        <p className="items-center text-black font-semibold text-[13px] md:text-[15px] lg:text-[16px]">{title}</p>
      </div>
    </div>
  );
};

export default About;
