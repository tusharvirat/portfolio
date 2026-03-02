import Cards from "./Cards";

const Skills = () => {
  return (
    <div className="flex flex-row w-screen scroll-mt-20 bg-black py-16 sm:py-24" id="skills">

      {/* Rotated Title - fixed width */}
      <div className="flex flex-col justify-center items-center w-10 sm:w-16 md:w-20 lg:w-24 shrink-0">
        <h1 className="font-bold text-lg sm:text-3xl md:text-5xl -rotate-90 text-[#9929EA] whitespace-nowrap">
          SKILLS
        </h1>
      </div>

      {/* Vertical Divider */}
      <div className="w-0.5 bg-gray-600 self-stretch"></div>

      {/* Cards */}
      <div className="flex flex-col items-start justify-center gap-3 sm:gap-5 md:gap-8 py-6 sm:py-10 pl-2 sm:pl-5 md:pl-8 lg:pl-10">

        {/* Row 1 */}
        <div className="flex flex-row items-center gap-1 sm:gap-3 md:gap-4 lg:gap-5">
          <Cards img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML" />
          <Cards img="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" />
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
        </div>

        {/* Row 2 */}
        <div className="flex flex-row items-center gap-1 sm:gap-3 md:gap-4 lg:gap-5">
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <Cards img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          <Cards img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
        </div>

      </div>
    </div>
  );
};
export default Skills;