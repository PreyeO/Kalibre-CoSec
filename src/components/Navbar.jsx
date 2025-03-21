import React from "react";
import Logo from "./ui/Logo";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px]  flex items-center px-[80px] ">
      <Logo />
    </nav>
  );
};

export default Navbar;
