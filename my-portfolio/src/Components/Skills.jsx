import Cards from "./Cards";

const Skills = () => {
  return (
    <div className="flex flex-row w-screen h-screen scroll-mt-20" id="skills">
      <div className=" flex flex-col justify-center ">
        <h1 className="font-bold text-5xl -rotate-90 text-[#9929EA] ">SKILLS</h1>
      </div>
        
      <div className="flex flex-col items-center mt-30 ">
        <div className="flex space-x-5">
        <div className="w-0.5 h-auto bg-gray-600 "></div>
          <Cards
            img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
            alt="HTML"
          />
          <Cards
            img="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
            alt="CSS"
          />
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
          />
        </div>
        <div className="flex space-x-5">
        <div className="w-0.5 h-auto bg-gray-600 "></div>
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
          />
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express"
          />
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />
          <Cards
            img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          <Cards
            img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
