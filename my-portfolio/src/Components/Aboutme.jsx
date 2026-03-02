const Aboutme = () => {
  return (
    <div className="bg-black flex flex-col gap-10 sm:gap-14 md:gap-20 px-4 sm:px-8 w-screen scroll-mt-20 py-16 sm:py-24" id="about">
      {/* Heading */}
      <h1 className="text-[#676767] font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center">
        ABOUT ME
      </h1>

      {/* Description */}
      <p className="text-[#676767] font-bold text-center leading-8 text-sm sm:text-base md:text-xl uppercase font-mono">
        Building clean, responsive, scalable web applications <br />
        Specialized in React and Tailwind frontend development <br />
        Develop backend services using Node.js and Express <br />
        Passionate about learning and solving real problems
      </p>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-20 items-center">
        <h1 className="text-[#676767] font-bold text-center text-xl sm:text-2xl md:text-3xl font-mono">
          LEETCODE SCORE: 12
        </h1>
        <h1 className="text-[#676767] font-bold text-center text-xl sm:text-2xl md:text-3xl font-mono">
          PROJECTS DEPLOYED: 02
        </h1>
      </div>

      {/* Buttons */}
      <span className="flex justify-evenly items-center">
        <button className="text-black font-bold bg-purple-600 py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base rounded-full h-12 sm:h-14 w-36 sm:w-40 hover:bg-purple-700 transition-colors">
          <a href="#contact">CONTACT ME</a>
        </button>
        <button className="text-black font-bold bg-purple-600 py-2 px-4 sm:py-4 sm:px-6 text-sm sm:text-base rounded-full h-12 sm:h-14 w-36 sm:w-40 hover:bg-purple-700 transition-colors">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
        </button>
      </span>

    </div>
  );
};

export default Aboutme;
