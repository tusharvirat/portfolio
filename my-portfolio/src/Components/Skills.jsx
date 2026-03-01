import Cards from "./Cards";
import { Separator } from '@radix-ui/react-separator';

const Skills = () => {
  console.log('Skills component rendered');
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl -rotate-90 text-[#9929EA]">
          SKILLS
        </h1>
      </div>
      {/* show separator only on medium+ */}
      <Separator orientation="vertical" className="mx-4 hidden md:block" />
      <div className="flex flex-col items-center mt-8 md:mt-0 px-4">
        <div className="flex flex-wrap justify-center gap-5">
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
