import React from "react";

const Aboutme = () => {
  console.log('Aboutme component rendered');
  return (
    <div className="bg-black flex flex-col gap-20 px-4 sm:px-8">
      <h1 className="text-[#C0C0C0] font-extrabold text-3xl sm:text-5xl md:text-9xl text-center">
        ABOUT ME
      </h1>
      <p className="text-[#C0C0C0] font-bold text-center leading-7 text-base sm:text-xl uppercase font-mono">
        Building clean, responsive, scalable web applications <br /> Specialized
        in React and Tailwind frontend development <br /> Develop backend
        services using Node.js and Express <br /> Passionate about learning and
        solving real problems
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-20">
        <h1 className="text-[#C0C0C0] font-bold text-center text-2xl sm:text-3xl font-mono">
          LEETCODE SCORE: 12
        </h1>
        <h1 className="text-[#C0C0C0] font-bold text-2xl sm:text-3xl font-mono">
          PROJECTS DEPLOYED: 02
        </h1>
      </div>
      <span className="flex justify-center">
        <button className="text-[#C0C0C0] font-bold bg-purple-600 py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-l rounded-4xl">
          CONTACT ME
        </button>
      </span>
    </div>
  );
};

export default Aboutme;
