import React from 'react'

const Navbar = () => {
  console.log('Navbar rendered');
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:flex-row justify-around items-center font-bold text-[#676767] px-4 py-2">
        <span className="text-base sm:text-lg"><a href="#about">ABOUT</a></span>
        <span className="text-base sm:text-lg"><a href="#contact">CONTACT ME</a></span>
        <span className="text-base sm:text-lg"><a href="#projects">PROJECTS</a></span>
        <span className="text-base sm:text-lg"><a href="#certifications">CERTIFICATIONS</a></span>
      </div>
    </div>
  );
};

export default Navbar