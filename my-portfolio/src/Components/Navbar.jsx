
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black sticky top-0 z-50">
      {/* Desktop Nav */}
      <div className="hidden sm:flex justify-around items-center font-bold text-[#676767] px-4 py-3">
        <span className="text-lg hover:text-purple-600"><a href="#about">ABOUT</a></span>
        <span className="text-lg hover:text-purple-600"><a href="#contact">CONTACT ME</a></span>
        <span className="text-lg hover:text-purple-600"><a href="#projects">PROJECTS</a></span>
        <span className="text-lg hover:text-purple-600"><a href="#skills">SKILLS</a></span>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex justify-between items-center px-4 py-3">
        <span className="text-[#676767] font-bold text-lg">MENU</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#676767] hover:text-purple-600 focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-4 pb-4 font-bold text-[#676767]">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-purple-600">ABOUT</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-600">CONTACT ME</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-purple-600">PROJECTS</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-purple-600">SKILLS</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;