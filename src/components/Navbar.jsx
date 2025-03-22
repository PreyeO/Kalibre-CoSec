import React from "react";
import Logo from "./ui/Logo";
import Logo1 from "../../public/1.svg";

const Navbar = () => {
  return (
    <nav className=" absolute w-full md:h-[80px] h-[60px] flex items-center lg:px-[80px] px-[20px] mt-3  ">
      <img src={Logo1} alt="logo" className="w-60 h-60 mt-3" />
    </nav>
  );
};

export default Navbar;
