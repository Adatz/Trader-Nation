import React from "react";
import savings from "../images/savings.svg";

const Hero = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#085687] text-center md:text-xl">
            As much as 95 per cent of day traders lose money in the market.
          </p>
          <h2 className="font-bold md:text-3xl text-xl py-1 text-center text-gray-600">
            Money does not make the trader,
          </h2>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold py-1 text-center  ">
            It’s the trader that makes the money.
          </h1>
          <button className="bg-[#AB1212] w-[200px] rounded-md font-medium my-6 mx-auto 
           tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform  hover:scale-105 focus:outline-none focus:bg-opacity-90">
            Get Started
          </button>
        </div>
        <div>
          <img
            className=" flex w-[400px] h-[400px] mx-auto my-4 hover:scale-105"
            src={savings}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
