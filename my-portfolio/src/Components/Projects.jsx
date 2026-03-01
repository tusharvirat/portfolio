import React from "react";

const Projects = () => {
  console.log('Projects component rendered');
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl -rotate-90 text-[#9929EA]">
          PROJECTS
        </h1>
      </div>
      <div className="flex-1 flex flex-col items-center mt-8 md:mt-0 px-4">
        {/* project cards or content will go here */}
      </div>
    </div>
  );
};

export default Projects;
