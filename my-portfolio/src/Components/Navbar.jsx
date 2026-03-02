import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  console.log('Navbar rendered');
  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row justify-around items-center font-bold text-[#676767] px-4 py-2">
        <span className="text-base sm:text-lg hover:text-purple-600"><a href="#about">ABOUT</a></span>
        <span className="text-base sm:text-lg hover:text-purple-600"><a href="#contact">CONTACT ME</a></span>
        <span className="text-base sm:text-lg hover:text-purple-600"><a href="#projects">PROJECTS</a></span>
        <span className="text-base sm:text-lg hover:text-purple-600"><a href="#skills">SKILLS</a></span>
      </div>
    </div>
  );
};

export default Navbar