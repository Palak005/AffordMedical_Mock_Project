import React, { useState } from 'react';
import SearchBar from "./SearchBar"

const Navbar = () => {

  return (
    <nav className="bg-[#1e293b] text-white flex items-center justify-between font-[Arial, sans-serif] fixed top-0 left-0 w-full z-50 px-4 py-5">
      <div className="text-xl font-semibold">
            ForeCastify
      </div>

      <div className="flex gap-3 w-1/2 max-w-lg">
      <SearchBar/>
      </div>

      <div className="w-[80px]" />
    </nav>
  );
};

export default Navbar;
