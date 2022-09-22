import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import tnLogo from "../images/tnLogo.svg";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navState = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex px-4 pt-2">
        <img className="w-[50px] h-[50px] my-1" src={tnLogo}></img>
        <h1
          className="px-1 p-4 w-full font-bold uppercase flex items-center justify-center sm:justify-start text-xl
        "
        >
          trader Nation
        </h1>
        <ul className="md:flex hidden">
          <li className="p-4 font-semibold hover:text-[#AB1212] hover:text-xl">about</li>
          <li className="p-4 font-semibold hover:text-[#AB1212] hover:text-xl">services</li>
          <li className="p-4 font-semibold hover:text-[#AB1212] hover:text-xl">contact</li>
        </ul>
        <div onClick={navState} className="flex md:hidden p-4 items-center ">
          {!nav ? <HiMenuAlt4 size={20} /> : <HiX size={20} />}
        </div>
        <div
          className={
            !nav
              ? "hidden"
              : "md:hidden my-12 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white "
          }
        >
          <ul className="">
            <li className="flex justify-center font-semibold pt-4  hover:text-[#AB1212] hover:text-xl ">
              about
            </li>
            <li className="flex justify-center font-semibold pt-4  hover:text-[#AB1212] hover:text-xl ">
              services
            </li>
            <li className="flex justify-center font-semibold py-4  hover:text-[#AB1212] hover:text-xl ">
              contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

