import React from 'react'

const Navbar = () => {
  console.log('Navbar rendered');
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:flex-row justify-around items-center font-bold text-[#C0C0C0] px-4 py-2">
        <span className="text-base sm:text-lg">ABOUT</span>
        <span className="text-base sm:text-lg">CONTACT ME</span>
        <span className="text-base sm:text-lg">PROJECTS</span>
        <span className="text-base sm:text-lg">CERTIFICATIONS</span>
      </div>
    </div>
  );
};

export default Navbar