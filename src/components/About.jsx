import React from "react";
import grow from "../images/grow.svg";

const About = () => {
  return (
    <div className="container px-6">
      <div id="/about" className="  sm:text-6xl text-4xl font-bold  text-center  mt-6">
        Who are we?
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className=" flex w-[400px] h-[400px] mx-auto my-4" src={grow} />
        <div className="flex flex-col items-center">
        <div>
        <p className=" mt-6 max-w-xl text-lg ">
          TRADER NATION provides you protfolio management service and daily
          trading calls about the Indian stock markets with the research done by
          the professional Research Team.
          </p>
        <p className="mt-6 max-w-xl text-lg">
          Due to our incredible growth over the previous two years, TRADER
          NATION is pleased to announce that we have moved from using Telegram
          exclusively to manage client accounts and deliver services. We have 
          over 13K subscriber and 100+ happy customers. With your support, we are now expanding our
          efforts to make trading more reliable and safe.
        </p>
        </div>
        <button className="bg-[#AB1212] w-[200px] rounded-md font-medium my-6 mx-auto 
           tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform  hover:scale-105 focus:outline-none focus:bg-opacity-90">
            Join Telegram
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
