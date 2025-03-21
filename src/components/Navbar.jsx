import React from "react";
import Logo from "./ui/Logo";

const Navbar = () => {
  return (
    <nav className=" absolute w-full md:h-[80px] h-[60px] flex items-center lg:px-[80px] px-[20px]  ">
      <Logo />
    </nav>
  );
};

export default Navbar;
