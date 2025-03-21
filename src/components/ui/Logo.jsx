import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-[#1E2A38] font-bold text-3xl">
      <div className="w-10 h-10 bg-gradient-to-r from-[#1E2A38] to-[#0077B6] rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-lg font-semibold">K</span>
      </div>
      <span className="bg-gradient-to-r from-[#1E2A38] via-[#0077B6] to-[#00A896] bg-clip-text text-transparent">
        Kalibre CoSec
      </span>
    </div>
  );
};

export default Logo;
